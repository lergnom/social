import React from 'react';
import {Story, Meta} from '@storybook/react';
import {NewPost, NewPostProps} from "./NewPost";

export default {
    title: 'Post Profile-Message',
    component: NewPost,
    argTypes: {},
} as Meta;

const Template: Story<NewPostProps> = (args) => <NewPost{...args} />;

export const BestFriendsComponent = Template.bind({});
BestFriendsComponent.args = {}



