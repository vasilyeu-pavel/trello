import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AddTaskMenu from './AddTaskMenu'
import './style.css'
import { connect } from 'react-redux'
import { changeAddTaskMenuState } from '../../../AC'

class addTaskButton extends Component {
	static propTypes = {
		isOpen: PropTypes.bool,
		changeAddTaskMenuState: PropTypes.func
    }

	render() {
		const { isOpen, changeAddTaskMenuState } = this.props

		return (
			<div className = "BoardAddTaskButton">
				<div onClick = { changeAddTaskMenuState }><h5>Добавить задачу</h5></div>
				{isOpen ? <AddTaskMenu /> : null}
			</div>
			)
	}
}

export default connect((state) => ({
	isOpen: state.task.isOpen
}), { changeAddTaskMenuState })(addTaskButton)