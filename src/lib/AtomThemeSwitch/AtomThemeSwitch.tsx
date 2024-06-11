import { ChangeEvent, FC, ReactElement, useContext } from "react";
import "./AtomThemeSwitch.css";
import { AWSContextType, ThemeName } from "./models";
import ThemeDataContext from "./ThemeDataContext";

export const AtomThemeSwitch: FC = (): ReactElement => {

    const { theme, setTheme } = useContext<AWSContextType>(ThemeDataContext);
    const onThemeChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event?.target?.checked) {
            setThemeData(ThemeName.DARK);
        } else {
            setThemeData(ThemeName.LIGHT);
        }
    };

    const setThemeData = (name: ThemeName.DARK | ThemeName.LIGHT) => {
        setTheme(name);
        if (typeof window !== 'undefined') {
            window.localStorage.setItem('theme', name); // TODO check for SSR
        }
    }

    return (
        <>
            <label className="ats__switch" title={`${theme} theme`}>
                <input 
                    type="checkbox"
                    onChange={(e) => onThemeChange(e)} 
                    checked={theme === ThemeName.DARK ? true : false} />
                <span className="ats__slider round"></span>
            </label>
        </>
    )
}

