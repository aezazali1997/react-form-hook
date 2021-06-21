import { createUseStyles } from "react-jss";

export const styles=createUseStyles({
  iconContainer:{
    display:'flex',
    flexDirection:"column",
    width:"100%",
    alignItems:'center',
  },
  btnContainer:{
    display:'flex',
    flexDirection:"row",
    width:300,
    cursor:'pointer',
    margin:'1rem 0',
    "& div":{
      padding:'1rem 0',
    }
  },
  icon:{
    width:'20%',
    textAlign:"center",
    "& span":{
      color:"#fff"
    }
  },
  btn:{
    width:'80%',
    textAlign:'center',
    textTransform:"uppercase",
    color:'#fff',
    fontFamily:600,
    border:'none',
    outline:'none',
    cursor:'pointer',
  },
  facebook:{
    background:"#263c68",
  },
  facebookBtn:{
    background:"#3b5998"
  },
  twitter:{
    background:"#01aced",
  },
  twitterBtn:{
    background:"#0695cb"
  },
  gmail:{
    background:"#f44336"
  },
  gmailBtn:{
    background:"#c53126"
  }
});