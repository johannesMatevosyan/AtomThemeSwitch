import { AtomThemeSwitch, AtomThemeSwitchContext } from 'atom-theme-switch'
import { ThemeType } from './lib/AtomThemeSwitch/models';

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


        <AtomThemeSwitchContext>
          <AtomThemeSwitch  
            designType='material'
            shape='squere'
            switchHeight='64px'
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
