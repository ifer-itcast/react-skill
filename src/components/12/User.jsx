import React, {Component} from 'react';

export default class User extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            user: null
        };
    }
    async componentDidMount() {
        const res = await fetch('https://randomuser.me/api/');
        const user = await res.json();
        this.setState({
            loading: false,
            user
        });
    }
    render() {
        if(this.state.loading) {
            return (
                <div>loading...</div>
            )
        } else {
            return (
                <div>{this.state.user.results[0].email}</div>
            )
        }
    }
}