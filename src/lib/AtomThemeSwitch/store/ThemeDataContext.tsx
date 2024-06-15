import { createContext } from "react";
import { AWSContextType, ThemeType } from "../models";

const ThemeDataContext = createContext<AWSContextType>({
    theme: ThemeType.LIGHT,
    setTheme: () => {}
});

export default ThemeDataContext;