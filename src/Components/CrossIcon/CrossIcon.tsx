import React from 'react'
import { styles } from './CrossIcon.style';
import classnames from 'classnames';
const CrossIcon = () => {
  const classes = styles();
  const callAlert = (): void => {
    alert();
  }
  return (
    <>
      <button onClick={callAlert} className={classes.btn}><i className={classnames('fa fa-times', classes.crossIcon)}></i></button>
    </>
  )
}

export default CrossIcon
