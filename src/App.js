import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth } from './firebase/firebase.utils';

import './App.css';

import HomePage from './pages/homepage/Homepage.comnent.jsx';
import ShopPage from './pages/shop/Shop.component.jsx';
import Header from './components/header/Header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-sign-up/Sign-in-sign-up.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header currentUser={this.state.currentUser} />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
              <Route path='/signin' component={SignInAndSignUpPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
