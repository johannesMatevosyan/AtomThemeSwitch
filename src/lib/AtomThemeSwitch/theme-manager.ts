import { ThemeType } from "./models";

let _theme: ThemeType;

// Getter function
export const getThemeName = (themePreference: string = 'theme'): ThemeType | undefined => {
  if (typeof window !== 'undefined') {
    _theme = window.localStorage.getItem(themePreference) as ThemeType || ThemeType.LIGHT;  
  }
  return _theme;
};

// Setter function
export const setThemeName = (themePreference: string = 'theme', themeName: ThemeType) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(themePreference, themeName); // Store in local storage
    }
};