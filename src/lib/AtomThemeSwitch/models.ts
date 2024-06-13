import { ChangeEvent } from "react";

export enum ThemeName {
    LIGHT = 'light',
    DARK = 'dark',
}

export interface AWSContextType {
    theme: string;
    setTheme: (name: "light" | "dark") => void;
}

export interface IAtomThemeSwitch {
    size: string;
    mode: string;
    type: string;
    sendDataToParent: (event: ChangeEvent<HTMLInputElement>) => void;
}