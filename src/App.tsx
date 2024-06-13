import { AtomThemeSwitch, AtomThemeSwitchContext } from 'atom-theme-switch'

function App() {

  const getSwitchValues = (event: React.ChangeEvent<HTMLInputElement>) => console.log(event.target.checked);

  return (
    <>
      <div>
        <AtomThemeSwitchContext>
          <AtomThemeSwitch  
            size='small'
            mode='space'
            type='square'
            sendDataToParent={getSwitchValues}
            >
            </AtomThemeSwitch>
        </AtomThemeSwitchContext>
      </div>
    </>
  )
}

export default App
