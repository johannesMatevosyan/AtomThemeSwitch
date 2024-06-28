import { ThemeType } from "./themeTypes";

export interface IFixedPosition {
    position?: string,
    top?: string,
    right?: string,
    left?: string,
    bottom?: string,
    margin?: string,
    transform?: string,
}

export interface ICheckColors {
    trackColor?: string, 
    thumbColor?: string
}

export interface ICheckedColors {
    c1: string, 
    c2: string
}

export interface IThemeCustomColors {
    trackColor?: string, 
    thumbColor?: string
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
