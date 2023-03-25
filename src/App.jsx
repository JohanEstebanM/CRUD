import React from 'react';
import UsersList from './components/UsersList';

const App = () => {
  return (
    <div className="bg-neutral-800 flex flex-col justify-center items-center p-10 min-h-screen">
      <h1 className="text-white text-3xl font-bold mb-4">lista de usuarios</h1>
      <UsersList />
    </div>
  );
};

export default App;
