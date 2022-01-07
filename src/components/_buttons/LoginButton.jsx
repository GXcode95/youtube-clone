import React from 'react'
import { signInWithGoogle} from 'services/firebase'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { loginRequest, loginFail, loginSuccess } from 'store/user/actions'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const LoginButton = () => {
  const dispatch = useDispatch()
  
  const handleClick = async () => {
    dispatch(loginRequest())
    const response = await signInWithGoogle()
    response.error ?
      dispatch(loginFail(response.error)) :
      dispatch(loginSuccess(response))
  }

  return (
    <Button 
      variant="outlined"
      color="primary"
      onClick={handleClick}
      sx={{ py: 1, fontSize: "1.4rem", borderRadius: "2px", width: "170px", m:1}}
    >
      <AccountCircleOutlinedIcon sx={{fontSize: 24, mb: "0.2rem", mr: 1}}/>
      <span>se connecter</span>
    </Button>
  )
}
export default LoginButton
