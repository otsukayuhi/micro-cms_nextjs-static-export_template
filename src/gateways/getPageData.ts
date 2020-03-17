import axios from 'axios';

export const getPageData = async (path: string, fields = '') => {
  const url = process.env.API_URL + path;
  const options = {
    headers: {
      'X-API-KEY': process.env.X_API_KEY,
    },
    params: {
      fields,
    },
  };
  const res = await axios.get(url, options);
  return res.data;
};
