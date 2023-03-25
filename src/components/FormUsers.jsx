import React, { useEffect, useState } from 'react';
import { postUser } from '../hooks/postUser';
import { putUser } from '../hooks/putUser';

const FormUsers = ({ isEditing, userData, isVisible }) => {
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState(
    userData || {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: '',
    },
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isEditing) {
      await putUser(user.id, user);
    } else {
      await postUser(user);
    }
    setShowForm(false);
  };

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    setShowForm(isVisible);
  }, [isVisible]);

  return (
    <div className="max-w-md">
      {showForm && (
        <div className="mx-auto fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-10">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-3/4"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="first_name">
                Nombre
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="first_name"
                name="first_name"
                type="text"
                placeholder="Ingrese su nombre"
                value={user.first_name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="last_name">
                Apellido
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="last_name"
                name="last_name"
                type="text"
                placeholder="Ingrese su apellido"
                value={user.last_name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Correo electrónico
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder="Ingrese su correo electrónico"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                Contraseña
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="password"
                placeholder="Ingrese su contraseña"
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="birthday">
                Fecha de nacimiento
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="birthday"
                name="birthday"
                type="date"
                placeholder="Ingrese su fecha de nacimiento"
                value={user.birthday}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {isEditing ? 'Actualizar usuario' : 'Agregar usuario'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FormUsers;
