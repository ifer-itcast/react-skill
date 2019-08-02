import React, { Component } from 'react';
import User from './User';

export default class BindEvent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [{ id: 1, name: 'xxx' }, { id: 2, name: 'yyy' }, { id: 3, name: 'zzz' }]
		};
	}
	deleteUser = id => {
		this.setState(prevState => ({
			users: prevState.users.filter(user => user.id !== id)
		}));
	};
	render() {
		return (
			<div>
				<ul>
					{this.state.users.map(user => <User key={user.id} user={user} onDeleteClick={this.deleteUser} />)}
				</ul>
			</div>
		);
	}
}
