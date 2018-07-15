import {
	observable,
	computed,
	action
}

from 'mobx'
class Todo {
	id = Math.random()
	@observable title = ''
	@observable finished = false
	@action.bound toggleActive() {
		this.finished = !this.finished
	}
	constructor(title) {
		this.title = title
	}
}

class Store {
	@observable todos = []
	@observable status = 'all'
	@action.bound selcetType(type) {
		this.status = type
	}
	@action.bound createTodos(title) {
		this.todos.unshift(new Todo(title))
	}
	@action.bound deleteTodos(todo) {
		this.todos.remove(todo)
	}
	@computed get finishNum() {
		return this.todos.filter((todo) => {
			return !todo.finished
		}).length
	}
}

const store = new Store()

export default store
