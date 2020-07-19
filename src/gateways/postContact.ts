import axios from 'axios';
import querystring from 'querystring';
import { InitialContactState } from 'store/contact/reducers';

export const postContact = async (contactData: InitialContactState) => {
  const { name, email, message } = contactData;
  const postData = `${name} 様より\n\n${message}\n\nemail: ${email}`;

  // デバッグ用;
  if (process.env.NODE_ENV !== 'production') {
    console.log('Contact debug mode');
    return await new Promise((_resolve, _reject) => {
      console.log(postData);

      setTimeout(() => {
        _resolve(postData);
        // _reject(postData);
      }, 1000);
    });
  }

  const res = await axios({
    method: 'post',
    url: 'https://notify-api.line.me/api/notify',
    headers: {
      Authorization: `Bearer ${process.env.LINE_NOTIFY}`,
    },
    data: querystring.stringify({
      message: postData,
    }),
  });
  const status = res?.status;
  const data = { ...contactData, status };
  return data;
};
