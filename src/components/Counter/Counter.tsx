import { useState } from 'react'

interface CounterProps {
    initialState: number
}

export enum CHANGE {
    INCREMENT="INCREMENT",
    DECREMENT="DECREMENT"
}

const Counter = ({ initialState }: CounterProps) => {
    const [count, setCount] = useState(initialState)

    const changeCount = (change: CHANGE) => {
        if(change === CHANGE.INCREMENT) {
            setCount(prev => prev + 1)
        } else if(change === CHANGE.DECREMENT) {
            setCount(prev => prev - 1)
        }
    }

    return (
        <>
            <p>Counter</p>
            <div>
                <button title={CHANGE.INCREMENT} onClick={() => changeCount(CHANGE.DECREMENT)}>-</button>
                <p title='count'>{count}</p>
                <button title={CHANGE.DECREMENT} onClick={() => changeCount(CHANGE.INCREMENT)}>+</button>
            </div>
        </>
    )
}

export default Counter