import { ChangeEvent, JSXElementConstructor, ReactElement, ReactNode, useContext, useEffect } from "react";
import SunIcon from './icons/Sun.svg';
import MoonIcon from './icons/moon.svg';

import "./AtomThemeSwitch.css";
import { AWSContextType, IAtomThemeSwitch, ThemeType } from "./models";
import ThemeDataContext from "./store/ThemeDataContext";

export const AtomThemeSwitch = (props: IAtomThemeSwitch): ReactElement<string | JSXElementConstructor<ReactNode>> => {

    const {onChanged, size, mode, type} = props;
    const { theme, setTheme } = useContext<AWSContextType>(ThemeDataContext);

    useEffect(() => {
        const scheme = 'prefers-color-scheme'
        detectBrowserMode(scheme);
    })

    const detectBrowserMode = (scheme: string) => {
        const lightMode = window.matchMedia && window.matchMedia(`(${scheme}: light)`).matches; // TODO check for SSR
        const darkMode = window.matchMedia && window.matchMedia(`(${scheme}: dark)`).matches;   // TODO check for SSR
        if (darkMode) {  // dark mode
            console.log('dark mode')
        } else if (lightMode) {  // light mode
            console.log('light mode')
        }
    }

    const onThemeChange = (event: ChangeEvent<HTMLInputElement>): void => {
        handleChange(event?.target?.checked);
        if (event?.target?.checked) {
            setThemeData(ThemeType.DARK);
        } else {
            setThemeData(ThemeType.LIGHT);
        }
    };

    const handleChange = (type: boolean) => {
        if(onChanged) {
            onChanged(type ? ThemeType.DARK : ThemeType.LIGHT);
        }
        
    }
    const setThemeData = (name: ThemeType) => {
        setTheme(name);
        if (typeof window !== 'undefined') {
            window.localStorage.setItem('theme', name); // TODO check for SSR
        }
    }

    return (
        <>
            <label 
                className={`ats__switch ${size} ${mode}`} 
                title={`${theme} theme`}>
                <input 
                    type="checkbox"
                    onChange={(e) => onThemeChange(e)} 
                    checked={theme === ThemeType.DARK ? true : false} />
                    {mode && mode === 'space' ? (
                        <>
                            <span className="ats__space-bg"></span>
                            <span className="sphere"></span>
                            <span className="ats__sun-icon"><SunIcon /></span>
                            <span className="ats__moon-icon"><MoonIcon /></span>
                        </>
                    ) : <span className={`ats__slider ${type}`}></span>}
            </label>
        </> 
    )
}

