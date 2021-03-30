import React from 'react'
import {Meta, Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import AppWithRedux from "../AppWithRedux";
import {ReduxStoreProviderDecorator} from "./decorators/ReduxStoreProviderDecorator";


export default {
    title: 'Todolist/AppWithRedux',
    component: AppWithRedux,
    decorators: [ReduxStoreProviderDecorator]
} as Meta;


const Template: Story = (args) => <AppWithRedux{...args}/>


export const AppWithReduxExample = Template.bind({});
AppWithReduxExample.args = {}

// export const AddItemFormExample = Template.bind({});
// AddItemFormExample.args = {
//     addItem: action('Button inside form clicked')
// }

