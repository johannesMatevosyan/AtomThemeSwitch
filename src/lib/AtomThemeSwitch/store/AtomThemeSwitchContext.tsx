import { ReactElement, ReactNode, useEffect, useState } from "react";
import { AWSContextType, ThemeType } from "../models";
import ThemeDataContext from "./ThemeDataContext";
import { setThemeName, getThemeName } from "../theme-manager";

type ATSProps = {
  selectedTheme?: string;
  children: ReactNode;
};

export function AtomThemeSwitchContext(props: ATSProps): ReactElement<AWSContextType> {
    const { children, selectedTheme } = props;
    const [theme, setTheme] = useState<`${ThemeType}`>(ThemeType.LIGHT);

    useEffect(() => {
        const result = getThemeName(selectedTheme)
        if(!result) { // theme name is not defined then set to 'light'
          setThemeName(selectedTheme, ThemeType.LIGHT)
        } else if (result === ThemeType.LIGHT) {
          setTheme(ThemeType.LIGHT);
        } else if(result === ThemeType.DARK) {
          setTheme(ThemeType.DARK);
        }
      }, [theme]);

    return <ThemeDataContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeDataContext.Provider>
}