import { ReactElement, ReactNode, createContext, useEffect, useState } from "react";
import { ThemeName } from "./theme-name";

type ATSProps = {
  children: ReactNode;
};

export const AtomThemeDataContext = createContext<{ 
    theme: string; 
    setTheme: any // Dispatch<SetStateAction<"light" | "dark">>
  }>({
      theme: ThemeName.LIGHT,
      setTheme: null
  });

export function AtomThemeSwitchContext(props: ATSProps): ReactElement<{ theme: string; setTheme: any}> {
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