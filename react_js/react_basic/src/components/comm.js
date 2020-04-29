import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { DISHES } from '../shared/dishes';

class Comments extends Component{

    constructor(props) {
        super(props);
        this.state = {
          dishes: DISHES[COMMENTS]
        };
      }
    
    render(){
        return(

        );
    }
}

export default Comments;