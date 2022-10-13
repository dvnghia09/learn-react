import { useReducer } from "react";

// Định nghĩa giá trị mặc đinh
const initState = 10;

// Định nghĩa action
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

// Reduce
const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error('Invalid action')
    }
}

function Content() {
    const [state, setState] = useReducer(reducer, initState)

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={() => setState(UP_ACTION)} >CỘng</button>
            <button onClick={() => setState(DOWN_ACTION)} >Trừ</button>
        </div>
    );
}

export default Content;