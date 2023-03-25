import React from 'react';
import { deleteUsers } from '../hooks/deleteUser';

const DeleteUser = ({ id }) => {
  const handleDelete = () => {
    deleteUsers(id);
  };

  return (
    <div>
      <button
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleDelete}
      >
        Eliminar
      </button>
    </div>
  );
};

export default DeleteUser;
