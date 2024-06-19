import { CSSProperties, ChangeEvent, JSXElementConstructor, ReactElement, ReactNode, useContext, useEffect, useState } from "react";
import SunIcon from './icons/Sun.svg'; 
import MoonIcon from './icons/moon.svg';
import "./AtomThemeSwitch.css";
import { AWSContextType, IAtomThemeSwitch, ThemeType } from "./models";
import ThemeDataContext from "./store/ThemeDataContext";

const SCHEME = 'prefers-color-scheme'

export const AtomThemeSwitch = (props: IAtomThemeSwitch): ReactElement<string | JSXElementConstructor<ReactNode>> => {

    const {onChanged, designType, shape, fixedPosition, switchHeight, customMatTheme} = props;
    const { theme, setTheme } = useContext<AWSContextType>(ThemeDataContext);
    const [customStyle, setCustomStyle] = useState({
            trackColor: '',
            thumbColor: ''
        })
    // Set adjustable height for switch button component    
    useEffect(() => {
        document.documentElement.style.setProperty('--switch-height', switchHeight ? switchHeight : '32px');
    }, [])
    // check and load colors for track and thumb
    useEffect(() => {
        const c = {...customMatTheme?.checked};
        const result = checkColors(c)
        setColors(result.c1, result.c2);
    }, [customMatTheme])

    useEffect(() => {
        detectBrowserMode();
    })
    // detect current mode of browser
    const detectBrowserMode = (): void => {
        const MMD = window.matchMedia;
        const browserMode = MMD?.(`(${SCHEME}: dark)`).matches ? "dark" : "light" // TODO check for SSR  
        if (browserMode === 'dark') {  // dark
            console.log('dark mode')
        } else if (browserMode === 'light') {  // light
            console.log('light mode')
        }
    }
    // toggle between on/off states
    const onThemeChange = (event: ChangeEvent<HTMLInputElement>): void => {
        handleChange(event?.target?.checked);
        if (event?.target?.checked) {
            const c = {...customMatTheme?.checked};
            const result = checkColors(c)
            setColors(result.c1, result.c2)
            setThemeData(ThemeType.DARK);
        } else {
            const c = {...customMatTheme?.unchecked};
            const result = checkColors(c)
            setColors(result.c1, result.c2)
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
            window.localStorage.setItem('theme', name);
        }
    }
    // check if colors are set
    const checkColors = (c: {trackColor?: string, thumbColor?: string}) => {
        return {
            c1: c?.trackColor ? c?.trackColor : "",
            c2: c?.thumbColor ? c?.thumbColor : ""
        }    
    }
    // Set background colors for track(horizontal bar) and thumb(The circular handle that slides along the track)
    const setColors = (c1: string, c2: string): void => {
        setCustomStyle({
            trackColor: c1,
            thumbColor: c2
        });
    }

    const position: ('absolute' | 'relative' | 'fixed') = 'fixed' 
    const labelStyle: CSSProperties  = {
        position: `${fixedPosition && fixedPosition.position ? position : 'static'}`,
        top: `${fixedPosition && fixedPosition.top ? fixedPosition.top : 'unset'}`,
        left: `${fixedPosition && fixedPosition.left ? fixedPosition.left : 'unset'}`,
        right: `${fixedPosition && fixedPosition.right ? fixedPosition.right : 'unset'}`,
        bottom: `${fixedPosition && fixedPosition.bottom ? fixedPosition.bottom : 'unset'}`,
        margin: `${fixedPosition && fixedPosition.margin ? fixedPosition.margin : 'auto'}`,
        transform: `${fixedPosition && fixedPosition.transform ? fixedPosition.transform : 'none'}`,
    }

    const mainClasses = `ats__switch ${designType}`;

    return (
        <>
            <label 
                className={mainClasses} 
                style={fixedPosition && fixedPosition.position ? labelStyle : {}}
                title={`${theme} theme`}>
                <input 
                    type="checkbox"
                    onChange={(e) => onThemeChange(e)} 
                    checked={theme === ThemeType.DARK ? true : false} />
                    {designType && designType === 'space' ? (
                        <>
                            <span className="ats__space-bg"></span>
                            <span className="sphere"></span>
                            <span className="ats__sun-icon"><SunIcon /></span>
                            <span className="ats__moon-icon"><MoonIcon /></span>
                        </>
                    ) : <span 
                            className={`ats__slider ${shape}`} 
                            style={{backgroundColor: customStyle.trackColor ? customStyle.trackColor : ''}}>
                            <span
                                className="ats__slider-button" 
                                style={{backgroundColor: customStyle.thumbColor ? customStyle.thumbColor : ''}}></span>
                        </span>}
            </label>
        </> 
    )
}

