import React from 'react'

export const App: React.FC = () => {
	const [count, setCount] = React.useState(0)
	const increment = () => setCount(prev => prev + 1)
	return (
		<>
			<div>{count}</div>
			<button onClick={increment}>+</button>
			<div>Hello world</div>
		</>
	)
}
