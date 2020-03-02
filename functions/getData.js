require('dotenv').config();
const axios = require('axios');
const fs = require('fs');

const url = 'https://futae.microcms.io/api/v1/';

exports.getData = async (path, fields = '') => {
  try {
    const res = await axios.get(`${url}${path}`, {
      headers: {
        'X-API-KEY': process.env.X_API_KEY,
      },
      params: {
        fields,
      },
    });
    console.log(`Success! [${path}] Get!!`);
    fs.writeFileSync(`data/${path}.json`, JSON.stringify(res.data));
  } catch (error) {
    const { status, statusText } = error.response;
    console.log(`Error! HTTP Status: ${status} ${statusText}`);
  }
};
