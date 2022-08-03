import React, {useState} from 'react';
import './App.css';
import Userdata from './components/Userdata.js';
import UsersShow from './components/UsersShow';

const DUMMY_DATA= [
  {
    id :100,
    username: 'pranjal',
    age:20
  }
]
function App() {

  const [users,updateUsers] = useState(DUMMY_DATA);
  
  const addUser = (user) =>{
    updateUsers((prevUsers)=>{
      return [user,...prevUsers];
    })
  }

  return (
    <div>
      <Userdata userHandler={addUser} />
      <UsersShow allUsers= {users}/>
    </div>
  );
}

export default App;
