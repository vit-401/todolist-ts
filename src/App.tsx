import React from 'react';
import './App.css';
import TodoList from "./components/TodoList";

export type TasksType = {
    id: number,
    title: string,
    isDone: boolean
}

function App() {
    const tasksOne: Array<TasksType> = [
        {id: 1, title: 'Html', isDone: true},
        {id: 2, title: 'Css', isDone: true},
        {id: 3, title: 'React', isDone: true},
    ]
    const tasksTwo: Array<TasksType> = [
        {id: 1, title: 'MILK', isDone: true},
        {id: 2, title: 'BREAD', isDone: true},
        {id: 3, title: 'MEAT', isDone: true},
    ]
    return (
        <div className="App">
            <TodoList title={'title1'} tasks={tasksOne}/>
            <TodoList title={'title2'} tasks={tasksTwo}/>

        </div>
    );
}

export default App;


