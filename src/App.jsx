import React from 'react'
import Home from 'pages/Home';
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import { BrowserRouter as Router,
Routes, Route } from 'react-router-dom';
import{ ThemeProvider, CssBaseline, Box} from '@mui/material'
import { light } from 'style/palette'

const App = () => {
  return (
    <div className='App'>
      <ThemeProvider theme={light}>
        <CssBaseline />
        {/* <Router> */}
          <Header />

          <Box display="flex" mt="3.5em">
          {/* here mt is used to handle the size of the (fixed) header, otherwise the top of the box would be behind the header */}
            <Sidebar />
            
            <Box flex="1">
              <Home />
            </Box>

          </Box>

          {/* <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router> */}
      </ThemeProvider>
    </div>
  );
}
export default App;
    
