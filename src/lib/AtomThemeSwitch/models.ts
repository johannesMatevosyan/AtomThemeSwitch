
export enum ThemeType {
    LIGHT = 'light',
    DARK = 'dark',
}

export interface AWSContextType {
    theme: string;
    setTheme: (name: ThemeType) => void;
}

export interface IAtomThemeSwitch {
    size: string;
    mode: string;
    type: string;
    onChanged?: (type: ThemeType) => void;
}