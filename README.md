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

### Web Browsers

 - Google Chrome: Latest 2 versions
 - Mozilla Firefox: Latest 2 versions
 - Safari: Latest 2 versions
 - Microsoft Edge: Latest 2 versions
 - Opera: Latest 2 versions
 - Internet Explorer: Version 11 and above (basic support)
### Mobile Browsers

 - Chrome for Android: Latest 2 versions
 - Firefox for Android: Latest 2 versions
 - Safari on iOS: Latest 2 versions

## Testing and Maintenance
We rigorously test our library against these browsers to ensure compatibility and performance. As new browser versions are released, we update our testing process to maintain support and address any emerging issues promptly. 

# Installation
To install the package via npm, run the following command:

```sh
npm install atom-theme-switch
```

# Inital setup
Add objects with initial values.
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

| Argument        | Type        | Values        |
| -------------   |:-----------:|:------------  |
| designType      | String      | material \| space  |
| shape           | String      | round  \| square   |
| switchHeight    | String      | '32px'   |
| fixedPosition   | Object      | { **position**: 'fixed', **left**: '0', **bottom**: '0', **right**: '0', **margin**: 'unset',**transform**: 'none'}   |
| customMatTheme  | Object      |  {  **checked**: { trackColor: 'blue', thumbColor: 'white'},  **unchecked**: {trackColor: '', thumbColor: ''}}|
| onChanged       | Event       | (type: 'light' \| 'dark') => void    |

## Toggle Between Design Modes
The switch button enables users to toggle between two design modes, these are: `material` and `space`.

## Flexible Design Customization
Enhance user experience with our switch button's design customization options. Seamlessly toggle between different shapes - square and round to perfectly complement your application's visual style. 

## Adjustable Switch Button Height
**AtomThemeSwitch** component offers dynamic height adjustment capabilities using modern CSS features such as `calc()` and `var()`. These functions provide flexibility and ease in customizing the appearance of the switch button to fit your design needs. Thus, by setting values in pixels for `switchHeight` property will adjust the size of entire component on the fly.

## Fixed Positioning
In CSS, the fixed position property is used to position an element relative to the viewport, which means it stays in the same place even if the page is scrolled. In order to make switch button fixed positioned add `fixedPosotion` object provide corresponding entry in component snippet. 

*** Note: *** If you are going to enable fixed positioning then  `position: 'fixed'` porperty is required, without that the rest of properties in `fixedPosition` object will not work.

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


## SVG icons used          
SVG icons taken from 

- [SVG Repo] - fast node.js network app framework

 [SVG Repo]: <https://www.svgrepo.com/>