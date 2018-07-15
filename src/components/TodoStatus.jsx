import React from 'react'
import store from '../mobx'
import { observer } from 'mobx-react'
@observer
class TodoStatus extends React.Component {
	render() {
		const { selcetType, status } = store
		return (
			<div className="status-wrapper">
				<span
					onClick={() => {
						selcetType('all')
					}}
					className={`all ${status === 'all' ? 'active' : ''}`}>全部</span>
				<span
					onClick={() => {
						selcetType('unfinish')
					}}
					className={`unfinish ${status === 'unfinish' ? 'active' : ''}`}>
					未完成</span>
				<span
					onClick={() => {
						selcetType('finished')
					}}
					className={`finished ${status === 'finished' ? 'active' : ''}`}>
					已完成</span>
				<style>
					{
						`
						.status-wrapper {
							cursor: pointer;
						}
							.active{
								color : red;
							}
							`
					}
				</style>
			</div>
		)
	}
}

export default TodoStatus
