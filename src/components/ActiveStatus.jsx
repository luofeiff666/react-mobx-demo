import React from 'react'
import store from '../mobx'
import { observer } from 'mobx-react'
import TodoStatus from './TodoStatus'
@observer
class ActiveStatus extends React.Component {
	render() {
		const { finishNum } = store
		return <div>
			待完成数量：{finishNum}
			<TodoStatus />
		</div>
	}
}
export default ActiveStatus
