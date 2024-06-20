import { Meta, StoryFn } from '@storybook/react';
import { AtomThemeSwitch } from './AtomThemeSwitch';
import { AtomThemeSwitchContext } from './store/AtomThemeSwitchContext';
import { IAtomThemeSwitch } from './models';

const meta: Meta<typeof AtomThemeSwitch> = {
    title: 'Switch theme',
    component: AtomThemeSwitch,
    decorators : [
        (Story) => (<AtomThemeSwitchContext><Story/></AtomThemeSwitchContext>)
    ],
    argTypes: {
        designType: {
            type: 'string',
            description: 'Two different designs available',
            defaultValue: 'material',
            options: ['material', 'space'],
        },
        shape: {
            type: 'string',
            description: 'Type of switch, with rounded and squere design available',
            defaultValue: 'round',
            options: ['round', 'square'],
            control: {
                type: 'radio'
            }
        },
        selectedTheme: {
            type: 'string',
            description: 'Define custom variable name for a local storage key that will store a theme value',
            defaultValue: 'round',
            options: ['round', 'square'],
            control: {
                type: 'radio'
            }
        },
        customMatTheme: {
            checked: {
                trackColor: 'blue', 
                thumbColor: 'white'
            },
            unchecked: {
                trackColor: 'darkblue', 
                thumbColor: 'gray'
            }
        }
    }
}

export default meta;

const Template: StoryFn<IAtomThemeSwitch> = (args: any) => <AtomThemeSwitch {...args} />
const fixedPosition = {
    position: 'fixed', 
    bottom: '20px', 
    right: '30px'
}
const customMatTheme = {
    checked: {
        trackColor: 'blue', 
        thumbColor: 'white'
    },
    unchecked: {
        trackColor: 'lightblue', 
        thumbColor: '#ffffdd'
    }
}

export const MaterialTheme = Template.bind({});
export const Square = Template.bind({});
export const SpaceTheme = Template.bind({});
export const FixedPosition = Template.bind({});
export const CustomMatTheme = Template.bind({});
export const SelectedTheme = Template.bind({});

MaterialTheme.args = {
    shape: 'round',
    designType: 'material',
    checked: false,
    onChanged: () => {}
};

Square.args = {
    shape: 'square',
    designType: 'material',
    checked: true,
    onChanged: () => {}
}

SpaceTheme.args = {
    shape: 'round',
    designType: 'space',
    checked: true,
    onChanged: () => {}
}

FixedPosition.args = {
    shape: 'round',
    designType: 'space',
    fixedPosition: fixedPosition,
    onChanged: () => {}
}

CustomMatTheme.args = {
    shape: 'round',
    designType: 'material',
    customMatTheme: customMatTheme,
    onChanged: () => {}
}

SelectedTheme.args = {
    shape: 'round',
    designType: 'material',
    selectedTheme: 'selectedTheme',
    customMatTheme: customMatTheme,
    onChanged: () => {}
}
