import React from 'react';
import PropTypes from 'prop-types';

export default function TodoItem({ todo, markComplete, deleteTodo }) {
	const { id, title, completed } = todo;

	const getStyle = () => {
		return {
			textDecoration: completed ? 'line-through' : 'none',
			cursor: 'pointer',
			marginLeft: '0.5rem',
		};
	};

	return (
		<div className="card grey lighten-4" style={{ padding: '1rem' }}>
			<span style={getStyle()} onClick={markComplete.bind(this, id)}>
				{title}
			</span>
			<button
				className=" red btn "
				style={{ marginLeft: '3rem' }}
				onClick={deleteTodo.bind(this, id)}
			>
				Delete
			</button>
		</div>
	);
}

//PropTypes
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	markComplete: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired,
};
