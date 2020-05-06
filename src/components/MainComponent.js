// This component will be acting as a sudo containder component
import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom'

class Main extends Component {

  render() {

    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={Home} />
          <Redirect to='/home' />
        </Switch>
        <Footer/>
        
      </div>
    );
  }

}

export default Main;