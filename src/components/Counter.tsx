import { useReducer } from "react";

const DECREMENT_TYPE = 'DECREMENT_VALUE';
const INCREMENT_TYPE = 'INCREMENT_VALUE';
const VALUE_TO_ADD_TYPE = 'VALUE_TO_ADD';
const ADD_TYPE = 'VALUE_ADD';

const reducer = (state, action) => {

    switch (action.type) {
        case DECREMENT_TYPE:
            return {
                ...state,
                count: state.count - 1
            }
        case INCREMENT_TYPE:
            return {
                ...state,
                count: state.count + 1
            }
        case VALUE_TO_ADD_TYPE:
            return {
                ...state,
                valueToAdd: action.payload
            }
        case ADD_TYPE:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0
            }
    }
}

const Counter = () => {

    const [state, dispatch] = useReducer(reducer,
        {
            count: 0,
            valueToAdd: 0
        })

    const handleChange = (e) => {
        dispatch({
            type: VALUE_TO_ADD_TYPE,
            payload: Number(e.target.value)
        });
    }

    const decrement = () => {
        dispatch({ type: DECREMENT_TYPE });
    }

    const increment = () => {
        dispatch({ type: INCREMENT_TYPE });
    }

    const addValue = () => {
        dispatch({ type: ADD_TYPE });
    }

    return (
        <div className="h-100 w-100 d-flex flex-column justify-content-center align-items-center mt-5 pt-5">
            <h1 className="display-2">This is your counter</h1>
            <h3>Count: {state.count}</h3>

            <div className="mt-3 d-flex gap-3">
                <button className="btn btn-primary" onClick={decrement}>-</button>
                <button className="btn btn-primary" onClick={increment}>+</button>
            </div>

            <div className="mt-4 d-flex gap-2 align-items-center">
                <input type="number" value={state.valueToAdd || ''} onChange={handleChange} />
                <button className="btn btn-success" onClick={addValue}>ADD</button>
            </div>
        </div>
    );
}

export default Counter;