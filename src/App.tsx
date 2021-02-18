import React, { useState } from 'react';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

import './App.css';

function App() {
  const [username, setUserName] = useState('username');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUserName = event.target.value;
    setUserName(newUserName);
  };

  return (
    <div className="App">
      <UserInput username={username} change={handleChange} />
      <UserOutput username={username} />
    </div>
  );
}

export default App;
