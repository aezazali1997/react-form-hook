import { createUseStyles } from "react-jss";

export const styles=createUseStyles({
  loginForm:{
    display:'flex',
    flexDirection:'column',
    padding:'0 1rem',
    "& p":{
      color:'red',
      width:250,
    }
  },
  userField:{
    border:"1px solid rgba(0,0,0,.2)",
    borderRadius:'20px',
    paddingLeft:'10px',
    margin:".75rem 0",
  },
  icon:{
    display:"inline-block",
    margin:'10px',
    borderRight:"1px solid rgba(0,0,0,.2)",
    paddingRight:'10px',
    fontSize:18,
  },
  iconEye:{
    paddingRight:'10px',
    marginLeft:"5px",
    border:"none",
    background:'transparent',
    fontSize:'1rem',
    cursor:'pointer',
  },
  userName:{
    margin:'10px 10px 10px 0',
    border:'none',
    display:'inline-block',
    width:250,
    fontSize:18,
    "&:active, &:focus":{
      outline:"none",
    },
  },
  submitContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    margin:".75rem 0",
    "& div":{
      fontSize:"18px",
    }
  },
  submitBtn:{
    background:'#4786ff',
    border:"1px solid rgba(0,0,0,.2)",
    padding:'.75rem 1rem',
    borderRadius:5,
    color:"#fff",
    fontSize:18,
    cursor:'pointer',
  },
  registerCont:{
    display:'flex',
    flexDirection:"row",
    justifyContent:'space-between',
    "& a":{
      textTransform:'capitalize',
      textDecoration:'none',
      fontSize:18,

    }
  },
  forgot:{
    color:'gray',
  },
  line:{
    margin:'2rem 0',
    width:'100%',
    textAlign:'center',
    position:'relative',
    "&:after,&:before":{
      content:'""',
      display:'block',
      width:"45%",
      height:1,
      background:"rgba(0,0,0,.4)",
      position:"absolute",
      top:"60%",
    },
    "&:after":{
      left:0,
    },
    "&:before":{
      right:0,
    }
  },
});