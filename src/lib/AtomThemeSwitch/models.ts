import { ReactNode } from "react";

export enum ThemeType {
    LIGHT = 'light',
    DARK = 'dark',
}

export interface AWSContextType {
    theme: string;
    setTheme: (name: ThemeType) => void;
}

export interface IThemeCustomColors {
    trackColor?: string, 
    thumbColor?: string
}

export interface IFixedPosition {
    position?: string,
    top?: string,
    right?: string,
    left?: string,
    bottom?: string,
    margin?: string,
    transform?: string,
}

export interface IAtomThemeSwitch {
    designType: string;
    shape: string;
    switchHeight?: string;
    selectedTheme?: string;
    fixedPosition?: IFixedPosition;
    customMatTheme?: {
        checked?: IThemeCustomColors,
        unchecked?: IThemeCustomColors
    }
    checked?: boolean,
    onChanged?: (type: ThemeType) => void;
    handleBrowserMode?: (mode: {system: string}) => void;
}

export interface ICheckColors {
    trackColor?: string, 
    thumbColor?: string
}

export interface ICheckedColors {
    c1: string, 
    c2: string
}

export type ATSContextProps = {
  selectedTheme?: string;
  children: ReactNode;
};