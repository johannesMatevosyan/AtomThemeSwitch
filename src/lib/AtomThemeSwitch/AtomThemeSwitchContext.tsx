import { ReactElement, ReactNode, useEffect, useState } from "react";
import { AWSContextType, ThemeType } from "./models";
import ThemeDataContext from "./ThemeDataContext";

type ATSProps = {
  children: ReactNode;
};

export function AtomThemeSwitchContext(props: ATSProps): ReactElement<AWSContextType> {
    const { children } = props;
    const [theme, setTheme] = useState<`${ThemeType}`>(ThemeType.LIGHT);

    useEffect(() => {
        const getTheme = window.localStorage.getItem('theme');
        if(!getTheme) {
          if (typeof window !== 'undefined') {
            window.localStorage.setItem('theme', ThemeType.LIGHT);
          }
        } else if (getTheme === ThemeType.LIGHT) {
          setTheme(ThemeType.LIGHT);
        } else if(getTheme === ThemeType.DARK) {
          setTheme(ThemeType.DARK);
        }
      }, [theme]);

    return <ThemeDataContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeDataContext.Provider>
}