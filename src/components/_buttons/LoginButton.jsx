import React from 'react'
import { signInWithGoogle} from 'services/firebase'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { loginRequest, loginFail, loginSuccess,
  fetchSubscriptionsRequest, fetchSubscriptionsSuccess, fetchSubscriptionsFail
} from 'store/user/actions'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import YTAPIManager from 'services/youtube'
const LoginButton = () => {
  const dispatch = useDispatch()
  
  const handleClick = async () => {
    dispatch(loginRequest())
    const authResponse = await signInWithGoogle()
    authResponse.error ?
      dispatch(loginFail(authResponse.error)) :
      dispatch(loginSuccess(authResponse))

    dispatch(fetchSubscriptionsRequest())
    const subscriptionsResponse = await YTAPIManager.getSubscriptions()
    subscriptionsResponse.error ?
      dispatch(fetchSubscriptionsFail(subscriptionsResponse.error)) :
      dispatch(fetchSubscriptionsSuccess(subscriptionsResponse))
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
