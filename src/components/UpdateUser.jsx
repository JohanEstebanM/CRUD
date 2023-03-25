import React, { useState } from 'react';
import FormUsers from './FormUsers';

const UpdateUser = ({ user }) => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  return (
    <div className="flex justify-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleClick}
      >
        Actualizar
      </button>
      <FormUsers userData={user} isEditing={true} isVisible={showForm} />
    </div>
  );
};

export default UpdateUser;
