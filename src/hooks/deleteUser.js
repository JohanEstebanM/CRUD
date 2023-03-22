import axios from 'axios';

export const deleteUsers = async (id) => {
  try {
    const res = await axios.delete(`https://users-crud.academlo.tech/users/${id}/`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
