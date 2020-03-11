import { INCREMENT, DECREMENT } from './actions';

export type countStateTypes = {
  count: number;
};

// 初期値
export const countState = {
  count: 0,
};

// reducer
const countReducer = (state: countStateTypes = countState, action) => {
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

export default countReducer;
