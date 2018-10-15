import React, { Component } from 'react';
import HeroListItem from './HeroListItem';

class HeroesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            heroes: this.props.heroes
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });   
    }

    handleSubmit(event) {
       // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        var newHero = {
            id : 55,// this.heroes[this.heroes.length-1].id + 1,
            name : this.state.value
        };

        var heroesList = this.state.heroes;
        console.log(heroesList);
        heroesList.push(newHero);

        this.setState({heroes : heroesList});
        this.setState({value : ''});
    }

    render() {
        return (
            <div>
                <div class="heroes-list container">
                    <div class="row">
                        {this.state.heroes.map(heroItem =>
                            <HeroListItem hero={heroItem}></HeroListItem>
                        )}
                    </div>
                </div>
                {/* the code below should not be present here. A good pracitse is to create a separate com */}
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default HeroesList;

