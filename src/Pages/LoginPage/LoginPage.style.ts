import {createUseStyles} from 'react-jss';
export const styles= createUseStyles({
  loginForm:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    width:"100%",
    borderRadius:'10px',
    padding:'10rem 0',
  },
  img:{
    display:'block',
    width:'100%',
    height:'100%',
  },
  imgContainer:{
    boxShadow: "4px 2px 24px -3px rgba(0,0,0,0.75)",
    width:'30%',
  },
  contContainer:{
    boxShadow:"7px 2px 24px -3px rgba(0,0,0,0.75)",
    width:'30%',
    background:"#fff",
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    flexDirection:'column'
  },
  inputContainer:{
    marginTop:"2rem",
    width:"100%",
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  }
})