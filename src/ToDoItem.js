import React from 'react'

class ToDoItem extends React.Component {
    render() {
        return (
            <h3>{this.props.item}</h3>
        )
    }
}

export default ToDoItem