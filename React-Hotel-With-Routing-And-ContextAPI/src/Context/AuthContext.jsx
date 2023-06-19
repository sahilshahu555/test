import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

  const [authState, setAuthState] = useState({isAuth: false, token: null});

  const loginUser = ({email, password}) => {
   return new Promise(async (resolve, reject) => {
     const response = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/users`);
     const data = await response.json();
     data.forEach((user) => {
      console.log(user);
      console.log(email, password)
       if (user.email === email && user.password === password){
        setAuthState({isAuth: true, token: user.token});
        resolve(user.token);
       }
     });
     reject("Not found!");
   });
  };

  const logoutUser = () => {
   setAuthState({isAuth:false, token: null});
  };

  let providerState = {authState, loginUser, logoutUser};

  if (window.Cypress) {
    window.store = providerState;
  }

  return <AuthContext.Provider value={providerState}>{children}</AuthContext.Provider>;
};
