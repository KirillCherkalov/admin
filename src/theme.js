import { createMuiTheme } from '@material-ui/core/styles';

export const main = createMuiTheme({
  props: {
    sideMenuWidth: 200,
  },
  overrides: {
    MuiDrawer: {
      paper: {
        width: 200,
      },
    },
    MuiDialogContent: {
      root: {
        flex: '0 0 auto',
      },
    },
  },
});

export const secondary = createMuiTheme();
