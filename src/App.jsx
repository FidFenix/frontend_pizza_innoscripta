import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/home-page/home-page-component';
import { Switch, Route, Redirect } from 'react-router-dom';
import HeaderComp from './components/header/header.component';
import FooterComp from './components/footer/footer.component';
import ProductsPage from './pages/products-page/products-page.component';
import PayPage from './pages/pay-page/pay-page.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';

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
          <Route exact path='/' component={HomePage}/>s
          <Route path='/products' component={ProductsPage}/>
          <Route exact path='/payout' component={PayPage} />
          <Route exact path='/signin' render={()=>this.props.currentUser? (<Redirect to='/'/>):(<SignInAndSignUpPage/>)}></Route>
        </Switch>
        <FooterComp/>
      </div>
    )
  }
}

export default App;
