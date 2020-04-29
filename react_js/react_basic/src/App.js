import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/menucomp';
import { DISHES } from './shared/dishes';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <Menu dishes={this.state.dishes} />
      );
  }
}

export default App;
