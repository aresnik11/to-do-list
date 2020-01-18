import React from 'react'

class NewItem extends React.Component {
    state = {
        value: ""
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.value !== "") {
            this.props.addNewItem(this.state.value)
            this.setState({
                value: ""
            })
        }
        else {
            alert("Please enter an item")
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" className="input" name="value" placeholder="To Do" value={this.state.value} onChange={this.onInputChange} />
                <input type="submit" className="btn" value="Add" />
            </form>
        )
    }
}

export default NewItem