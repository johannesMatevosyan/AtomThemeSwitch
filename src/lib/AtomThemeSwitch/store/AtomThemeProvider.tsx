import { ReactElement, useReducer } from "react";
import { AWSContextType, ATSContextProps, } from "../models/models";
import { createContext } from "react";
import { initialState, themeReducer } from "./ThemeReducer";



// Create the context
export const ThemeDataContext = createContext<AWSContextType>({
  state: initialState,
  dispatch: () => null,
});


export function AtomThemeProvider(props: ATSContextProps): ReactElement<AWSContextType> {
    const { children } = props;
    const [state, dispatch] = useReducer(themeReducer, initialState);

    return <ThemeDataContext.Provider value={{ state, dispatch }}>
        {children}
    </ThemeDataContext.Provider>
}