import { AtomThemeSwitch, AtomThemeSwitchContext } from 'atom-theme-switch'
import { ThemeType } from './lib/AtomThemeSwitch/models';

function App() {

  const fixedPosition = {
    position: 'fixed', 
    top: '0', 
    left: '0', 
    bottom: '0', 
    right: '0', 
    margin: 'auto',
    transform: 'translate(-50%, -50%)',
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
        <AtomThemeSwitchContext selectedTheme='selectedTheme'>
          <AtomThemeSwitch  
            designType='material'
            shape='squere'
            switchHeight='64px'
            selectedTheme='selectedTheme'
            onChanged={getSwitchValues}
            handleBrowserMode={getBrowserMode}
            fixedPosition={fixedPosition}
            customMatTheme={customMatTheme}
            >
            </AtomThemeSwitch>
        </AtomThemeSwitchContext>

    </>
  )
}

export default App
