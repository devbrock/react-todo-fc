import React from 'react';

export default function About() {
	return (
		<div className="container">
			<h1>About This App</h1>
			<p>
				This is the TodoList app v.2.0.0. Based on{' '}
				<a
					href="https://youtu.be/sBws8MSXN7A"
					target="_blank"
					rel="noopener noreferrer"
				>
					Brad Traversey's 2019 Crash Course
				</a>
				, except written in all functional components!
				<br />
				<br />
				&copy; Brock Balducci 2020
			</p>
			<h4>React v.16.12.0.</h4>
		</div>
	);
}
