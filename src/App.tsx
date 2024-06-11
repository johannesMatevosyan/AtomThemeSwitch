import { AtomThemeSwitch, AtomThemeSwitchContext } from 'atom-theme-switch'

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
