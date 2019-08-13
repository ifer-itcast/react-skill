import React, {Component} from 'react';

export default class Joke extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            jokes: null
        };
    }
    async componentDidMount() {
        const res = await fetch('http://api.icndb.com/jokes/random/3');
        const jokes = await res.json();
        this.setState({
            loading: false,
            jokes
        });
    }
    render() {
        if(this.state.loading) {
            return <div>loading...</div>
        } else {
            return (
                <div>
                    {
                        this.state.jokes.value.map(joke => (
                            <p key={joke.id}>{joke.joke}</p>
                        ))
                    }
                </div>
            );
        }
    }
}