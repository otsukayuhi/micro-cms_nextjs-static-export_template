import { INCREMENT, DECREMENT } from './actions';

// 初期値
const initialState = {
  count: 0,
};

// reducer
export const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      return state;
  }
};
