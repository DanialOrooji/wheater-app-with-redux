import React from 'react'
import { useSelector } from 'react-redux';
const initState={
    numb : 0
}
export default function stateReducer(state = initState, action) {
    console.log(action);
    switch (action.type) {
        case 'todos/todoAdded': 
            return {
                numb : state.numb++
            }
        // case 'todos/Minus':            
        //     if(state.numb == 0){
        //         return state.numb--
        //     }
        //     return state.numb--
        // case 'todos/todoDeleted':
        //     state.numb=0
        //     return state.numb
        default:
            return state
    }
}
export const todoAdded = () => ({
    type: 'todos/todoAdded'
})

export const todoMinus = () => ({
    type: 'todos/todoMinus'
})

export const todoDeleted = () => ({
    type: 'todos/todoDeleted'
})
export const CounterComponent = () => {
    const counter = useSelector((state) => state.numb)
    return counter
  }