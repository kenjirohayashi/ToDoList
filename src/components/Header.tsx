import React, { useContext } from "react";
import  dig  from "object-dig"
import { signInWithGoogle, logOut } from '../firebase/firebase';
import { AuthContext } from "../firebase/AuthProvider";

const Header = () =>{
const currentUser = useContext(AuthContext);



 const buttonRender = () =>{
  //ログインしている
    if(dig(currentUser, 'currentUser', 'uid')){//currentUser.currentUser.Im
      return <button onClick={logOut}>ログアウト</button>
    }else{ //ログアウトしている
      return <button onClick={signInWithGoogle}>ログイン</button>
    }
  }

  return(
    <header className="App-header">
      <p>
        ToDoアプリ
      </p>
      { buttonRender()}
    </header>
  )
};


export default Header;


