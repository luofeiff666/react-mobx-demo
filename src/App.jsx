import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './components/TodoList'
import { hot } from 'react-hot-loader'

class App extends React.Component {
	render() {
		return (
			<div>
				<TodoList />
			</div>
		)
	}
}
// const Root = hot(module)(App)
ReactDOM.render(<App />, document.getElementById('root'))
