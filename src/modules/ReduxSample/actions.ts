// Action Types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Action Creators
export const increment = (payload: number) => ({ type: INCREMENT, payload });
export const decrement = (payload: number) => ({
  type: DECREMENT,
  payload: -payload,
});
