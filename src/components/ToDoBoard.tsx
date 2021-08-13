import React, { useState, useEffect, useContext} from "react";
import { AuthContext } from "../provider/AuthProvider";
import { signInWithGoogle} from '../service/firebase';
import  dig  from "object-dig"

const ToDoBoard = () => {

  const currentUser = useContext(AuthContext)
  const [inputName,setName] = useState("")
  const [todos, setTodos] = useState("")


  const formRender = () =>{
    if(dig(currentUser, 'currentUser', 'uid')){   //ログインしていたらform作成ボタン
      return <button >作成</button>
    }else{                                        //ログアウトしていたらログインボタン
      return <button onClick={signInWithGoogle}>ログイン</button>
    }
  }

  return(
    <div>
    </div>
  )
}

export default ToDoBoard;

