import React, { useState, useEffect } from 'react';
import axios from 'axios'
import PostGrid from "./components/PostGrid"
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(true);
  const [userName, setUserName] = useState();
  const [userID, setUserID] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      const userResult = await axios(`https://jsonplaceholder.typicode.com/users`)
      console.log(userResult.data)
      setUsers(userResult.data)
    }
    fetchUsers()
  }, [])

  const handleSubmit = e => {
    setError(false);
    const res = users.filter(user => user.username.localeCompare(userName) == 0);
    console.log("result",res);
    if(res.length == 0){
      setError(true);
    }
    else{
      console.log(res)
      setUserID(res[0].id);
      setVisible(false);
    
  };
  }
  const handleChange = e => {
    setUserName(e.target.value)
  };

  return (
    <div className="container">
      <div className="login-form">
          <label>
            Username:
          <input type="text" onChange={handleChange} />
          </label>
          <input type="button" onClick={handleSubmit} value="Login" />
      </div>
      {error ? <h1 style={{color: "red"}}>Cannot find the user</h1>:<></>}
      <div className="character-grid">
        <PostGrid visible={visible} userID={userID} />
      </div>
    </div>
  );
  
  }

export default App;
