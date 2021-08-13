import React, { useState, useEffect, useContext} from "react";
import { AuthContext } from "../provider/AuthProvider";
import { signInWithGoogle} from '../service/firebase';
import  dig  from "object-dig"
import * as API from "../service/api"

const ToDoBoard = () => {

  const currentUser = useContext(AuthContext)
  const [inputName,setName] = useState("")
  const [todos, setTodos] = useState<any>([])

  useEffect(()=>{
      fetch();
  }, [currentUser])
  
  const fetch = async () =>{
    if(currentUser.currentUser){ 
       const data = await API.initGet(currentUser.currentUser.uid)
       setTodos(data);
    }
  }
  const formRender = () =>{
    if(dig(currentUser, 'currentUser', 'uid')){   //ログインしていたらform作成ボタン
      return <form >
        <textarea placeholder="todo" value={inputName} onChange={(event) => setName(event.target.value) } >
        </textarea>
        <button type="button" onClick={() => post()}>追加</button>
      </form>
    }else{                                        //ログアウトしていたらログインボタン
      return null;
    }
  }

  const post = () => {
    if(currentUser.currentUser){ 
      API.addTodo(inputName,currentUser.currentUser.uid) //firebaseに追加
      setName(""); //Formを空に
    }
  }

  return(
    <div>
      {formRender()}
      {/* <ul>
      {todos.map((content:string,i:Number) => {
        console.log(content)
        return <li>{content}</li>
      })}
      </ul> */}
    </div>
  )
}

export default ToDoBoard;

