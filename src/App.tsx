import AtomThemeSwitch from 'atom-theme-switch'
import { AtomThemeSwitchContext } from 'ats-context'

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
