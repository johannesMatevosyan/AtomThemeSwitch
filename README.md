# AtomThemeSwitch library for React.js

## Seamless Theme Switching
Easily toggle between light and dark modes or any custom themes with minimal setup. The library provides a simple API to switch themes dynamically, ensuring a smooth user experience.

## Persistent Theme Preferences
Automatically save and load user theme preferences using local storage mechanism. This ensures that users' theme choices are remembered across sessions.

## Responsive Design
Ensure your themes look great on any device. The library is designed with responsive design principles in mind, providing a consistent experience across desktops, tablets, and mobile devices.

## Accessibility Support
Improve accessibility with high-contrast themes and easy-to-read font options. The library includes features to help you build applications that are accessible to all users, including those with visual impairments.

## Easy Integration
Integrate the theme switch functionality into your existing React project with minimal effort. The library is designed to be easy to set up and use, with comprehensive documentation and examples.

## Performance Optimized
Built with performance in mind, the library ensures that theme switching is fast and does not degrade the performance of your application. Efficient use of resources and optimized rendering ensure a smooth experience.

## Theming Context API
Leverage the power of React's Context API to manage theme state globally across your application. The library provides a robust context implementation for managing and accessing theme data.

## Developer-Friendly
Enjoy a developer-friendly experience with TypeScript support, detailed documentation, and an active community. The library is designed to be intuitive and easy to use, with helpful resources available to get you started quickly.

## Customizable Themes
Define your own themes with full control over colors, fonts, and styles. The library supports a wide range of customization options, allowing you to create a unique look and feel for your application.

## Compatibility
Compatible with major React frameworks and libraries such as Next.js, Gatsby, and Create React App. The library works seamlessly with popular tools and frameworks, ensuring broad compatibility.

## Browser support 

Our theme switch library is designed to work seamlessly across all major web browsers, ensuring a consistent and reliable user experience for all your site visitors. We continuously test and optimize our library to support the following browsers:

 - Google Chrome: Latest 2 versions
 - Mozilla Firefox: Latest 2 versions
 - Safari: Latest 2 versions
 - Microsoft Edge: Latest 2 versions
 - Opera: Latest 2 versions

## Testing and Maintenance
We rigorously test our library against these browsers to ensure compatibility and performance. As new browser versions are released, we update our testing process to maintain support and address any emerging issues promptly. 

# Installation
To install the package via npm, run the following command:

```sh
npm install atom-theme-switch
```

# Inital setup
Add package imports at the top of your component

```tsx
import { AtomThemeSwitch, AtomThemeSwitchContext } from 'atom-theme-switch'
import 'atom-theme-switch/dist/style.css'
```
Set initial values for property objects.
```tsx
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
```

Then place the code snippet written below in the of needed component to render `AtomThemeSwitch` library:

```tsx
    <AtomThemeSwitchContext>
        <AtomThemeSwitch  
          designType='material'
          shape='round'
          switchHeight='34px'
          onChanged={getSwitchValues}
          customMatTheme={customMatTheme}
        >
        </AtomThemeSwitch>
    </AtomThemeSwitchContext>
```


# Options available

| Argument          | Type        | Values        |
| :-------------    |:-----------:|:------------  |
| designType        | String      | material \| space  |
| shape             | String      | round  \| square   |
| switchHeight      | String      | '32px'             |
| selectedTheme     | String      | 'selectedTheme'    |
| fixedPosition     | Object      | { **position**: 'fixed', **left**: '0', **bottom**: '0', **right**: '0', **margin**: 'unset',**transform**: 'none'}   |
| customMatTheme    | Object      |  {  **checked**: { trackColor: 'blue', thumbColor: 'white'},  **unchecked**: {trackColor: '', thumbColor: ''}}|
| onChanged         | Event       | (type: 'light' \| 'dark') => void         |
| handleBrowserMode | Event       | (type: mode: {system: string}) => void    |

## Design Customization - Toggle Between Different Modes
The **AtomThemeSwitch** component provides an intuitive way for users to toggle between different visual themes in a React.js application. Hence, the switch button allows users to choose between two distinct design types: Material and Space by setting corresponding value to `designType`property.

Material design offers a clean and modern look, following the principles of Material Design.

