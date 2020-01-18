import React from 'react'

const ToDoItem = (props) => {
    return (
        <div>
            <h3>
                {props.item}
                &nbsp;&nbsp;&nbsp;
                <span role="img" aria-label="checkmark" onClick={() => props.completeItem(props.item)}>☑️</span>
                &nbsp;&nbsp;
                <span role="img" aria-label="x-button" onClick={() => props.removeItem(props.item)}>❌</span>
            </h3>
        </div>
    )
}

export default ToDoItem