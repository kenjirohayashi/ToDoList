import React, { useContext } from "react";
import  dig  from "object-dig"
import { signInWithGoogle, logOut } from '../service/firebase';
import { AuthContext } from "../provider/AuthProvider";
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles(() => ({
  toolbar: {
    justifyContent: 'space-between',
    backgroundColor: '#6fb5e1',
  },
  button:{
    color: '#FFF'
  }
}))

const Header = () =>{

const currentUser = useContext(AuthContext);
const classes = useStyles();

 const buttonRender = () =>{
    if(dig(currentUser, 'currentUser', 'uid')){   //ログインしている
      return <Button className={classes.button} onClick={logOut}>ログアウト</Button>
    }else{                                        //ログアウトしている
      return <Button className={classes.button} onClick={signInWithGoogle}>ログイン</Button>
    }
  }

  return(
    <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">
            React ToDo
          </Typography>
          {buttonRender()}
        </Toolbar>
      </AppBar>
  )
};


export default Header;


