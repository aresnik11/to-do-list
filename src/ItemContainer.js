import React from 'react'
import ToDoItem from './ToDoItem'

class ItemContainer extends React.Component {
    makeItems = () => {
        return this.props.items.map(item => <ToDoItem key={item} item={item} /> )
    }

    render() {
        return (
            <div>
                <h1>To Do</h1>
                {this.makeItems()}
            </div>
        )
    }
}

export default ItemContainer