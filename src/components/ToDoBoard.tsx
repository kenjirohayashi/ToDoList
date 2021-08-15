import React, { useState, useEffect, useContext} from "react";
import { AuthContext } from "../provider/AuthProvider";
import { signInWithGoogle} from '../service/firebase';
import  dig  from "object-dig"
import * as API from "../service/api"
import ToDoList from "./TodoList";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      width: "100%",
    },
  }),
);

const ToDoBoard = () => {

  const currentUser = useContext(AuthContext)
  const [inputName,setName] = useState("")
  const [todos, setTodos] = useState<any>([])
  const classes = useStyles();

  
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
        <form noValidate autoComplete="off">
          <TextField label="todo name" value={inputName} onChange={(event) => setName(event.currentTarget.value) } />
          <Button disabled={inputName.length > 0 ? false : true}
          variant="contained" type="button" onClick={() => post()}>追加</Button>
        </form>
      )
    }else{                                        //ログアウトしていたらログインボタン
      return <button onClick={signInWithGoogle}>ログイン</button>
    }
  }


  const post = async() => {
    if(currentUser.currentUser){ 
        await API.addTodo(inputName,currentUser.currentUser.uid) //firebaseに追加
        await setName(""); //Formを空に
        fetch();
    }
  }

  const showTodoList = () => {
    if(dig(currentUser, 'currentUser','uid')){
     return(
      <ToDoList todos={todos} fetch={fetch}/>
     )
    }
  }

  return(
    <div className={classes.root}>
      {formRender()}
      {showTodoList()}
    </div>
  )
}

export default ToDoBoard;

