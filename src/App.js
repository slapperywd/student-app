import React, { Component } from 'react';
import { Button } from 'reactstrap';
import HeroesList from './components/HeroesList';
import Heroes from './mockdata/Heroes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message : 'Test message'
    };
  }

  showMessage(message){
    alert(message);
    console.log(message);
  }

  render() {
    
    return (
      <div className="App">
        <Button onClick={() => this.showMessage(this.state.message)} color="danger">danger</Button>
        <HeroesList heroes = {Heroes} ></HeroesList>
      </div>
    );
  }
}

export default App;
