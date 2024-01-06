import React from 'react'
import classes from './App.module.scss'

export const App: React.FC = () => {
	const [count, setCount] = React.useState(0)
	const increment = () => setCount(prev => prev + 1)
	return (
		<div className={classes.container}>
			<div>{count}</div>
			<button className={classes.btn} onClick={increment}>
				+
			</button>
			<h1>Состав сборки:</h1>
			<ul>
				<li>Webpack</li>
				<li>TypeScript</li>
				<li>React</li>
				<li>SCSS</li>
			</ul>
			<p>Happy coding!</p>
		</div>
	)
}
