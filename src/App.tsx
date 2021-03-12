import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
export type todoListType = Array<{
    id: string,
    title: string
    filter: FilterValuesType
}>
export type changeFilterType = (value: FilterValuesType, todoListId: string) => void

function App() {

    // let [tasks, setTasks] = useState([

    // ]);
    function removeTodolist(id: string) {
        setTodoLists(todoLists.filter(tl => tl.id !== id))
        delete tasks[id]
        setTasks({...tasks})
    }

    function removeTask(id: string, todolistsId: string) {
        let todolistTasks = tasks[todolistsId]

        tasks[todolistsId] = todolistTasks.filter(t => t.id !== id);
        setTasks({...tasks});
    }

    function addTask(title: string, todolistsId: string) {
        let task = {id: v1(), title: title, isDone: false};
        let todolistTasks = tasks[todolistsId]
        tasks[todolistsId] = [task, ...todolistTasks]
        setTasks({...tasks});
    }

    function changeStatus(taskId: string, isDone: boolean, todolistsId: string) {
        let todolistTasks = tasks[todolistsId]
        let task = todolistTasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
            setTasks({...tasks});
        }
    }


    let todolistId1 = v1();
    let todolistId2 = v1();


    let [todoLists, setTodoLists] = useState<todoListType>([
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ])

    let [tasks, setTasks] = useState<{ [todolistId: string]: Array<TaskType> }>({
        [todolistId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "node.js", isDone: false},
        ],
        [todolistId2]: [
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: true},
            {id: v1(), title: "GraphQL", isDone: false},
        ]
    })
    const changeFilter: changeFilterType = (value, todoListId) => {
        let todolist = todoLists.find(tl => tl.id === todoListId);
        if (todolist) {
            todolist.filter = value;
            setTodoLists([...todoLists])
        }
    }


    return (
        <div className="App">
            {

                todoLists.map(tl => {
                    let allTodolistTasks = tasks[tl.id];
                    let tasksForTodolist = allTodolistTasks

                    if (tl.filter === "active") {
                        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false);
                    }
                    if (tl.filter === "completed") {
                        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true);
                    }
                    return <Todolist title={tl.title}
                                     removeTodolist={removeTodolist}
                                     key={tl.id}
                                     id={tl.id}
                                     tasks={tasksForTodolist}
                                     removeTask={removeTask}
                                     changeFilter={changeFilter}
                                     addTask={addTask}
                                     changeTaskStatus={changeStatus}
                                     filter={tl.filter}
                    />
                })
            }
        </div>
    );
}

export default App;
