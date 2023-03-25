import React from 'react';
import DeleteUser from './DeleteUser';
import UpdateUser from './UpdateUser';

const UserCard = ({ userInfo: user }) => {
  
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h2 className="text-2xl font-bold text-black mb-4">
        {user.first_name} {user.last_name}
      </h2>
      <div className="flex flex-col">
        <p className="font-semibold mb-2 text-black">Correo:</p>
        <p className="mb-4 text-black">{user.email}</p>
        <p className="font-semibold mb-2 text-black">Fecha de nacimiento:</p>
        <p className="text-black">{user.birthday}</p>
      </div>
      <DeleteUser id={user.id} />
      <UpdateUser user={user} />
    </div>
  );
};

export default UserCard;
