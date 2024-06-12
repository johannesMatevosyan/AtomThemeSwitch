import { AtomThemeSwitch, AtomThemeSwitchContext } from 'atom-theme-switch'

function App() {

  return (
    <>
      <div>
        <AtomThemeSwitchContext>
          <AtomThemeSwitch  
            size = 'small' 
            theme = 'space' 
            type = 'square'>
            </AtomThemeSwitch>
        </AtomThemeSwitchContext>
      </div>
    </>
  )
}

export default App
