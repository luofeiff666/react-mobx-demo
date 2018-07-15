import React from 'react'
import store from '../mobx'
import { observer } from 'mobx-react'

@observer
class InputValue extends React.Component {
	state = {
		inputValue: ''
	}
	heandelChange(e) {
		this.setState({
			inputValue: e.target.value
		})
	}
	heandelSubmit() {
		const inputValue = this.state.inputValue
		if (!inputValue) return
		store.createTodos(this.state.inputValue)
		this.setState({
			inputValue: ''
		})
	}
	render() {
		return <div>
			<form onSubmit={(e) => {
				e.preventDefault()
				this.heandelSubmit()
			}}>
				<input value={this.state.inputValue} type="text" onChange={(e) => {
					this.heandelChange(e)
				}} />
			</form>
		</div>
	}
}
export default InputValue

