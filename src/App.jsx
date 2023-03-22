import React from 'react';
import UsersList from './components/UsersList';

const App = () => {
  return (
    <div className="bg-neutral-800 h-screen flex flex-col justify-center items-center p-10 text-white">
      <h1>hola</h1>
      <UsersList />
    </div>
  );
};

export default App;
