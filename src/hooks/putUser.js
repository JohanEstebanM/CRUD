import axios from 'axios';

export const putUser = async (id, userData) => {
  try {
    const res = await axios.put(
      `https://users-crud.academlo.tech/users/${id}/`,
      userData,
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
