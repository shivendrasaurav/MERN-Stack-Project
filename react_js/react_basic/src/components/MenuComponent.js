import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import Detail from './DishdetailComponent'
import { DISHES } from '../shared/dishes';

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render(){
    return(
      <Detail dishes={this.state.dishes}/>
    );
  }

}

export default Menu;