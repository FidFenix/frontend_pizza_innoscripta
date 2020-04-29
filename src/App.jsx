import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/home-page/home-page-component';
import { Switch, Route } from 'react-router-dom';
import HeaderComp from './components/header/header.component';
import FooterComp from './components/footer/footer.component';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser:null
    }
  }
  render() {
    return(
      <div>
        <HeaderComp currentUser = {this.state.currentUser}></HeaderComp>
        <Switch>
          <Route exact path='/' component={HomePage}/>
        </Switch>
        <FooterComp/>
      </div>
    )
  }
}

export default App;