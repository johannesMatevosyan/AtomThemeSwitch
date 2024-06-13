import { AtomThemeSwitch, AtomThemeSwitchContext } from 'atom-theme-switch'
import { ThemeType } from './lib/AtomThemeSwitch/models';

function App() {

  const getSwitchValues = (type: ThemeType) => console.log(type);

  return (
    <>
      <div>
        <AtomThemeSwitchContext>
          <AtomThemeSwitch  
            size='small'
            mode='space'
            type='square'
            onChanged={getSwitchValues}
            >
            </AtomThemeSwitch>
        </AtomThemeSwitchContext>
      </div>
    </>
  )
}

export default App
