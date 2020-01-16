import React from 'react';
import './App.css';
import NewItem from './NewItem';
import ItemContainer from './ItemContainer';

class App extends React.Component {
  state = {
    items: []
  }

  componentDidMount() {
    // grabbing items from localStorage
    const items = localStorage.getItem("items")
    if (items) {
      this.setState({
        items: items.split(",")
      })
    }
  }

  addNewItem = (item) => {
    // adding new item to items array in state
    this.setState({
      items: [...this.state.items, item]
    }, () => localStorage.setItem("items", this.state.items))
  }

  removeItem = (item) => {
    let copyItems = [...this.state.items]
    let newItems = copyItems.filter(stateItem => stateItem !== item)
    this.setState({
      items: newItems
    }, () => localStorage.setItem("items", this.state.items))    
  }

  render() {
    return (
      <div className="App">
        <h1>To Do List App</h1>
        <NewItem addNewItem={this.addNewItem} />
        <ItemContainer items={this.state.items} removeItem={this.removeItem} />
      </div>
    );
  }
}

export default App;
