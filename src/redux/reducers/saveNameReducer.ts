import { SAVE_NAME } from '../actions/saveNameAction';

type ActionType = {
  type: string;
  payload: string;
};

const initialState = {
  name: '',
};

export const saveNameReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SAVE_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};
