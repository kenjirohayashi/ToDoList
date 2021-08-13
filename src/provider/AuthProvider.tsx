import React, {FC, createContext, useEffect, useState } from "react";
import { auth } from "../service/firebase";
import  User   from 'firebase';

type AuthContextProps = {
  currentUser: User.User | null | undefined
}

export const AuthContext = createContext<AuthContextProps>({ currentUser: undefined })

const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User.User | null | undefined>(
    undefined
  )

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;