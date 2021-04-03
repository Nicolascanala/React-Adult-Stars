import { useState } from 'react'


const Footer = () => {
    const [count, setCount] = useState(0)

    return (
        <div className={'footer'}>
            <h2 style={{color: 'white'}}>How many adult stars have you earned today? {count}</h2>
            <button style={{cursor: 'pointer', padding: 10, background: 'yellow'}} onClick={() => setCount(count + 1)} >+</button>
            <button style={{cursor: 'pointer', padding: 10, background: 'yellow'}} onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}

export default Footer
