import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/home-page/home-page-component';

import { Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

import HeaderComp from './components/header/header.component';
import FooterComp from './components/footer/footer.component';
import ProductsPage from './pages/products-page/products-page.component';
import PayPage from './pages/pay-page/pay-page.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import PrivateRouteHoC from './components/private-route/private-route.component';
import { authenticationService } from './services/user/authentication.service';

class App extends Component {

  constructor() {
    super();
    this.state = {
      currentUser: authenticationService.currentUserValue
    }
  }

  componentDidMount() {
    const { setCurrentUser } = this.props;

    authenticationService.currentUser.subscribe(userAuth => {
      if(userAuth) {
        setCurrentUser({id: userAuth, ...userAuth});
      }else{
        setCurrentUser(null);
      }
    });
  }

  render() {
    return(
      <div>
        <HeaderComp currentUser = {this.state.currentUser}></HeaderComp>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <PrivateRouteHoC path='/products' component={ProductsPage} ></PrivateRouteHoC>
          <PrivateRouteHoC path='/payout' component={PayPage} ></PrivateRouteHoC>
          <Route exact path='/signin' render={()=>this.props.currentUser? (<Redirect to='/products'/>):(<SignInAndSignUpPage/>)}></Route>
        </Switch>
        <FooterComp/>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect( mapStateToProps, mapDispatchToProps )(App);