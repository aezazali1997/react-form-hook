import React from 'react'
import Login from '../LoginPage/LoginPage';
import { styles } from './Page.style'

const Page = () => {
  console.log("hello");
  const classes = styles();
  return (
    <div className={classes.page}>
      <Login />
    </div>
  )
}

export default Page
