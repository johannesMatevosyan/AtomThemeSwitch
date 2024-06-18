
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
    customMatTheme?: {
        checked?: {
            bgColor?: string, 
            color?: string
          },
        unchecked?: {
            bgColor?: string, 
            color?: string,
        }
    }

    onChanged?: (type: ThemeType) => void;
}