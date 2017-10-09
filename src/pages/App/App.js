import React, { Component } from 'react';
import './styles/App.css';
import StockTable from '../../components/StockTable';

let object = {};
let socket;

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }

    // create a new socket connection
    socket = new WebSocket('ws://stocks.mnet.website');
  }

  componentDidMount() {
    // open socket connection
    socket.addEventListener('open', function (event) {
        console.log('connection established');
    });

    // Listen for messages
    socket.addEventListener('message', event => this.handleSocketData(event.data));
  }

  componentWillUnmount() {
    socket.removeEventListener('message', event => this.handleSocketData(event.data));
  }

  // for serializing that data from the socket
  serialize(data) {
    data.forEach(item => {
      if (object[item[0]]) {
        // if the key is already present just push the value to the array.
        object[item[0]].unshift(item[1])
      } else {
        // if the key is not present add a new object to the array.
        object[item[0]] = [item[1]];
      }
    })
    return this.handleData(object);
  }

  handleSocketData(eventData) {
    let _data = JSON.parse(eventData)
    this.setState({
      data: this.serialize(_data)
    })
  }

  // helper function for formatting the data in required format
  handleData(data) {
    let tempArr = [];
    for (var key in data) {
      let obj = {};
      if (data.hasOwnProperty(key)) {
        obj.name = key;
        obj.value = data[key];
      }
      tempArr.push(obj)
    }
    return tempArr;
  }

  render() {
    // show loader until you get the data instead of a blank screen
    if (!this.state.data) {
      return (
        <div>loading ...</div>
      );
    }
    return (
      <div className='AppContainer'>
        <div className='AppHeader'>
        Live stocks data from Media.net
        </div>
        <div className='AppContent'>
          <StockTable data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
