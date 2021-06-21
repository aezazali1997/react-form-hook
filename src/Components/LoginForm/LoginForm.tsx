import React, { useState } from 'react'
import { styles } from './LoginForm.style';
import { useForm } from 'react-hook-form'
import classNames from 'classnames';
type Props = {
  firstName: string,
  password: string,
}
const LoginForm = () => {

  const [isPassVisible, setIsPassVisible] = useState<boolean>(false);
  const classes = styles();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const passVisibility = () => {
    setIsPassVisible(!isPassVisible)
  }

  const onSubmit = (data: Props) => alert(data.firstName + "  " + data.password);
  return (
    <form className={classes.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.userField}>
        <span className={classNames("fa fa-user", classes.icon)}></span>
        <input
          className={classes.userName}
          type="text"
          placeholder="User Name or Email"
          {...register("firstName", { required: true, maxLength: 25, pattern: /^[A-Za-z]+$/i })}
        />
      </div>
      {errors?.firstName?.type === "required" && <p>This field is required</p>}
      {errors?.firstName?.type === "maxLength" && (
        <p>Cannot exceed 20 characters</p>
      )}
      {errors?.firstName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      <div className={classes.userField}>
        <span className={classNames("fa fa-unlock-alt", classes.icon)}></span>
        <input className={classes.userName} type={isPassVisible ? "text" : "password"} placeholder="Password"
          {...register("password", { required: true, min: 8, max: 50, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/i })} />
        <button type="button" className={classes.iconEye} onMouseDown={passVisibility} onMouseUp={passVisibility}>
          <span title="Show Password" className={classNames("fa fa-eye")}></span>
        </button>
      </div>
      {errors?.password?.type === "required" && <p>This field is required</p>}
      {errors?.password?.type === "maxLength" && (
        <p>Cannot exceed 20 characters</p>
      )}
      {errors?.password?.type === "pattern" && (
        <p>Must contain at least one  number and one uppercase and
          lowercase letter, and at least 8 or more characters</p>
      )}
      <div className={classes.submitContainer}>
        <div> <input type="checkbox" id="" />
          Remember me
        </div>
        <input type="submit" className={classes.submitBtn} value="Submit" />
      </div>

      <div className={classes.registerCont}>
        <a href="#" >Registrer Now </a>  <a className={classes.forgot} href="#">Forgot password </a>
      </div>
      <h5 className={classes.line}>or</h5>
    </form>
  )
}

export default LoginForm
