import React, { useEffect, useState } from 'react';
import { getUsers } from '../hooks/getUsers';
import FormUsers from './FormUsers';
import UserCard from './UserCard';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const loadUsers = async () => {
    try {
      setIsLoading(true);
      const res = await getUsers();
      setUsers(res);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  useEffect(() => {
    setContent(
      isLoading ? (
        <p className="text-gray-600 text-xl font-medium m-8">Cargando usuarios...</p>
      ) : (
        users.map((user) => <UserCard userInfo={user} key={user.id} />)
      ),
    );
  }, [users, isLoading]);

  const handleClick = () => {
    if (showForm) {
      setShowForm(false);
    } else {
      setShowForm(true);
    }
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleClick}
      >
        Añadir usuario
      </button>
      <div className="flex flex-wrap items-center justify-center gap-10">
        {content}
        <div className="max-w-sm mx-auto p-4">
          <FormUsers isEditing={false} isVisible={showForm} />
        </div>
      </div>
    </div>
  );
};

export default UsersList;
