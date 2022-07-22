import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LogOut } from '@test_kit_3/icons';
import { color } from '@test_kit_3/styles';
import PopoverElement from './PopoverElement';

export default {
    title: '5.Popup/Popover Element',
    component: PopoverElement,
    argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof PopoverElement>;

const Template: ComponentStory<typeof PopoverElement> = (args) => (
    <PopoverElement {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Logout = Template.bind({});
Logout.args = {
    icon: <LogOut fill={color.red} />,
    iconColor: color.red,
    text: 'Logout',
    textColor: color.red,
};
