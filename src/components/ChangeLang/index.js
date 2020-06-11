import React from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './styled';

const languages = [
  {
    code: 'ru',
  },
  {
    code: 'en',
  },
];

const ChangeLang = () => {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  };

  return (
    <S.Lang>
      {languages.map(({ code }) => (
        <button key={code} type="button" onClick={() => changeLanguage(code)} disabled={i18n.language === code}>
          {code}
        </button>
      ))}
    </S.Lang>
  );
};

export default ChangeLang;
