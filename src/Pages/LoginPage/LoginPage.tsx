import React from 'react'
import img from '../../Assets/imgs/fornImage.jpg';
import { styles } from './LoginPage.style';
import CrossIcon from 'src/Components/CrossIcon/CrossIcon';
import LoginForm from 'src/Components/LoginForm/LoginForm';
import SocialMediaButtons from 'src/Components/SocialMediaButtons/SocialMediaButtons';
function Login() {
  const classes = styles();
  return (
    <div className={classes.loginForm}>
      <div className={classes.contContainer}>
        <CrossIcon />
        <div className={classes.inputContainer}>
          <LoginForm />
          <SocialMediaButtons />
        </div>
      </div>
      <div className={classes.imgContainer}> <img src={img} alt="Login form" className={classes.img} /></div>
    </div>
  )
}

export default Login
