import { Dispatch, ReactNode } from "react";
import { ThemeType } from "./themeTypes";

export interface State {
    theme: ThemeType;
}

interface ToggleThemeAction {
    type: 'TOGGLE_THEME';
}

export type Action = ToggleThemeAction;


export interface AWSContextType {
    state: State;
    dispatch: any;
}

export interface ThemeContextProps {
    state: State;
    dispatch: Dispatch<Action>;
}

export type ATSContextProps = {
  selectedTheme?: string;
  children: ReactNode;
};