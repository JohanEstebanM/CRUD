import React from 'react';

const UserCard = ({ userInfo: user }) => {
  console.log(user);
  return (
    <div>
      <h2>
        {user.first_name} {user.last_name}
      </h2>
      <div>
        <p>correo:</p>
        <p>{user.email}</p>
        <p>fecha de nacimiento</p>
        <p>{user.birthday}</p>
      </div>
    </div>
  );
};

export default UserCard;
