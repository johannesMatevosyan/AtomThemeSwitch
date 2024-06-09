import AtomThemeSwitch from 'atom-theme-switch'
import { AtomThemeSwitchContext } from './lib/AtomThemeSwitch/AtomThemeSwitchContext'

function App() {

  return (
    <>
      <div>
        <AtomThemeSwitchContext>
          <AtomThemeSwitch />
        </AtomThemeSwitchContext>
      </div>
    </>
  )
}

export default App
