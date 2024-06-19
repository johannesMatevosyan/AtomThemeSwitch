
export enum ThemeType {
    LIGHT = 'light',
    DARK = 'dark',
}

export interface AWSContextType {
    theme: string;
    setTheme: (name: ThemeType) => void;
}

export interface IThemeCustomColors {
    bgColor?: string, 
    color?: string
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
    mode: string;
    type: string;
    fixedPosition?: IFixedPosition;
    customMatTheme?: {
        checked?: IThemeCustomColors,
        unchecked?: IThemeCustomColors
    }
    checked?: boolean,
    onChanged?: (type: ThemeType) => void;
}