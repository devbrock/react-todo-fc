import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function AddTodo({ addTodo }) {
	const [newTodo, setNewTodo] = useState({ title: '' });

	const onChange = e => {
		setNewTodo({ [e.target.name]: e.target.value });
	};

	const onSubmit = e => {
		e.preventDefault();
		addTodo(newTodo.title);
		setNewTodo({ title: '' });
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					name="title"
					placeholder="What do you need to do?"
					value={newTodo.title}
					onChange={onChange}
					style={{ marginTop: '1rem' }}
				/>
				<button
					type="submit"
					value="Submit"
					className="btn cyan"
					style={{ marginBottom: '1rem' }}
				>
					Add Todo
				</button>
			</form>
		</>
	);
}

//PropTypes
AddTodo.propTypes = {
	addTodo: PropTypes.func.isRequired,
};
