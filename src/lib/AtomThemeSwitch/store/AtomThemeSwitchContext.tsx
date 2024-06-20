import { ReactElement, useEffect, useState } from "react";
import { AWSContextType, ThemeType, ATSContextProps } from "../models";
import ThemeDataContext from "./ThemeDataContext";
import { setThemeName, getThemeName } from "../theme-manager";


export function AtomThemeSwitchContext(props: ATSContextProps): ReactElement<AWSContextType> {
    const { children, selectedTheme } = props;
    const [theme, setTheme] = useState<`${ThemeType}`>(ThemeType.LIGHT);

    useEffect(() => {
        const result = getThemeName(selectedTheme)
        if(!result) { // if theme name is not defined then set to 'light'
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