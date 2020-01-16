import React from 'react';
import './App.css';
import NewItem from './NewItem';
import ItemContainer from './ItemContainer';
import CompleteContainer from './CompleteContainer';

class App extends React.Component {
  state = {
    items: [],
    completeItems: []
  }

  componentDidMount() {
    // grabbing items from localStorage
    const items = localStorage.getItem("items")
    const completeItems = localStorage.getItem("completeItems")
    if (items) {
      this.setState({
        items: items.split(",")
      })
    }
    if (completeItems) {
      this.setState({
        completeItems: completeItems.split(",")
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

  completeItem = (item) => {
    let copyItems = [...this.state.items]
    let newItems = copyItems.filter(stateItem => stateItem !== item)
    this.setState({
      items: newItems,
      completeItems: [...this.state.completeItems, item]
    }, () => {
      localStorage.setItem("items", this.state.items)
      localStorage.setItem("completeItems", this.state.completeItems)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>To Do List App</h1>
        <NewItem addNewItem={this.addNewItem} />
        <div className="main-grid">
          <ItemContainer items={this.state.items} removeItem={this.removeItem} completeItem={this.completeItem} />
          <CompleteContainer completeItems={this.state.completeItems} />
        </div>
      </div>
    );
  }
}

export default App;
