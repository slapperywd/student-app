import React, { Component } from 'react';
import HeroListItem from './HeroListItem';

class HeroesList extends Component {
    render() {
        return (
            <div class="heroes-list container">
                <div class="row">
                    {this.props.heroes.map(heroItem =>
                        <HeroListItem hero={heroItem}></HeroListItem>
                    )}
                </div>
            </div>
        )
    }
}

export default HeroesList;

