export enum ThemeName {
    LIGHT = 'light',
    DARK = 'dark',
}

export interface AWSContextType {
    theme: string;
    setTheme: (name: "light" | "dark") => void;
}