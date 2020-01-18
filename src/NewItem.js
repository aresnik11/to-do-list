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
        this.props.addNewItem(this.state.value)
        this.setState({
            value: ""
        })
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