![chrome_Ta0SASSZol](https://github.com/johannesMatevosyan/AtomThemeSwitch/assets/2904795/c5e0af75-2705-4843-9c04-8da6ec9887ca)

Space design provides a more futuristic and open layout, perfect for applications needing a unique visual identity.

![space-theme](https://github.com/johannesMatevosyan/AtomThemeSwitch/assets/2904795/53d33a83-ee7a-46ce-abc0-5570dff223b3)

With this component, you can easily switch between different visual themes, offering a more personalized user experience.

## Flexible Design Customization
Enhance user experience with our switch button's design customization options. Seamlessly toggle between different shapes - `square`  and `round`  to perfectly complement your application's visual style. 

![image](https://github.com/johannesMatevosyan/AtomThemeSwitch/assets/2904795/874e51c4-4c0f-4efe-9224-ba60e39d0321)


## Adjustable Switch Button Height
**AtomThemeSwitch** component offers dynamic height adjustment capabilities using modern CSS features such as `calc()` and `var()`. These functions provide flexibility and ease in customizing the appearance of the switch button to fit your design needs. Thus, by setting values in pixels for `switchHeight` property will adjust the size of entire component on the fly.

![switchHeight](https://github.com/johannesMatevosyan/AtomThemeSwitch/assets/2904795/176f6124-e3c2-48b6-a81c-4d133d3ef8ba)


## Dynamic variable name for a local storage key 
By default **AtomThemeSwitch** sets `'theme'` key name in local storage. Meanwhile there might be cases you would like to set anohter name. Thus, user allowed to choose a key name that best fits the context and naming conventions of your project. Feel free to set a custom string value based on your needs by updating `selectedTheme`  property.

```tsx
    <AtomThemeSwitchContext selectedTheme='your-preferred-name'>
        <AtomThemeSwitch  
          designType='material'
          shape='round'
          selectedTheme='your-preferred-name'
          customMatTheme={customMatTheme}
        >
        </AtomThemeSwitch>
    </AtomThemeSwitchContext>
```

## Fixed Positioning
In CSS, the fixed position property is used to position an element relative to the viewport, which means it stays in the same place even if the page is scrolled. In order to make switch button fixed positioned add `fixedPosotion` object provide corresponding entry in component snippet. 



***Note:*** If you are going to enable fixed positioning then  `position: 'fixed'` porperty is required, without that the rest of properties in `fixedPosition` object will not work.

```tsx
  const fixedPosition = {
    position: 'fixed', 
    top: '0', 
    left: '0', 
    bottom: '0', 
    right: '0', 
    margin: 'auto',
    transform: 'translate(-50%, -50%)',
  }
```
Next, include object in the proeprties list of component.

```tsx
    <AtomThemeSwitchContext>
        <AtomThemeSwitch  
          designType='material'
          shape='round'
          fixedPosition={fixedPosition}
          customMatTheme={customMatTheme}
        >
        </AtomThemeSwitch>
    </AtomThemeSwitchContext>
```

 - `position: fixed;`: This positions the element relative to the browser window (viewport).
 - `top: 0;`: This positions the element 0 pixels from the top of the viewport.
 - `left: 0;`: This positions the element 0 pixels from the left of the viewport.
 - `right: 0;`: This positions the element 0 pixels from the right of the viewport.
 - `bottom: 0;`: This positions the element 0 pixels from the bottom of the viewport.
 - `margin: auto;`: offset the element within mentioned amount.
 - `transform: translate(X, Y);`: This moves the element within its own width and height.

## Detect browser's current mode or theme
This function retrieves the browser's current mode or theme (e.g., light or dark mode) and sends it to the parent component. It is typically used in a React component to communicate the current theme setting to its parent component, enabling the parent component to update its state or perform other actions based on the theme.

Add `handleBrowserMode` property to **AtomThemeSwitch** component. 

```tsx
    <AtomThemeSwitchContext>
        <AtomThemeSwitch  
          designType='material'
          shape='round'
          customMatTheme={customMatTheme}
          handleBrowserMode={getBrowserMode}
        >
        </AtomThemeSwitch>
    </AtomThemeSwitchContext>
```

Then define function that will handle result object.

```tsx
  const getBrowserMode = (mode: {system: string}) => console.log(mode);
```

## SVG icons used          
SVG icons taken from 

- [SVG Repo] - fast node.js network app framework

 [SVG Repo]: <https://www.svgrepo.com/>
