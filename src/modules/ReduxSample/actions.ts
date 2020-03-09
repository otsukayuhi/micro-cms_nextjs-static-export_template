// Action Types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Action Creators
export const increment = payload => ({ type: INCREMENT, payload });
export const decrement = payload => ({
  type: DECREMENT,
  payload: -payload,
});
