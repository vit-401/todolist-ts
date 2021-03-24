import {TasksStateType} from '../App';
import {v1} from 'uuid';
import {AddTodolistActionType} from "./todolists-reducer";

export type RemoveTaskActionType = {
    type: 'REMOVE-TASK',
    taskId: string
    todolistId: string
}
export type AddTaskActionType = {
    type: 'ADD-TASK',
    title: string
    todolistId: string
}
export type ChangeTaskStatusActionType = {
    type: 'CHANGE-TASK-STATUS',
    taskId: string
    status: boolean
    todolistId: string
}
export type ChangeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE',
    taskId: string,
    title: string,
    todolistId: string

}

type ActionsType =AddTodolistActionType| ChangeTaskStatusActionType | AddTaskActionType | RemoveTaskActionType | ChangeTaskTitleActionType


export const tasksReducer = (state: TasksStateType, action: ActionsType) => {
    let todolistTasks
    switch (action.type) {
        case 'REMOVE-TASK':
            todolistTasks = state[action.todolistId];
            state[action.todolistId] = todolistTasks.filter(i => i.id !== action.taskId)
            return {...state}
        case 'ADD-TASK':
            todolistTasks = state[action.todolistId]
            let newTask = {id: v1(), title: action.title, isDone: false}
            state[action.todolistId] = [newTask, ...todolistTasks]
            console.log({...state})
            return {...state}
        case 'CHANGE-TASK-STATUS':
            todolistTasks = state[action.todolistId]
            state[action.todolistId] = todolistTasks.map(i => {
                if (i.id === action.taskId) {
                    return {...i, isDone: action.status}
                }
                return i
            })
            return {...state}
        case 'CHANGE-TASK-TITLE':
            todolistTasks = state[action.todolistId]
            state[action.todolistId] = todolistTasks.map(i => {
                if (i.id === action.taskId) {
                    return {...i, title: action.title}
                }
                return i
            })
            return {...state}

        case 'ADD-TODOLIST':
            todolistTasks = state[action.todolistId]
            state[action.todolistId] = []
            console.log({...state})
            return {...state}
        default:
            throw new Error("I don't understand this type")
    }
}


export const RemoveTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return {type: 'REMOVE-TASK', taskId, todolistId}
}
export const AddTaskAC = (title: string, todolistId: string): AddTaskActionType => {
    return {type: 'ADD-TASK', title, todolistId}
}
export const ChangeTaskStatusAC = (taskId: string, status: boolean, todolistId: string): ChangeTaskStatusActionType => {
    return {type: 'CHANGE-TASK-STATUS', taskId, status, todolistId}
}
export const ChangeTaskTitleAC = (taskId: string, title: string, todolistId: string): ChangeTaskTitleActionType => {
    return {type: 'CHANGE-TASK-TITLE', taskId, title, todolistId}
}
