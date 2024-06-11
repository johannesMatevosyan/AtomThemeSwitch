import { createContext } from "react";
import { AWSContextType, ThemeName } from "./models";

const ThemeDataContext = createContext<AWSContextType>({
    theme: ThemeName.LIGHT,
    setTheme: () => {}
});

export default ThemeDataContext;