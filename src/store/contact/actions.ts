import { postContact } from 'gateways/postContact';

export const CONTACT = 'CONTACT';
export const POST_DATA = 'POST_DATA';

export const postData = contact => ({
  type: POST_DATA,
  contact,
});

export const contactAction = contact => {
  return async dispatch => {
    dispatch({ type: CONTACT });
    const data = await postContact(contact);
    dispatch(postData(data));
  };
};
