import { Meta, StoryFn } from '@storybook/react';
import { AtomThemeSwitch } from './AtomThemeSwitch';

const meta: Meta<typeof AtomThemeSwitch> = {
    title: 'Switch theme',
    component: AtomThemeSwitch,
    argTypes: {
        mode: {
            type: 'string',
            description: 'Different sizes available',
            defaultValue: 'material',
            options: ['material', 'space'],
        },
        size: {
            type: 'string',
            description: 'Different sizes available',
            defaultValue: 'medium',
            options: ['small', 'medium', 'large'],
            control: {
                type: 'radio'
            }
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

interface ButtonProps {
    type: string,
    size: string,
    mode: string,
}

const Template: StoryFn<ButtonProps> = (args: any) => <AtomThemeSwitch {...args} />

export const Default = Template.bind({});
export const Small = Template.bind({});
export const Large = Template.bind({});

Default.args = {
    type: 'round',
    size: 'medium',
    mode: 'material',
}

Small.args = {
    type: 'round',
    size: 'small',
    mode: 'material',
}


Large.args = {
    type: 'round',
    size: 'large',
    mode: 'material',
}


// type Story = StoryObj<typeof AtomThemeSwitch>

// export const Default: Story = {
//     args: {
//         children: 'Switch Theme to dark'
//     }
// }

// export const Dark: Story = {
//     args: {
//         children: 'Dark theme set'
//     }
// }