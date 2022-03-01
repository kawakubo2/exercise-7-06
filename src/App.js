import React, { Component } from 'react';
import './App.css';
import Animal from './Animal';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    etails: [
        {
          name: 'Tiger',
          number: 3890,
          endangered: true,
          photo: 'https://haru-idea.jp/images/tiger.jpg',
          donation: 100
        },
        {
          name: 'Brown Bear',
          number: 200000,
          endangered: false,
          photo: 'https://source.unsplash.com/c8XlAc1akIU/400x300',
          donation: 10
        },
        {
          name: 'Red Panda',
          number: 10000,
          endangered: true,
          photo: 'https://source.unsplash.com/2zYHKx8jtvU/400x300',
          donation: 50       
        }
      ]
    }
  }
  render() {
    const details = this.state.details;
    return (
      <Animal details={details}>
        Endangered Animal
      </Animal>
    );
  }
}

export default App;
