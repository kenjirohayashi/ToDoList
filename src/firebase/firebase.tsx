import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL:process.env.REACT_APP_FIREBASE_DATABASE,
  projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  senderId:process.env.REACT_APP_FIREBASE_SENDER_ID,
  appID:process.env.REACT_APP_FIREBASE_APP_ID,
  measurementID:process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

var provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider)
  .then((result) => {
    console.log(result.user);
  }).catch((error) => {
    console.log(error.message);
  });
}

export const logOut = () => {
  firebase.auth().signOut() //ログアウト
  .then(() =>{               //ログアウトしたら
    console.log("logged out");
    document.location.reload(); 
  })
  .catch((error) => {     //エラーしたら
    console.log(error.message);
  });
}