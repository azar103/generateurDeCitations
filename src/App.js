import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Generateur from './Generateur';
import citations from './citations.js';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      index: 0
    }
    this.handleGenerate = this.handleGenerate.bind(this);
    this.handleTwitt = this.handleTwitt.bind(this);
  }
  _handleRandom(max){
     return Math.floor(Math.random()*Math.floor(max));
  }
  handleGenerate(){
    this.setState({
        index: this._handleRandom(citations.length)
    });
  }

    handleTwitt(){
       window.open("https://twitter.com/intent/tweet?text="+citations[this.state.index].citation,
        'twitter',"menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600");
         }
  render() {

    return (
      <div class="container">
      <div class="wrapper"> 
           <h1>Generateur De Citations</h1>
           <Generateur generate={this.handleGenerate} citation={this.state.index} twitt={this.handleTwitt} />
      </div>
      </div>
    );
  }
}

export default App;
