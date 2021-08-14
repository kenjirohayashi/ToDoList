import React from 'react';
import Header from './components/Header';
import ToDoBoard from './components/ToDoBoard';
import  AuthProvider  from './provider/AuthProvider';
import Footer from "./components/Footer"

// import './App.css';
import './service/firebase'

function App() {
  return (
    <AuthProvider>
      < Header />
      < ToDoBoard />
      < Footer />
    </AuthProvider>
  )
}

export default App;
