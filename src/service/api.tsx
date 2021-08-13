import React, { useState, useEffect, useContext} from "react";
import {db} from "./firebase"
import firebase from 'firebase/app';
import "firebase/firestore";

// Add a new document with a generated id.
export const addTodo = (content:string, uid:any) =>{
    db.collection("todo").add({
      content:content,
      createdAt:firebase.firestore.FieldValue.serverTimestamp(),
      isComplete:true,
      userId:uid,
    })
   ;
}