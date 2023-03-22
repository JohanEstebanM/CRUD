import axios from 'axios';

export const putUsers = async (id) => {
  try {
    const res = await axios.put(`https://users-crud.academlo.tech/users/${id}/`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
