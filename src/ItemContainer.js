import React from 'react'
import ToDoItem from './ToDoItem'

const ItemContainer = (props) => {
    const makeItems = () => {
        return props.items.map(item => <ToDoItem key={item} item={item} removeItem={props.removeItem} completeItem={props.completeItem} />)
    }

    return (
        <div>
            <h1>To Do</h1>
            {makeItems()}
        </div>
    )
}

export default ItemContainer