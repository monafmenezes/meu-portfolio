import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#B5838D'
    },
    secondary: {
      main: '#6D6875'
    },
    text: {
      primary: '#FFCDB2',
      secondary: '#6D6875'
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif'
  },
  shape: {
    borderRadius: '4px'
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '5px',
          fontWeight: 'normal'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0px 0px 39px rgba(0, 0, 0, 0.05)'
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        InputLabelProps: {
          required: false
        },
        required: true
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-root': {
            fontWeight: 'bold'
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          border: '1px solid #D8D8D8'
        }
      }
    }
  }
})

export default theme