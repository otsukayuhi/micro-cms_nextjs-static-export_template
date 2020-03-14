import axios from 'axios';

export const CONTACT = 'CONTACT';
export const POST_DATA = 'POST_DATA';

const defaultData = {
  subject: 'お問い合わせ',
  honeypot: '',
  replyTo: process.env.MY_MAIL,
  accessKey: process.env.MAIL_KEY,
};
const url = 'https://api.staticforms.xyz/submit';
const options = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const postData = contact => ({
  type: POST_DATA,
  contact,
});

export const contactAction = contact => {
  const postState = { ...defaultData, ...contact };
  return dispatch => {
    dispatch({ type: CONTACT });
    axios.post(url, JSON.stringify(postState), options).then(res => {
      const status = res.status;
      const data = { ...contact, status };
      dispatch(postData(data));
    });
  };
};
