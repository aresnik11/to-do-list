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

  render() {
    return (
      <div className="App">
        <h1>To Do List App</h1>
        <NewItem addNewItem={this.addNewItem} />
        <ItemContainer items={this.state.items} />
      </div>
    );
  }
}

export default App;
