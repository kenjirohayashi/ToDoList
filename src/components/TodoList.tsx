import React, { useState, useEffect, useContext} from "react";
import { AuthContext } from "../provider/AuthProvider";
import { signInWithGoogle} from '../service/firebase';
import  dig  from "object-dig"
import * as API from "../service/api"

const ToDoList = (props:any) => {

  const deleteHandler = async(id:string) => {
    await API.deleteTodo(id);
    await props.fetch();
  } 

  const todoList = props.todos.map((todo:any, i:number) => {
    return(
      <>
        <li key={i}>
          {todo.content}
          <button onClick={() => deleteHandler(todo.id)}>削除</button>
        </li>
      </>
    ) 
  })

  return(
    <ul>
        {todoList}
    </ul>
  )
}

export default ToDoList;  