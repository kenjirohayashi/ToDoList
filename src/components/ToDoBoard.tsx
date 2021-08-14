import React, { useState, useEffect, useContext} from "react";
import { AuthContext } from "../provider/AuthProvider";
import { signInWithGoogle} from '../service/firebase';
import  dig  from "object-dig"
import * as API from "../service/api"
import ToDoList from "./TodoList";

const ToDoBoard = () => {

  const currentUser = useContext(AuthContext)
  const [inputName,setName] = useState("")
  const [todos, setTodos] = useState<any>([])

  
  useEffect(()=>{
    fetch();
  }, [currentUser])
  
  const fetch = async () =>{
    if(dig(currentUser, 'currentUser','uid') && (currentUser.currentUser)){ 
      const data = await API.initGet(currentUser.currentUser.uid)
      await setTodos(data);
    }
  }

  const formRender = () =>{
    if(dig(currentUser, 'currentUser', 'uid')){   //ログインしていたらform作成ボタン
      return (
        <form >
          <input placeholder="todo" value={inputName} onChange={(event) => setName(event.currentTarget.value) } ></input>
          <button type="button" onClick={() => post()}>追加</button>
        </form>
      )
    }else{                                        //ログアウトしていたらログインボタン
      return null;
    }
  }

  const post = async() => {
    if(currentUser.currentUser){ 
      await API.addTodo(inputName,currentUser.currentUser.uid) //firebaseに追加
      await setName(""); //Formを空に
      fetch();
    }
  }

  // console.log(todoList)

  return(
    <div>
      {formRender()}
      <h2>your todo</h2>
      <ToDoList todos={todos} fetch={fetch}/>
    </div>
  )
}

export default ToDoBoard;

