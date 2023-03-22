import axios from 'axios';

export const postUser = async () => {
  try {
    const res = await axios.post('https://users-crud.academlo.tech/users/');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
