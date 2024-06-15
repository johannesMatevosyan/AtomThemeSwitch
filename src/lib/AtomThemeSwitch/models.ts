
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
    fixedPosition?: {
        position?: string,
        top?: string,
        right?: string,
        left?: string,
        bottom?: string,
        margin?: string,
    };
    onChanged?: (type: ThemeType) => void;
}