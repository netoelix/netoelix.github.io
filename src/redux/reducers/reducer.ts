import { SAVE_NAME, SAVE_PATH } from '../actions/action';

type ActionType = {
  type: string;
  payload: string;
};

const initialState = {
  name: '',
  path: '',
};

export const saveNameReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SAVE_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

export const savePathReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SAVE_PATH:
      return { ...state, path: action.payload };
    default:
      return state;
  }
};
