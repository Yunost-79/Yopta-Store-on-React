import { createTheme } from '@mui/material/styles';

const colorTheme = createTheme({
  palette: {
    colors: {
      yellow: '#faa60f',
      black: '#000',
      gray: '',
    },
  },
});

const theme = createTheme(colorTheme, {
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: colorTheme.palette.colors.yellow,
            },
          },
          '& .MuiFormLabel-root.Mui-focused': {
            color: colorTheme.palette.colors.yellow,
          },
          '& .MuiSelect-select': {
            padding: '8px 12px',
          },
          '& .MuiInputLabel-root': {
            fontSize: '0.9rem',
          },
          '& .MuiInputBase-root:after':{
            borderColor: colorTheme.palette.colors.yellow,
          }
        },
      },
    },
  },
});

export default theme;
