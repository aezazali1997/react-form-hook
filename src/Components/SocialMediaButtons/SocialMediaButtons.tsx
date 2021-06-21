import classNames from 'classnames';
import React from 'react'
import { styles } from './SocialMediaButtons.style';
const SocialMediaButtons = () => {
  const classes = styles();
  return (
    <div className={classes.iconContainer}>
      <div className={classes.btnContainer}>
        <div className={classNames(classes.icon, classes.facebook)}><span className="fa fa-facebook"></span></div>
        <button className={classNames(classes.btn, classes.facebookBtn)}>Login with facebook</button>
      </div>
      <div className={classes.btnContainer}>
        <div className={classNames(classes.icon, classes.twitter)}><span className="fa fa-twitter"></span></div>
        <button className={classNames(classes.btn, classes.twitterBtn)}>Login with twitter</button>
      </div>
      <div className={classes.btnContainer}>
        <div className={classNames(classes.icon, classes.gmail)}><span className="fa fa-google-plus"></span></div>
        <button className={classNames(classes.btn, classes.gmailBtn)}>Login with Google</button>
      </div>
    </div>
  )
}

export default SocialMediaButtons
