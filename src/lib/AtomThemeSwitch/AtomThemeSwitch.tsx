import { ChangeEvent, ReactElement, useContext } from "react";
import propTypes from "prop-types";
import "./AtomThemeSwitch.css";
import { AWSContextType, ThemeName } from "./models";
import ThemeDataContext from "./ThemeDataContext";

export const AtomThemeSwitch: any = (props: any): ReactElement<any, any> => {

    const { theme, setTheme } = useContext<AWSContextType>(ThemeDataContext);

    const onThemeChange = (event: ChangeEvent<HTMLInputElement>): void => {
        handleChange(event);
        if (event?.target?.checked) {
            setThemeData(ThemeName.DARK);
        } else {
            setThemeData(ThemeName.LIGHT);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props?.sendDataToParent(event);
    }
    const setThemeData = (name: ThemeName.DARK | ThemeName.LIGHT) => {
        setTheme(name);
        if (typeof window !== 'undefined') {
            window.localStorage.setItem('theme', name); // TODO check for SSR
        }
    }

    return (
        <>
            <label 
                className={`ats__switch ${props?.size} ${props?.mode}`} 
                title={`${theme} theme`}>
                <input 
                    type="checkbox"
                    onChange={(e) => onThemeChange(e)} 
                    checked={theme === ThemeName.DARK ? true : false} />
                <span className={`ats__slider ${props?.type}`}></span>
            </label>
        </> 
    )
}

AtomThemeSwitch.propTypes = {
    type: propTypes.string,
    size: propTypes.string,
    mode: propTypes.string,
    onClick: propTypes.func,
}

