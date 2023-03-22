import React, { useEffect, useState } from 'react';
import { getUsers } from '../hooks/getUsers';
import UserCard from './UserCard';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <div>
      {isLoading ? (
        <p>Loading usuarios...</p>
      ) : (
        users.map((user) => <UserCard userInfo={user} key={user.id} />)
      )}
    </div>
  );
};

export default UsersList;
