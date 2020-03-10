import { INCREMENT, DECREMENT } from './actions';

export type InitialStateTypes = {
  count: number;
};

// 初期値
const initialState = {
  count: 0,
};

// reducer
export const myReducer = (state: InitialStateTypes = initialState, action) => {
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
