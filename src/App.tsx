import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme/theme';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Briofitas from './pages/Briofitas';
import Pteridofitas from './pages/Pteridofitas';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/briofitas" element={<Briofitas />} />
            <Route path="/pteridofitas" element={<Pteridofitas />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;