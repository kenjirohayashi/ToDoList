import React, { useState, useEffect, useContext} from "react";
import { AuthContext } from "../provider/AuthProvider";
import { signInWithGoogle} from '../service/firebase';
import  dig  from "object-dig"
import * as API from "../service/api"

const ToDoBoard = () => {

  const currentUser = useContext(AuthContext)
  const [inputName,setName] = useState("")
  const [todos, setTodos] = useState("")


  const formRender = () =>{
    if(dig(currentUser, 'currentUser', 'uid')){   //ログインしていたらform作成ボタン
      return <form >
        <textarea placeholder="todo" onChange={(event) => setName(event.target.value) }>

        </textarea>
        <button onClick={() => post()}>追加</button>
      </form>
    }else{                                        //ログアウトしていたらログインボタン
      return null;
    }
  }

  const post = () => {
    API.addTodo(inputName,currentUser.currentUser)
  }

  return(
    <div>
      {formRender()}
    </div>
  )
}

export default ToDoBoard;

