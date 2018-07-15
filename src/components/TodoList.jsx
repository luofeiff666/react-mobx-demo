import React from 'react'
import ActiveStatus from './ActiveStatus'
import ListConent from './ListConent'
import InputValue from './InputValue'
const TodoList = () => {
	return <div className="todo-list">
		<InputValue />
		<ListConent />
		<ActiveStatus />
	</div>
}
export default TodoList
