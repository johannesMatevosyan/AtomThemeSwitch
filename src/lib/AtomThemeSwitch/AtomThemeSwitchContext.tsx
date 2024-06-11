import { ReactElement, ReactNode, useEffect, useState } from "react";
import { AWSContextType, ThemeName } from "./models";
import ThemeDataContext from "./ThemeDataContext";

type ATSProps = {
  children: ReactNode;
};

export function AtomThemeSwitchContext(props: ATSProps): ReactElement<AWSContextType> {
    const { children } = props;
    const [theme, setTheme] = useState<`${ThemeName}`>(ThemeName.LIGHT);

    useEffect(() => {
        const getTheme = window.localStorage.getItem('theme');
        if(!getTheme) {
          if (typeof window !== 'undefined') {
            window.localStorage.setItem('theme', ThemeName.LIGHT);
          }
        } else if (getTheme === ThemeName.LIGHT) {
          setTheme(ThemeName.LIGHT);
        } else if(getTheme === ThemeName.DARK) {
          setTheme(ThemeName.DARK);
        }
      }, [theme]);

    return <ThemeDataContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeDataContext.Provider>
}