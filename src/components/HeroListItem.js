import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class HeroesListItem extends Component {
    render() {
        return (
            <div class="hero col-sm-4">
                <Card>
                    <CardImg src='https://assets.imgix.net/hp/snowshoe.jpg?auto=compress&w=318&h=180&fit=crop' alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Hero id {this.props.hero.id}</CardTitle>
                        <CardSubtitle>{this.props.hero.id}</CardSubtitle>
                        <CardText>Hero name {this.props.hero.name}</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default HeroesListItem;