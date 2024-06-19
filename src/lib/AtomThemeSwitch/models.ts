
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
    fixedPosition?: IFixedPosition;
    customMatTheme?: {
        checked?: IThemeCustomColors,
        unchecked?: IThemeCustomColors
    }
    checked?: boolean,
    onChanged?: (type: ThemeType) => void;
}