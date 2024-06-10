import { ReactElement, ReactNode, createContext, useEffect, useState } from "react";
import { AWSContextType, ThemeName } from "./models";

type ATSProps = {
  children: ReactNode;
};

export const AtomThemeDataContext = createContext<AWSContextType>({
      theme: ThemeName.LIGHT,
      setTheme: () => {}
});

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
        // if state changes, repaints the app
      }, [theme]);

    return <AtomThemeDataContext.Provider value={{theme, setTheme}}>
        {children}
    </AtomThemeDataContext.Provider>
}