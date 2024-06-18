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
        mode: {
            type: 'string',
            description: 'Different modes available',
            defaultValue: 'material',
            options: ['material', 'space'],
        },
        type: {
            type: 'string',
            description: 'Type of switch',
            defaultValue: 'round',
            options: ['round', 'square'],
            control: {
                type: 'radio'
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

export const MaterialTheme = Template.bind({});
export const Square = Template.bind({});
export const SpaceTheme = Template.bind({});
export const FixedPosition = Template.bind({});

MaterialTheme.args = {
    type: 'round',
    mode: 'material',
    checked: false,
    onChanged: () => {}
};

Square.args = {
    type: 'square',
    mode: 'material',
    checked: true,
    onChanged: () => {}
}

SpaceTheme.args = {
    type: 'round',
    mode: 'space',
    checked: true,
    onChanged: () => {}
}

FixedPosition.args = {
    type: 'round',
    mode: 'space',
    fixedPosition: fixedPosition,
    onChanged: () => {}
}