import React,{useState} from 'react';
import AddUsers from './components/Users/AddUsers'
import UsersList from './components/Users/UsersList'


function App() {
  const [usersList,setUsersList]=useState([])
  const addUserHandler=(name,age) => {
    setUsersList((prevUsersList)=>{
      return [...prevUsersList,{name,age,id:Math.random().toString()}]
    })
  }
  return (
    <div>
      <AddUsers onAddUser={addUserHandler}></AddUsers>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
