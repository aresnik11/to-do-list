import React from 'react';
import './App.css';
import NewItem from './NewItem';
import ItemContainer from './ItemContainer';

class App extends React.Component {
  state = {
    items: []
  }

  addNewItem = (item) => {
    this.setState({
      items: [...this.state.items, item]
    })
  }

  removeItem = (item) => {
    let copyItems = [...this.state.items]
    let newItems = copyItems.filter(stateItem => stateItem !== item)
    this.setState({
      items: newItems
    })
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
