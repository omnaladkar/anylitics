import React, { useState,useEffect } from 'react';
import "./App.css";
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import axios from "axios";
import UserList from './containers/User'
import User from './containers/UserDetails'
function App() {

  const [users, setUsers] = useState(null);


  const rootURL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await axios(
        rootURL,
      );
 
      setUsers(result.data);
    };
 
    fetchUsers();
  }, []);
  if (!users) return null

  return (
    <BrowserRouter>
      <div className="container">
    <div className="main-body">
      <Routes>
      <Route exact path="/" element={<UserList users={users}/>} />
     
     
      <Route path="/users/:id" element={<User users={users} />} />
      </Routes>
   
      </div>
      </div>
      </BrowserRouter>

  
  );
}

export default App;
