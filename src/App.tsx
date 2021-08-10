import React from 'react';
import Header from './components/Header';
import  AuthProvider  from './firebase/AuthProvider';
// import './App.css';
import './firebase/firebase'

function App() {
  return (
    <AuthProvider>
      < Header />
    </AuthProvider>
  )
}

export default App;
