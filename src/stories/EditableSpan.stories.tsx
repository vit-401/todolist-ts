import React from 'react'
import {Meta, Story} from "@storybook/react";
import {Task, TaskPropsType} from "../Task";
import {action} from "@storybook/addon-actions";
import {EditableSpan, EditableSpanPropsType} from "../EditableSpan";


export default {
    title: 'addItemForm',
    component: EditableSpan,
    argTypes: {
        onClick: {
            description: 'Editable Span from clicked'
        }
    }
} as Meta;
const onChangeCallback = action('changed inside Span')


const Template: Story<EditableSpanPropsType> = (args) => <EditableSpan {...args}/>

const baseArgs = {
    value: 'HTML',
    onChange: onChangeCallback
}

export const EditableSpanExample = Template.bind({});
EditableSpanExample.args = {
    ...baseArgs
}

// export const AddItemFormExample = Template.bind({});
// AddItemFormExample.args = {
//     addItem: action('Button inside form clicked')
// }

