import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { useAsyncFn } from 'react-use';
import { useHistory, useLocation } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import FilterIcon from '@material-ui/icons/FilterList';
import queryString from 'query-string';

import { useConfirmationModal, useModal } from 'hooks';
import * as UsersAPI from 'http/users';

import DataTable from 'components/DataTable';

import Add from './Add';
import Edit from './Edit';
import Search from './Search';

import * as S from './styled';

const Users = () => {
  const history = useHistory();
  const location = useLocation();

  const urlParams = queryString.parse(location.search, { parseNumbers: true });

  const [users, setUsers] = useState([]);
  // during initialization, the page can only be zero.
  const [page, setPage] = useState(0);
  const [totalRowsCount, setTotalRowsCount] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(urlParams.rows || 10);
  const [searchString, setSearchString] = useState(urlParams.search || '');

  const { closeModal, Modal, setContent } = useModal();
  const { confirmationModal, setConfirmContent } = useConfirmationModal();

  const updateQueryString = useCallback(
    ({ page: pageNumber, pageSize, search }) => {
      const queryObject = {};

      if (search) {
        queryObject.search = search;
      }
      if (pageSize >= 20) {
        queryObject.rows = pageSize;
      }
      if (pageNumber) {
        queryObject.page = pageNumber;
      }

      const params = queryString.stringify(queryObject);

      history.push({
        pathname: history.location.pathname,
        search: params,
      });
    },
    [history],
  );

  // update data
  const getUpdatedUsers = useCallback(
    async params => {
      const {
        data: { results, total },
      } = await UsersAPI.list(params);

      setTotalRowsCount(parseInt(total, 10));
      setUsers(results);
      updateQueryString(params);
    },
    [updateQueryString],
  );

  useEffect(() => {
    const params = { page, pageSize: rowsPerPage, search: searchString };

    getUpdatedUsers(params);
  }, [getUpdatedUsers, page, rowsPerPage, searchString]);

  const onChangePageHandler = useCallback((e, newPage) => setPage(newPage), []);

  const onChangeRowsPerPageHandler = useCallback(e => {
    const newPageSize = parseInt(e.target.value, 10);

    setRowsPerPage(newPageSize);
    setPage(0);
  }, []);

  // TODO: refactor when the real filter is ready
  const sortingAction = useCallback(
    (direction, sortBy) => {
      let params = { page, pageSize: rowsPerPage };

      if (searchString) params = { ...params, search: searchString };

      if (direction && sortBy) {
        params = { ...params, column: sortBy, order: direction };
      }
      setPage(0);
      getUpdatedUsers(params);
    },
    [getUpdatedUsers, page, rowsPerPage, searchString],
  );

  const searchAction = useCallback(() => setPage(0), []);

  const [{ error }, submitAdd] = useAsyncFn(
    async values => {
      await UsersAPI.create(values);

      const params = { page, pageSize: rowsPerPage, search: searchString };
      await getUpdatedUsers(params);

      closeModal();
    },
    [closeModal, getUpdatedUsers, page, rowsPerPage, searchString],
  );

  const submitEdit = useCallback(
    async values => {
      await UsersAPI.edit(values);

      const params = { page, pageSize: rowsPerPage, search: searchString };
      await getUpdatedUsers(params);

      closeModal();
    },
    [closeModal, getUpdatedUsers, page, rowsPerPage, searchString],
  );

  const submitDelete = useCallback(
    id => async () => {
      await UsersAPI.remove(id);

      const maxPageAfterDelete = Math.ceil(totalRowsCount / rowsPerPage) - 1;

      if (page > maxPageAfterDelete) {
        setPage(maxPageAfterDelete);
      }

      const currentPage = page > maxPageAfterDelete ? maxPageAfterDelete : page;
      const params = { page: currentPage, pageSize: rowsPerPage, search: searchString };

      await getUpdatedUsers(params);
    },
    [getUpdatedUsers, page, rowsPerPage, searchString, totalRowsCount],
  );

  const openAddModal = useCallback(() => {
    setContent(
      <Add
        closeModal={closeModal}
        onSubmit={submitAdd}
        serverError={error?.response?.data?.errors?.message[0].constraints?.matches}
      />,
    );
  }, [closeModal, setContent, error, submitAdd]);

  const openEditModal = useCallback(
    (e, rowData) => {
      setContent(<Edit closeModal={closeModal} onSubmit={submitEdit} defaultValues={rowData} />);
    },
    [closeModal, setContent, submitEdit],
  );

  const openDeleteUserModal = useCallback(
    (e, rowData) =>
      setConfirmContent({
        message: 'Are you sure you want to delete this user?',
        onSubmit: submitDelete(rowData.id),
        title: 'Delete user?',
      }),
    [setConfirmContent, submitDelete],
  );

  const columns = useMemo(
    () => [
      { title: 'Name', field: 'username', type: 'string', sorting: true, sortingAction },
      { title: 'Email', field: 'email', type: 'string', collapsible: true },
      {
        title: 'Registration Date',
        field: 'createdAt',
        type: 'date',
        sorting: true,
        sortingAction,
        collapsible: true,
      },
    ],
    [sortingAction],
  );

  const rowsPerPageOptions = [10, 20, 30];

  const rowActions = useMemo(
    () => [
      { type: 'edit', action: openEditModal },
      { type: 'delete', action: openDeleteUserModal },
    ],
    [openDeleteUserModal, openEditModal],
  );

  return (
    <S.Wrap maxWidth="xl">
      <S.Header>
        <Typography variant="h4" color="primary">
          Users
        </Typography>
        <S.FilterBox>
          <S.FilterBtn variant="text" startIcon={<FilterIcon />}>
            Filter
          </S.FilterBtn>
          <Search action={searchAction} value={searchString} onChangeValue={setSearchString} />
        </S.FilterBox>
        <Button color="primary" variant="contained" onClick={openAddModal}>
          Add user
        </Button>
      </S.Header>
      <DataTable
        columns={columns}
        data={users}
        paginationOptions={{
          count: totalRowsCount,
          page,
          rowsPerPage,
          rowsPerPageOptions,
          onChangePage: onChangePageHandler,
          onChangeRowsPerPage: onChangeRowsPerPageHandler,
          component: 'div',
        }}
        actions={rowActions}
      />
      <Modal />
      {confirmationModal}
    </S.Wrap>
  );
};

export default Users;
