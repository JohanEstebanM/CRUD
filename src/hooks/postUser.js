import axios from 'axios';

export const postUser = async (userData) => {
  try {
    const res = await axios.post('https://users-crud.academlo.tech/users/', userData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
