import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import BrowserApp from './BrowserApp/BrowserApp';


const myTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#3e2723',
    },
    secondary: {
      main: '#009688',
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={myTheme} >
        <CssBaseline />
        <BrowserApp />
      </ThemeProvider>  
    </div>
    
  );
}

export default App;

