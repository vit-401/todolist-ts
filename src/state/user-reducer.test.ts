import {userReduser} from "./user-reducer";

test('user reduser shold increment only age', () => {
    const startState = {age: 20, childrenCount: 2, name: 'Vitaliy'};

    const endState = userReduser(startState, {type: 'INCREMENT-AGE'})

    expect(endState.age).toBe(21)
    expect(endState.childrenCount).toBe(2)
})
test('user reducer should increment only childrenCount', () => {
    const startState = {age: 20, childrenCount: 2, name: 'Vitaliy'}

    const endState = userReduser(startState, {type: 'INCREMENT-CHILDREN-COUNT'})

    expect(endState.childrenCount).toBe(3)
    expect(endState.age).toBe(20)
    expect(endState.name).toBe('Vitaliy')
})


test('user reducer should change name of user', () => {
    const startState = {name: 'Vitaliy', age: 20, childrenCount: 2};
    const newName = 'Dimych';
    const endState = userReduser(startState, {type: 'CHANGE-NAME', newName: newName})

    expect(endState.name).toBe(newName);
});

