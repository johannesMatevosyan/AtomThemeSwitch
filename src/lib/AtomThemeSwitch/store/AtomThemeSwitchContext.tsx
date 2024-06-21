import { ReactElement, useEffect, useState } from "react";
import { AWSContextType, ThemeType, ATSContextProps } from "../models";
import ThemeDataContext from "./ThemeDataContext";
import { setThemeName, getThemeName } from "../theme-manager";


export function AtomThemeSwitchContext(props: ATSContextProps): ReactElement<AWSContextType> {
    const { children, selectedTheme } = props;
    const [theme, setTheme] = useState<`${ThemeType}`>(getThemeName(selectedTheme) || ThemeType.LIGHT);

    useEffect(() => {
        const result = getThemeName(selectedTheme)
        result === ThemeType.DARK ? setTheme(ThemeType.DARK) : setTheme(ThemeType.LIGHT);
        setThemeName('theme', result ? result: ThemeType.LIGHT)
      }, [theme]);

    return <ThemeDataContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeDataContext.Provider>
}