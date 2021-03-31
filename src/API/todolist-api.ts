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
    updateTodolist(todolistId: string, title: string) {
        return instance.put(`todo-lists/${todolistId}`, {title: title})
            .then(res => res)
    },
    getTodolists: () => {
        debugger
        return instance.get('todo-lists/')
            .then(res => res)
    },
    createTodolist: (title: string) => {
        return instance.post(`todo-lists/`, {title})
            .then((res) => res)
    },
    deleteTodolist: (todolistId: string) => {
        debugger
        return instance.delete(`todo-lists/${todolistId}`)
            .then(res => res)
    }
}

