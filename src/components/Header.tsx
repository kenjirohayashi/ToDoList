import React, { useContext } from "react";
import  dig  from "object-dig"
import { signInWithGoogle, logOut } from '../service/firebase';
import { AuthContext } from "../provider/AuthProvider";

const Header = () =>{
const currentUser = useContext(AuthContext);



 const buttonRender = () =>{
    if(dig(currentUser, 'currentUser', 'uid')){   //ログインしている
      return <button onClick={logOut}>ログアウト</button>
    }else{                                        //ログアウトしている
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


