import axios from 'axios'

export type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}
type CreateTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    data: {
        item: TodolistType
    }
}

type ResponseType<D> = {
    resultCode: number
    messages: Array<string>
    data: D
}


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '024c72d0-5556-46a2-a9a9-4eba6c2facdb'
    }
})

export const todolistAPI = {
    getTodolists: () => {
        return instance.get<Array<TodoType>>('todo-lists/')
            .then(res => res)
    },
    updateTodolist(todolistId: string, title: string) {
        debugger
        return instance.put<CommonResponseType<TodoType>>(`todo-lists/${todolistId}`, {title: title})
            .then(res => res)
    },

    createTodolist: (title: string) => {
        return instance.post<CommonResponseType<{}>>(`todo-lists/`, {title})
            .then((res) => res)
    },
    deleteTodolist: (todolistId: string) => {
        return instance.delete<CommonResponseType<{}>>(`todo-lists/${todolistId}`)
            .then(res => res)
    },
}


type TodoType = {
    id: string
    addedDate: string
    order: number
    title: string
}

type CommonResponseType<T> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: T
}