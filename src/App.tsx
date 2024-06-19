import { AtomThemeSwitch, AtomThemeSwitchContext } from 'atom-theme-switch'
import { ThemeType } from './lib/AtomThemeSwitch/models';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.documentElement.style.setProperty('--switch-height', '32px');
  }, [])
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
      bgColor: 'blue', 
      color: 'white'
    },
    unchecked: {
      bgColor: '', color: ''
    }
  }
  const getSwitchValues = (type: ThemeType) => console.log(type);

  return (
    <>
        <AtomThemeSwitchContext>
          <AtomThemeSwitch  
            designType='material'
            shape='round'
            onChanged={getSwitchValues}
            fixedPosition={fixedPosition}
            customMatTheme={customMatTheme}
            >
            </AtomThemeSwitch>
        </AtomThemeSwitchContext>

    </>
  )
}

export default App
