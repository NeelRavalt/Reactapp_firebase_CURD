//import React, { useEffect, useImperativeHandle, useReducer,useState } from 'react'
import{collection, getDocs, runTransaction} from "firebase/firestore";
 import  { useEffect,useState } from "react";
import{db}from "./firebase"

function App  ()  {

    const [users,setusers] = useState();
    
    const userscollectionRef = collection (db, "users");
    useEffect(()=>{
      const getUsers = async () => {
        const data = await getDocs(userscollectionRef);
        //  console.log(data);

        getUsers(data.docs.map((doc)=> ({...doc.data(), id: doc.id})))
      };
    }, []);
  return (
    <div>
      {users.map((user)=> {
        return(
           <div>
            {" "}
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
           </div>
        );
      })}
    </div>
  )
}

export default App

