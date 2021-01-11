import { createMuiTheme } from '@material-ui/core/styles';

export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#05386B',
    },
    secondary: {
      main: '#F6F6F6',
    },
  },
  MuiTypography: {
    variantMapping: {
      body1: 'p',
    },
  },
});
//Headers
lightTheme.typography.h1 = {
  fontSize: 'calc(1rem + 5vmin)',
  color: '#05386B'
};
lightTheme.typography.h2 = {
  fontSize: 'calc(1rem + 4vmin)',
  color: '#05386B'
};
lightTheme.typography.h3 = {
  fontSize: 'calc(1rem + 3vmin)',
  color: '#05386B'
};
lightTheme.typography.h4 = {
  fontSize: 'calc(1rem + 2vmin)',
  color: '#05386B'
};
lightTheme.typography.h5 = {
  fontSize: 'calc(1rem + 1vmin)',
  color: '#05386B'
};
lightTheme.typography.h6 = {
  fontSize: 'calc(1rem + .5vmin)',
  color: '#05386B'
};

//more typography 
lightTheme.typography.subtitle1 = {
  fontSize: 'calc(1rem + 1vmin)',
  margin: '1rem .5rem',
  fontWeight: 'normal',
  color: '#313639'
}
lightTheme.typography.body1 = {
  fontSize: 'calc(.8rem + 1vmin)',
  color: '#313639'
}