import { ThemeProvider } from '@emotion/react';
import './App.css';
import Header from './Components/Header/Header';
import { createTheme, CssBaseline } from '@mui/material';
import NavBar from './Components/NavBar/NavBar';
import PageContent from './Components/PageContent/PageContent';

const myTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#26c6da',
    },
  },
});


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={myTheme} >
        <CssBaseline />
        <Header 
          title="My Cafe"
          subtitle="Your Coffee, our Specialty"
        />
        <NavBar />
        <PageContent />
      </ThemeProvider>  
    </div>
    
  );
}

export default App;

