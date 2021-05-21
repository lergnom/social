import React from 'react';
import {Story, Meta} from '@storybook/react';
import {PostProfile} from "./PostProfile";

export default {
    title: 'Post Profile-Message',
    component: PostProfile,
    argTypes: {},
} as Meta;

const Template: Story = (args) => <PostProfile{...args} />;

export const BestFriendsComponent = Template.bind({});
BestFriendsComponent.args = {}



