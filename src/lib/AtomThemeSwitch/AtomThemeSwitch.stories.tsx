import type { Meta, StoryObj } from '@storybook/react';
import { AtomThemeSwitch } from './AtomThemeSwitch';

const meta: Meta<typeof AtomThemeSwitch> = {
    component: AtomThemeSwitch
}

export default meta;

type Story = StoryObj<typeof AtomThemeSwitch>

export const Default: Story = {
    args: {
        children: 'Switch Theme to dark'
    }
}

export const Dark: Story = {
    args: {
        children: 'Dark theme set'
    }
}