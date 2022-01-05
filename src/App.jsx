import React from 'react'
import Home from 'pages/Home';
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import { BrowserRouter as Router,
Routes, Route } from 'react-router-dom';
import{ ThemeProvider, CssBaseline} from '@mui/material'
import { light } from 'style/palette'

const App = () => {
  return (
    <div className='App'>
      <ThemeProvider theme={light}>
        <CssBaseline />
        {/* <Router> */}
          <Header />
          <div className="app_container">
            <Sidebar />
          </div>
          <div className="app__main">
            <Home />
          </div>
          {/* <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router> */}
      </ThemeProvider>
    </div>
  );
}
export default App;
    
