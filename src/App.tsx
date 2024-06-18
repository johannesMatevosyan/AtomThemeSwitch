import { AtomThemeSwitch, AtomThemeSwitchContext } from 'atom-theme-switch'
import { ThemeType } from './lib/AtomThemeSwitch/models';

function App() {

  const fixedPosition = {position: 'fixed', top: '0', left: '0', bottom: '0', right: '0', margin: 'auto'}
  const customMatTheme = {
    checked: {
      bgColor: 'blue', color: 'yellow'
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
            size='small'
            mode='material'
            type='round'
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
