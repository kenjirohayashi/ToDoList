import React, { useState, useEffect, useContext} from "react";
import {db} from "./firebase"
import firebase from 'firebase/app';
import "firebase/firestore";

export const initGet = async(uid:string) => {
  const todo = await db.collection("todo")
  .orderBy("createdAt","desc") //createdAt(作成された日時)の降順
  .where("uid", "==", uid); //uidが一致するものを指定

  return todo.get().then((snapshot) => {
    const todos: any[] = [];
    snapshot.forEach((doc)=>{ 
      todos.push({
        id: doc.id,
        content: doc.data().content,
        isComplete: doc.data().isComplete,
      });
    });
    return todos;
  });
}

// Add a new document with a generated id.
export const addTodo = (content:string, uid:string) =>{
    db.collection("todo").add({
      content:content,
      createdAt:firebase.firestore.FieldValue.serverTimestamp(),
      isComplete:true,
      userId:uid,
    })
   ;
}