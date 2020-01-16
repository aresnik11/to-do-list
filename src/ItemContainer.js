import React from 'react'
import ToDoItem from './ToDoItem'

const ItemContainer = (props) => {
    console.log(props)
    const makeItems = () => {
        return props.items.map(item => <ToDoItem key={item} item={item} removeItem={props.removeItem} />)
    }

    return (
        <div>
            <h1>To Do</h1>
            {makeItems()}
        </div>
    )
}

export default ItemContainer