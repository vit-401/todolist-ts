import React, {useEffect, useState} from "react";
import {NewComponent} from "./NewComponent";
import {todolistAPI} from "../API/todolist-api";
import axios from "axios";


export default {
    title: 'API',
    component: NewComponent
}
const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '024c72d0-5556-46a2-a9a9-4eba6c2facdb'
    }
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolists()
            .then(data => {
                setState(data)
            })
    }, [])

    return <NewComponent value={state}/>
}


export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.createTodolist('Some Toooooossssssssssssssss')
            .then(data => {
                setState(data)
            })
    }, [])

    return <NewComponent value={state}/>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const id = '5bab40a2-05df-4626-9090-d9408739b03b'

        todolistAPI.deleteTodolist(id)
            .then(data => {
                setState(data)
            })
    }, [])

    return <NewComponent value={state}/>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
            const id = '8e750573-55a8-469d-bd59-26ff3876401c'
            debugger
            todolistAPI.updateTodolist(id, 'Some TITLELLLLLL@@@@@@@@@@2222')
                .then(data => setState(data))
        }, []
    )

    return <NewComponent value={state}/>
}
