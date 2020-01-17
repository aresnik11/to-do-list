import React from 'react'

const ToDoItem = (props) => {
    let itemArr = props.item.split(" - ")
    let name = itemArr[0]
    let date = itemArr[1]
    return (
        <div>
            <h3>
                {date} - {name}
                &nbsp;&nbsp;&nbsp;
                <span role="img" aria-label="checkmark" onClick={() => props.completeItem(props.item)}>✅</span>
                &nbsp;&nbsp;
                <span role="img" aria-label="x-button" onClick={() => props.removeItem(props.item)}>❌</span>
            </h3>
        </div>
    )
}

export default ToDoItem