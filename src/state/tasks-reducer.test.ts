import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from './tasks-reducer';
import {TasksStateType} from '../App';
import {addTodolistAC, removeTodolistAC} from "./todolists-reducer";

let startState: TasksStateType
beforeEach(() => {
    startState = {
        "todolistId1": [
            {id: "1", title: "CSS", isDone: false},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: false}
        ],
        "todolistId2": [
            {id: "1", title: "bread", isDone: false},
            {id: "2", title: "milk", isDone: true},
            {id: "3", title: "tea", isDone: false}
        ]
    };
})


test('correct task should be deleted from correct array', () => {
    const endState = tasksReducer(startState, removeTaskAC("3", "todolistId1"))

    expect(endState).toEqual({
        "todolistId1": [
            {id: "1", title: "CSS", isDone: false},
            {id: "2", title: "JS", isDone: true},
        ],
        "todolistId2": [
            {id: "1", title: "bread", isDone: false},
            {id: "2", title: "milk", isDone: true},
            {id: "3", title: "tea", isDone: false}

        ]
    });
    expect(startState === endState).toBe(false)

});
test('correct task should be added to correct array', () => {

    const action = addTaskAC("juce", "todolistId2");

    const endState = tasksReducer(startState, action)

    expect(endState["todolistId1"].length).toBe(3);
    expect(endState["todolistId2"].length).toBe(4);
    expect(endState["todolistId2"][0].id).toBeDefined();
    expect(endState["todolistId2"][0].title).toBe("juce");
    expect(endState["todolistId2"][0].isDone).toBe(false);
    expect(startState['todolistId2'] === endState['todolistId2']).toBe(false)

})
test('status of specified task should be changed', () => {
    const action = changeTaskStatusAC("2", false, "todolistId2");
    const action2 = changeTaskStatusAC("3", true, "todolistId2");

    const endState = tasksReducer(startState, action)
    const endState2 = tasksReducer(startState, action2)

    expect(endState['todolistId2'][1].isDone).toBe(false);
    expect(endState2['todolistId2'][2].isDone).toBe(true);

});
test('title of specified task should be changed', () => {
    const action = changeTaskTitleAC("1", 'Changed', "todolistId2");
    const endState = tasksReducer(startState, action)
    const action2 = changeTaskTitleAC("3", 'Changed123', "todolistId2");
    const endState2 = tasksReducer(startState, action2)

    expect(endState[`todolistId2`][0].title).toBe('Changed')
    expect(endState2[`todolistId2`][2].title).toBe('Changed123')
})

test('new array should be added when new todolist is added', () => {
    const action = addTodolistAC("new todolist");
    const endState = tasksReducer(startState, action)

    const keys = Object.keys(endState);
    const newKey = keys.find(k => k != "todolistId1" && k != "todolistId2");
    if (!newKey) {
        throw Error("new key should be added")
    }

    expect(keys.length).toBe(3);
    expect(endState[newKey]).toEqual([]);
});


test('array should be removed from todolist', () => {
    const action = removeTodolistAC("todolistId2");
    const endState = tasksReducer(startState, action)

    expect(endState['todolistId2']).toBeUndefined();
    expect(startState['todolistId2']).toBeDefined();
});