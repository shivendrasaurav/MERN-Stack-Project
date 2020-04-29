import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { DISHES } from '../shared/dishes';

class Detail extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            selectedDish: null
        }
    }
    
    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }
    
    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(dish){
        if(dish!=null){
            const comments = [];
            const authors = [];

            for (var i=0; i<dish.noc; i++) {
                comments.push(<div>
                    <br></br>
                    <h5>{dish.comments[i].comment}</h5>
                    <h6>{dish.comments[i].author}<span>{dish.comments[i].date}</span></h6>
                </div>
                );
            }

            return(
                <Card>
                    <CardBody>
                        <CardTitle><h2>{"Comments"}</h2></CardTitle>
                        <CardText>
                            {comments}
                            {authors}
                        </CardText>
                    </CardBody>
                </Card>
            );
        }
    }

    
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });
    
        return (
            <div className="container">
                <br></br><br></br>
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                <div  className="col-12 col-md-5 m-1">
                  {this.renderDish(this.state.selectedDish)}
                </div>
                <div  className="col-12 col-md-5 m-1">
                    {this.renderComments(this.state.selectedDish)}
                </div>
              </div>
            </div>
        );
    }
}

export default Detail;