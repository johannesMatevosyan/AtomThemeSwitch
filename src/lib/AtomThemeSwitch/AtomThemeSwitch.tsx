import { CSSProperties, ChangeEvent, JSXElementConstructor, ReactElement, ReactNode, useContext, useEffect, useState } from "react";
import SunIcon from './icons/Sun.svg'; 
import MoonIcon from './icons/moon.svg';
import "./AtomThemeSwitch.css";
import { ThemeType } from "./models/themeTypes";
import { AWSContextType } from "./models/models";
import { IAtomThemeSwitch, ICheckColors, ICheckedColors } from "./models/themeInterfaces";
import { setThemeName } from "./theme-manager";
import { ThemeDataContext } from "./store/AtomThemeProvider";

const SCHEME = 'prefers-color-scheme';
const SWH = '--switch-height';

export const AtomThemeSwitch = (props: IAtomThemeSwitch): ReactElement<string | JSXElementConstructor<ReactNode>> => {

    const {
        designType, 
        shape, 
        fixedPosition, 
        selectedTheme, 
        switchHeight, 
        customMatTheme,
        onChanged, 
        handleBrowserMode
    } = props;
    const { state, dispatch } = useContext<AWSContextType>(ThemeDataContext);
    const [customStyle, setCustomStyle] = useState<ICheckColors>({
            trackColor: '',
            thumbColor: ''
        })
    // Set adjustable height for switch button component    
    useEffect(() => {
        document.documentElement.style.setProperty(SWH, switchHeight ? switchHeight : '32px');
    }, [])
    // check and load colors for track and thumb
    useEffect(() => {
        const c = state.theme === ThemeType.DARK ? {...customMatTheme?.checked} : {...customMatTheme?.unchecked} ;
        const result = checkColors(c)
        setColors(result.c1, result.c2);
    }, [])
    // detect current mode of browser
    useEffect(() => {
        const MMD = window.matchMedia;
        const browserMode = MMD?.(`(${SCHEME}: dark)`).matches ? "dark" : "light" 

        if(!handleBrowserMode) return;

        if (browserMode === 'dark') {
            handleBrowserMode({system: 'dark'})
        } else if (browserMode === 'light') {
            handleBrowserMode({system: 'light'})
        }
    }, [])
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
    
    const handleChange = (type: boolean): void => {
        if(onChanged) {
            onChanged(type ? ThemeType.DARK : ThemeType.LIGHT);
            dispatch({ type: 'TOGGLE_THEME' })
        }
    }
    const setThemeData = (name: ThemeType): void => {
        if (typeof window !== 'undefined') {
            setThemeName(selectedTheme, name);
        }
    }
    // check if colors are set
    const checkColors = (c: ICheckColors): ICheckedColors  => {
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
        top: `${fixedPosition && fixedPosition.top ? fixedPosition.top : undefined}`,
        left: `${fixedPosition && fixedPosition.left ? fixedPosition.left : undefined}`,
        right: `${fixedPosition && fixedPosition.right ? fixedPosition.right : undefined}`,
        bottom: `${fixedPosition && fixedPosition.bottom ? fixedPosition.bottom : undefined}`,
        margin: `${fixedPosition && fixedPosition.margin ? fixedPosition.margin : undefined}`,
        transform: `${fixedPosition && fixedPosition.transform ? fixedPosition.transform : undefined}`,
    }
    const mainClasses = `ats__switch ${designType}`;

    return (
        <>
            <label 
                className={mainClasses} 
                style={fixedPosition && fixedPosition.position ? labelStyle : {}}
                title={`${state?.theme} theme`}>
                <input 
                    type="checkbox"
                    onChange={(e) => onThemeChange(e)} 
                    checked={state?.theme === ThemeType.DARK ? true : false} />
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
                                style={{backgroundColor: customStyle.thumbColor ? customStyle.thumbColor : ''}}>
                            </span>
                        </span>}
            </label>
        </> 
    )
}

