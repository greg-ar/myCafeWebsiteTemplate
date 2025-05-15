import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import BrowserApp from './BrowserApp/BrowserApp';
import MediaQuery from 'react-responsive';
import MobileApp from './MobileApp/MobileApp';


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

const MOBILE_WIDTH = 1224

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={myTheme} >
        <CssBaseline />
        <MediaQuery minWidth={MOBILE_WIDTH}>
          <BrowserApp />
        </MediaQuery>
        <MediaQuery maxWidth={MOBILE_WIDTH}>
          <MobileApp />
        </MediaQuery>
      </ThemeProvider>  
    </div>
    
  );
}

export default App;

