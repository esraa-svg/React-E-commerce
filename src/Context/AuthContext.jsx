import React, { createContext, useEffect, useState } from 'react';

// Create the AuthContext
export const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  useEffect (()=>{
    if (localStorage.getItem("token")!= null){
        setUserToken(localStorage.getItem("token"))
    
      }
  })


  return (
    <AuthContext.Provider value={{ userToken, setUserToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
