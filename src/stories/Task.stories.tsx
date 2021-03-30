import React from 'react'
import {Meta, Story} from "@storybook/react";
import {Task, TaskPropsType} from "../Task";
import {action} from "@storybook/addon-actions";


export default {
    title: 'addItemForm',
    component: Task,
    argTypes: {
        onClick: {
            description: 'Button inside form clicked'
        }
    }
} as Meta;
const changeTaskStatusCallback = action('Status changed inside Task')
const changeTaskTitleCallback = action('Title changed inside Task')
const removeTaskCallback = action('Remove Button inside Task clicked')

const Template: Story<TaskPropsType> = (args) => <Task {...args}/>

const baseArgs = {
    changeTaskStatus: changeTaskStatusCallback,
    changeTaskTitle: changeTaskTitleCallback,
    removeTask: removeTaskCallback,
}

export const TaskIsNotDoneExample = Template.bind({});
TaskIsNotDoneExample.args = {
    ...baseArgs,
    task: {id: '1', isDone: true, title: 'JS'},
    todolistId: 'todolistId1'
}

// export const AddItemFormExample = Template.bind({});
// AddItemFormExample.args = {
//     addItem: action('Button inside form clicked')
// }

