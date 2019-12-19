import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export default function Todos({ todos, markComplete, deleteTodo }) {
	return (
		<>
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					todo={todo}
					markComplete={markComplete}
					deleteTodo={deleteTodo}
				/>
			))}
		</>
	);
}

//Proptypes
Todos.propTypes = {
	todos: PropTypes.array.isRequired,
	markComplete: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired,
};
