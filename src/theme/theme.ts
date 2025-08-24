import { createTheme } from '@mui/material';

const baseTheme = {
  palette: {
    primary: {
      main: '#2e7d32', // Verde bosque
      light: '#60ad5e',
      dark: '#005005',
    },
    secondary: {
      main: '#81c784', // Verde claro
      light: '#b2fab4',
      dark: '#519657',
    },
    background: {
      default: '#88e788', // Un blanco verdoso muy sutil
      paper: '#ffffff',
    },
    text: {
      primary: '#2c3e50',
      secondary: '#34495e',
    },
  },
  typography: {
    fontFamily: '"Noto Serif", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#2c3e50',
      '@media (min-width:600px)': {
        fontSize: '3.5rem',
      },
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#2c3e50',
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      color: '#34495e',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#34495e',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#34495e',
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.7,
      color: '#2c3e50',
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#34495e',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: 'url(/fondobriofitas.jpg)',
          backgroundSize: 'cover',
           backdropFilter: 'blur(6px)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          minHeight: '100vh'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '24px',
          '&:last-child': {
            paddingBottom: '24px',
          },
        },
      },
    },
  },
};

export const theme = createTheme(baseTheme);

export const commonStyles = {
  sectionTitle: {
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-8px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '3px',
      backgroundColor: theme.palette.primary.main,
      borderRadius: '2px',
    },
  },
  pageHeader: {
    backgroundImage: 'linear-gradient(to right, rgba(46, 125, 50, 0.1), rgba(129, 199, 132, 0.1))',
    padding: '40px 20px',
    borderRadius: '12px',
    marginBottom: '40px',
  },
  contentSection: {
    marginBottom: '40px',
  },
  infoCard: {
    backgroundColor: 'rgba(46, 125, 50, 0.05)',
    border: '1px solid rgba(46, 125, 50, 0.1)',
  },
  exampleCard: {
    backgroundColor: '#ffffff',
    border: '1px solid rgba(46, 125, 50, 0.1)',
  },
  habitatCard: {
    backgroundColor: 'rgba(129, 199, 132, 0.05)',
    border: '1px solid rgba(129, 199, 132, 0.1)',
  },
  pageContainer: {
    minHeight: '100vh',
    padding: '24px',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.69)',
      zIndex: 0
    },
    '& > *': {
      position: 'relative',
      zIndex: 1
    }
  },
  pageBackground: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.69)',
      zIndex: 0
    }
  }
};