import React from "react";
import * as API from "../service/api"
import { ListItem, ListItemIcon, Checkbox, ListItemText, ListItemSecondaryAction, IconButton, makeStyles } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 360,
    margin: 'auto',
  },
  ul: {
    paddingLeft: 0,
    listStyle: 'none',
  },
  list: {
    justifyContent: 'space-between',
  },
}));

const ToDoList = (props:any) => {

  const deleteHandler = async(id:string) => {
    await API.deleteTodo(id);
    await props.fetch();
  } 

  const completeHandler = async(id:string, isComplete:boolean) => {
    await API.checkedTodo(id, isComplete);
    await props.fetch();
  }

  const classes = useStyles();

  const todoList = props.todos.map((todo:any, i:number) => {
    return(
      <>
        {/* <li key={i}>
          {todo.content}
          <button onClick={() => deleteHandler(todo.id)}>削除</button>
        </li> */}
        <ListItem key={todo.id}>
          <ListItemIcon>
            <Checkbox checked={todo.isComplete} onChange={() => completeHandler(todo.id, todo.isComplete)}/>
          </ListItemIcon>
          <ListItemText primary={todo.content} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={() => deleteHandler(todo.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
      </ListItem>
      </>
    ) 
  })

  return(
    <div className={classes.root}>
      <ul className={classes.ul}>{todoList}</ul>
    </div>
  )
}

export default ToDoList;  