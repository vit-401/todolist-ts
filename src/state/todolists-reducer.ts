import {useState} from "react";
import {TodolistType} from "../App";
import {v1} from "uuid";
import {
    AddTodolistActionType,
    ChangeTodolistFilterActionType,
    ChangeTodolistTitleActionType,
    RemoveTodolistActionType
} from "./ActionsType";



type ActionType =
    RemoveTodolistActionType
    | AddTodolistActionType
    | ChangeTodolistTitleActionType
    | ChangeTodolistFilterActionType

export const todolistsReducer = (state: Array<TodolistType>, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            let removedTodolist = state.filter(i => i.id != action.id)
            return [...removedTodolist]

        case 'ADD-TODOLIST':
            let newTodolist = {id: v1(), title: action.title, filter: 'all'}
            return [...state, newTodolist]

        case 'CHANGE-TODOLIST-TITLE':
            let findedTodolist = state.find(i => i.id === action.id)
            if (findedTodolist) {
                findedTodolist.title = action.title
            }
            return [...state]

        case 'CHANGE-TODOLIST-FILTER':
            let todolist = state.find(i => i.id === action.id)
            if (todolist) {
                todolist.filter = action.filter
            }
            return [...state]

        default:
            throw new Error("I don't understand this type")
    }
}