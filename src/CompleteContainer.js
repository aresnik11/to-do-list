import React from 'react'
import CompleteItem from './CompleteItem'

const CompleteContainer = (props) => {
    const makeItems = () => {
        return props.completeItems.map(item => <CompleteItem key={item} item={item} />)
    }

    return (
        <div>
            <h1>Completed</h1>
            {makeItems()}
        </div>
    )
}

export default CompleteContainer