import React from 'react';
import PropTypes from 'prop-types';

const User = props => {
	const { user, onDeleteClick } = props;
	console.log('rendered~~~~');
	return (
		<li>
			<input type="button" value="Delete" onClick={() => onDeleteClick(user.id)} />
			{user.name}
		</li>
	);
};

User.propTypes = {
	user: PropTypes.object.isRequired,
	onDeleteClick: PropTypes.func.isRequired
};

export default React.memo(User);
