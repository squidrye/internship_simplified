import React from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import ListOfJobs from './components/ListOfJobs';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  if(!isAuthenticated){
  return (
    <>
      <LoginButton />
      <Profile />
    </>
  );
  }else{
    return(<>
    <ListOfJobs/>
    <LogoutButton />
    </>);
  }
}

export default App;
