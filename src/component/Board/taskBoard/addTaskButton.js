import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AddTaskMenu from './AddTaskMenu'
import './style.css'
import { connect } from 'react-redux'
import { changeTaskMenuState } from '../../../AC'

class addTaskButton extends Component {
	static propTypes = {
		//from connect
		isOpen: PropTypes.bool,
		changeTaskMenuState: PropTypes.func,
		//from props
		idBoards: PropTypes.string
    }

	render() {
		const { isOpen, changeTaskMenuState, idBoards } = this.props

		return (
			<div className = "BoardAddTaskButton">
				<div onClick = { changeTaskMenuState } className = "taskMenuTitle">
					<h5>Добавить задачу</h5>
				</div>
				{isOpen ? <AddTaskMenu idBoards = { idBoards }/> : null}
			</div>
			)
	}
}

export default connect((state) => ({
	isOpen: state.task.isOpen
}), { changeTaskMenuState })(addTaskButton)