import {todolistsReducer} from './todolists-reducer';
import {v1} from 'uuid';
import {FilterValuesType, TodolistType} from '../App';
import {
    AddTodolistActionType,
    ChangeTodolistFilterActionType,
    ChangeTodolistTitleActionType,
    RemoveTodolistActionType
} from "./ActionsType";


export const RemoveTodolistAC = (todolistId: string): RemoveTodolistActionType => {
    return {type: 'REMOVE-TODOLIST', id: todolistId}
}

export const AddTodolistAC = (newTodolistTitle: string): AddTodolistActionType => {
    return {type: 'ADD-TODOLIST', title: newTodolistTitle}
}

export const ChangeTodolistTitleAC = (todolistId: string, newTodolistTitle: string): ChangeTodolistTitleActionType => {
    return {type: 'CHANGE-TODOLIST-TITLE' as const, id: todolistId, title: newTodolistTitle}
}
export const ChangeTodolistFilterAC = (todolistId: string, newFilter: FilterValuesType): ChangeTodolistFilterActionType => {
    return {type: 'CHANGE-TODOLIST-FILTER' as const, id: todolistId, filter: newFilter}
}


test('correct todolist should be removed', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();
    let todolistId3 = v1();

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"},
        {id: todolistId3, title: "What to do", filter: "all"}
    ]

    const endState = todolistsReducer(startState, RemoveTodolistAC(todolistId1))

    expect(endState.length).toBe(2);
    expect(endState[0].id).toBe(todolistId2);
    expect(endState[1].id).toBe(todolistId3);
});


test('correct todolist should be added', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let newTodolistTitle = "New Todolist";

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const endState = todolistsReducer(startState, AddTodolistAC(newTodolistTitle))

    expect(endState.length).toBe(3);
    expect(endState[2].title).toBe(newTodolistTitle);
});


test('correct todolist should change its name', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let newTodolistTitle = "New Todolist";

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const endState = todolistsReducer(startState, ChangeTodolistTitleAC(todolistId2, newTodolistTitle));

    expect(endState[0].title).toBe("What to learn");
    expect(endState[1].title).toBe(newTodolistTitle);
});


test('correct filter of todolist should be changed', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let newFilter: FilterValuesType = "completed";

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]


    const endState = todolistsReducer(startState, ChangeTodolistFilterAC(todolistId2, newFilter));

    expect(endState[0].filter).toBe("all");
    expect(endState[1].filter).toBe(newFilter);
});

