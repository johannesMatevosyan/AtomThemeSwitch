import { AtomThemeSwitch, AtomThemeProvider } from 'atom-theme-switch'
import { ThemeType } from './lib/AtomThemeSwitch/models/themeTypes';

function App() {

  const fixedPosition = {
    position: 'fixed', 
    bottom: '120px',  
    right: '100px', 
    margin: 'auto',
  }
  const customMatTheme = {
    checked: {
      trackColor: 'blue', 
      thumbColor: 'white'
    },
    unchecked: {
      trackColor: '', 
      thumbColor: ''
    }
  }

  const getSwitchValues = (type: ThemeType) => console.log(type);
  const getBrowserMode = (mode: {system: string}) => console.log(mode);

  return (
      <>
        <AtomThemeProvider>
            <AtomThemeSwitch  
              designType='space'
              shape='squere'
              switchHeight='84px'
              onChanged={getSwitchValues}
              handleBrowserMode={getBrowserMode}
              fixedPosition={fixedPosition}
              customMatTheme={customMatTheme}
              selectedTheme='some-key-to-have'
              >
            </AtomThemeSwitch>
        </AtomThemeProvider>

    </>
  )
}

export default App
