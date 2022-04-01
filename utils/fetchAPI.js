import axios from 'axios';

export const baseURL = 'https://bayut.p.rapidapi.com';

export const fetchAPI = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'f752dc25c1msha7873a8bc19c832p1ef92ejsn3bfbd3b8a961',
    },
  });
  return data;
};
