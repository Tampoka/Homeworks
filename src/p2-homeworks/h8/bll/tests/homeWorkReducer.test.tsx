import {homeWorkReducer} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: UserType[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Bob', age: 3},
        {_id: 1, name: 'Alex', age: 66},
        {_id: 2, name: 'Nicolay', age: 16},
        {_id: 3, name: 'Victor', age: 44},
        {_id: 4, name: 'Eugene', age: 40},
        {_id: 5, name: 'Ann', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})

    expect(newState).toEqual(
        [
            {_id: 1, name: 'Alex', age: 66},
            {_id: 5, name: 'Ann', age: 55},
            {_id: 0, name: 'Bob', age: 3},
            {_id: 4, name: 'Eugene', age: 40},
            {_id: 2, name: 'Nicolay', age: 16},
            {_id: 3, name: 'Victor', age: 44},
        ]
    )

    //
    // const result = [
    //     1,
    //     3,
    //     // ...
    // ].filter((el, i) => el === newState[i]._id)
    // expect(result.length).toBe(newState.length)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})

    expect(newState).toEqual(
        [
            {_id: 3, name: 'Victor', age: 44},
            {_id: 2, name: 'Nicolay', age: 16},
            {_id: 4, name: 'Eugene', age: 40},
            {_id: 0, name: 'Bob', age: 3},
            {_id: 5, name: 'Ann', age: 55},
            {_id: 1, name: 'Alex', age: 66},
        ]
    )
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18})

    expect(newState.length).toBe(4)
})
