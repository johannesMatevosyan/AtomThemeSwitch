let _theme = '';

// Getter function
export const getThemeName = (themePreference: string = 'theme') => {
  if (typeof window !== 'undefined') {
    _theme = window.localStorage.getItem(themePreference) || '';  
  }
  return _theme;
};

// Setter function
export const setThemeName = (themePreference: string = 'theme', themeName: string) => {
console.log('themeName ', themeName)
    if (themeName === 'light' || themeName === 'dark') {
      _theme = themeName;
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(themePreference, themeName); // Store in local storage
      }
    } else {
      console.error('Invalid theme value');
    }
  };