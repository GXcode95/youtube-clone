import React from 'react'
import Home from 'pages/Home'
import Research from 'pages/Research'
import Video from 'pages/Video'
import Header from 'components/Header'
import { BrowserRouter as Router,
Routes, Route } from 'react-router-dom';
import{ ThemeProvider, CssBaseline, Box } from '@mui/material'
import { light } from 'style/palette'
// import { loginRequest, loginFail, loginSuccess } from 'store/user/actions';
import { useDispatch, useSelector } from "react-redux"
// import { loginWithToken } from 'services/firebase'
// import Cookies from 'js-cookie'

const App = () => {
  const store = useSelector(state => state)
  const [search, setSearch] = React.useState()

  return (
    <div className='App' style={{maxWidth: "100vw",maxHeight: "100vh", overflowX: "hidden"}}>
      <ThemeProvider theme={light}>
        <CssBaseline />
        <Router>
          <Header setSearch={setSearch} />
          
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/research" element={<Research search={search}/>} exact />
                <Route path="/video/:videoId" element={<Video />} exact />
              </Routes>


    {console.log("store", store)}
    {/* {console.log("Cookies # token", token )} */}
        </Router>
      </ThemeProvider>
    </div>
  );
}
export default App;
    
