import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {
    let [title, setTitle] = useState("")

    function addTask() {
        props.addTask(title)
        setTitle('')
    }

    const onChengeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.charCode === 13 && addTask()
        console.log()
    }
    const onAllClickHandler = () => {
        props.changeFilter("all")
    }
    const onActiveClickHandler = () => {
        props.changeFilter("active")
    }
    const onCompletedClickHandler = () => {
        props.changeFilter("completed")
    }


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={onChengeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTask}>+
            </button>
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    const onRemoveTaskHandler = () => {
                        props.removeTask(t.id)
                    }
                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={onRemoveTaskHandler}>x
                            </button>
                        </li>
                    )
                })
            }
        </ul>
        <div>
            <button onClick={onAllClickHandler}>
                All
            </button>
            <button onClick={onActiveClickHandler}>
                Active
            </button>
            <button onClick={onCompletedClickHandler}>
                Completed
            </button>
        </div>
    </div>
}
