import React from 'react'
import classes from './App.module.scss'
import { Link, Outlet } from 'react-router-dom'
import ReactIcon from '@/assets/react.svg'

export const App: React.FC = () => {
	const [count, setCount] = React.useState(0)
	const increment = () => setCount(prev => prev + 1)
	return (
		<div className={classes.container}>
			<ReactIcon className={classes.icon} width={120} height={120}  />
			<div>{count}</div>
			<Link to='/about'>About</Link>
			<Link to='/shop'>Shop</Link>
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
			<Outlet />
		</div>
	)
}
