import React,{useEffect,useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect,isAuthenticated } = useAuth0();
  useEffect(()=>{
    if(!isAuthenticated ){
        loginWithRedirect()

    }
  },[])
  return (
    
      <div
      >
       
      </div>
  );
};

export default Login;
