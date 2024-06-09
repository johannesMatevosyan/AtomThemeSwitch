import { ChangeEvent, FC, ReactElement, useContext } from "react";
import { AtomThemeDataContext } from "./AtomThemeSwitchContext";
import "./AtomThemeSwitch.css";
import { ThemeName } from "./theme-name";

const AtomThemeSwitch: FC = (): ReactElement => {

    const { theme, setTheme } = useContext<{
        theme: string;
        setTheme: any
    }>(AtomThemeDataContext);
    const onThemeChange = (event: ChangeEvent<HTMLInputElement>): void => {
       
        const value = event?.target?.checked;
        if (value === true) {
            setTheme(ThemeName.DARK);
            setThemeName(ThemeName.DARK);
        } else {
            setTheme(ThemeName.LIGHT);
            setThemeName(ThemeName.LIGHT);
        }
    };

    const setThemeName = (name: string) => {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem('theme', name); // TODO ssr
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

export default AtomThemeSwitch;
