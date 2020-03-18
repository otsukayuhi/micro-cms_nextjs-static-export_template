// import axios from 'axios';

import { InitialContactState } from 'store/pages/contact/reducers';

// const url = 'https://api.staticforms.xyz/submit';
// const options = {
//   headers: {
//     'Content-Type': 'application/json',
//   },
// };

// export const postContact = async (contactData: InitialContactState) => {
//   const { name, email, message } = contactData;
//   const defaultData = {
//     subject: `${name}様より、お問い合わせです。`,
//     honeypot: '',
//     replyTo: process.env.MY_MAIL,
//     accessKey: process.env.MAIL_KEY,
//   };
//   const postData = { ...defaultData, name, email, message };
//   const res = await axios.post(url, JSON.stringify(postData), options);
//   const status = res?.status;
//   const data = { ...contactData, status };
//   return data;
// };

export const postContact = async (contactData: InitialContactState) => {
  const { name, email, message } = contactData;
  const defaultData = {
    subject: `${name}様より、お問い合わせです。`,
    honeypot: '',
    replyTo: process.env.MY_MAIL,
    accessKey: process.env.MAIL_KEY,
  };
  const postData = { ...defaultData, name, email, message };

  return await new Promise((_resolve, _reject) => {
    setTimeout(() => {
      _resolve(postData);
      // _reject(postData);
    }, 1000);
  });
};
