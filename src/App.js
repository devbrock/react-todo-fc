import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios';
import uuid from 'uuid';

export default function App() {
	//create an inital Todos object
	const initialTodos = [
		// {
		// 	id: uuid(),
		// 	title: 'learn react',
		// 	completed: false,
		// },
		// {
		// 	id: uuid(),
		// 	title: 'build app',
		// 	completed: false,
		// },
		// {
		// 	id: uuid(),
		// 	title: 'profit',
		// 	completed: false,
		// },
	];
	const [todos, setTodos] = useState(initialTodos);

	//fetch todos when the component mounts
	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
			.then(res => setTodos(res.data));
	}, []); //pass an empty array as the second parameter so that it does not rerender every time the component updates

	//Toggle Complete
	const markComplete = id => {
		let updatedTodos = todos.map(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	// Delete Todo
	const deleteTodo = id => {
		axios
			.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then(res => setTodos(todos.filter(todo => todo.id !== id)));

		// Delete Todo from UI
		// setTodos(todos.filter(todo => todo.id !== id));
	};

	//Add Todo
	const addTodo = title => {
		if (title === '') return;
		axios
			.post('https://jsonplaceholder.typicode.com/todos', {
				title,
				completed: false,
			})
			.then(res => {
				const newTodos = [
					...todos,
					{
						id: uuid(),
						title,
						completed: false,
					},
				];
				setTodos(newTodos);
			});
		//add todo to the UI
		// const newTodos = [
		// 	...todos,
		// 	{
		// 		id: uuid(),
		// 		title,
		// 		completed: false,
		// 	},
		// ];
		// setTodos(newTodos);
	};

	//Decalare a new state variable set to the initial todos
	return (
		<Router>
			<div className="App">
				<Header />
				<Route
					path="/"
					exact
					render={props => (
						<>
							<div className="container">
								<AddTodo addTodo={addTodo} />
								<Todos
									todos={todos}
									markComplete={markComplete}
									deleteTodo={deleteTodo}
								/>
							</div>
						</>
					)}
				/>
				<Route path="/about" component={About} />
			</div>
		</Router>
	);
}
