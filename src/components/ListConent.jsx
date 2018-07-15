import React from 'react'
import store from '../mobx'
import { observer } from 'mobx-react'

@observer
class ListConent extends React.Component {
	state = {

	}
	filterTodo(todo, status) {
		switch (status) {
			case 'unfinish':
				return !todo.finished
				break;
			case 'finished':
				return todo.finished
				break;
			default:
				break;
		}
		return true
	}
	render() {
		const { todos, deleteTodos, status } = store
		return (
			<ul>
				{todos.map((todo) => this.filterTodo(todo, status) && (
					<li key={todo.id} >
						<span
							onClick={() => {
								todo.toggleActive()
							}}
							className={`text-content ${todo.finished ? `done` : ''}`}>
							{todo.title}
						</span>
						<span
							className="delete"
							onClick={(e) => {
								e.stopPropagation()
								deleteTodos(todo)
							}}>
							X
						</span>
					</li>
				))}
				<style>
					{`
							.done {
								text-decoration: line-through;
								color: #888;
							}
							li {
								font-size: 18px;
								line-height: 48px;
							}
							.text-content {
								display: inline-block;
								width: 200px;
								cursor: pointer;
							}
							.delete {
								margin - right: 30px;
								color: red;
								cursor: pointer;
							}
								`}
				</style>
			</ul>
		)
	}
}
export default ListConent
