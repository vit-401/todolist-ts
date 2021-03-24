import {TasksStateType} from '../App';
import {v1} from 'uuid';
import {AddTodolistActionType, RemoveTodolistActionType} from "./todolists-reducer";

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

type ActionsType =
    AddTodolistActionType
    | ChangeTaskStatusActionType
    | AddTaskActionType
    | RemoveTaskActionType
    | ChangeTaskTitleActionType
    | RemoveTodolistActionType


export const tasksReducer = (state: TasksStateType, action: ActionsType) => {
    const copyState = {...state}
    let todolistTasks
    switch (action.type) {
        case 'REMOVE-TASK':
            todolistTasks = copyState[action.todolistId];
            copyState[action.todolistId] = todolistTasks.filter(i => i.id !== action.taskId)
            return copyState
        case 'ADD-TASK':
            todolistTasks = copyState[action.todolistId]
            let newTask = {id: v1(), title: action.title, isDone: false}
            copyState[action.todolistId] = [newTask, ...todolistTasks]
            return copyState
        case 'CHANGE-TASK-STATUS':
            todolistTasks = copyState[action.todolistId]
            copyState[action.todolistId] = todolistTasks.map(i => {
                if (i.id === action.taskId) {
                    return {...i, isDone: action.status}
                }
                return i
            })
            return copyState
        case 'CHANGE-TASK-TITLE':
            todolistTasks = copyState[action.todolistId]
            copyState[action.todolistId] = todolistTasks.map(i => {
                if (i.id === action.taskId) {
                    return {...i, title: action.title}
                }
                return i
            })
            return copyState

        case 'ADD-TODOLIST':
            copyState[action.todolistId] = []
            return copyState

        case 'REMOVE-TODOLIST':
            delete copyState[action.id]
            return copyState
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

