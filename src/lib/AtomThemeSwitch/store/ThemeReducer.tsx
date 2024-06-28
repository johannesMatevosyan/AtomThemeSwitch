import { State, Action } from "../models/models";
import { ThemeType } from "../models/themeTypes";

// Define initial state
export const initialState: State = { theme: ThemeType.LIGHT };

// Define a reducer function
export const themeReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === ThemeType.LIGHT ? ThemeType.DARK  : ThemeType.LIGHT };
    default:
      return state;
  }
};
