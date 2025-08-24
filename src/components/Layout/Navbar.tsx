import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: 'transparent',
        boxShadow: 'none',
        backgroundImage: 'url(/banner.PNG)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '120px', // Reducida de 200px a 120px
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <Toolbar sx={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: '64px',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end' // Alinea los elementos a la derecha
      }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            component={RouterLink} 
            to="/" 
            color="inherit"
            sx={{ 
              '&:hover': { 
                backgroundColor: 'rgba(255, 255, 255, 0.1)' 
              }
            }}
          >
            Inicio
          </Button>
          <Button 
            component={RouterLink} 
            to="/briofitas" 
            color="inherit"
            sx={{ 
              '&:hover': { 
                backgroundColor: 'rgba(255, 255, 255, 0.1)' 
              }
            }}
          >
            Briofitas
          </Button>
          <Button 
            component={RouterLink} 
            to="/pteridofitas" 
            color="inherit"
            sx={{ 
              '&:hover': { 
                backgroundColor: 'rgba(255, 255, 255, 0.1)' 
              }
            }}
          >
            Pteridofitas
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;