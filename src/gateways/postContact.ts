// import axios from 'axios';

// const url = 'https://api.staticforms.xyz/submit';
// const options = {
//   headers: {
//     'Content-Type': 'application/json',
//   },
// };
// const defaultData = {
//   subject: 'お問い合わせ',
//   honeypot: '',
//   replyTo: process.env.MY_MAIL,
//   accessKey: process.env.MAIL_KEY,
// };

// export const postContact = async contact => {
//   const postData = { ...defaultData, ...contact };
//   const res = await axios.post(url, JSON.stringify(postData), options);
//   const status = res.status;
//   const data = { ...contact, status };
//   return data;
// };

export const postContact = async contact => {
  const status = 200;
  return await new Promise(resolve => {
    setTimeout(() => {
      const data = { ...contact, status };
      resolve(data);
    }, 500);
  });
};
