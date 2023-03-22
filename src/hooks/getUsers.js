import axios from 'axios';

export const getUsers = async () => {
  try {
    const res = await axios.get('https://users-crud.academlo.tech/users/');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
