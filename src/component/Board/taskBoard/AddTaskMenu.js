import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { changeAddTaskMenuState, addTask } from '../../../AC'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'

class AddTaskMenu extends Component {

    static propTypes = {
      isOpen: PropTypes.bool,
      changeAddTaskMenuState: PropTypes.func,
      addTask: PropTypes.func,
    }

    state = {
      taskName: '',
      errorPlaceHolder: '',
    }

    render() {
      const { changeAddTaskMenuState } = this.props
      const { taskName, errorPlaceHolder } = this.state

        return (
        <div className = "addTaskMenu">
          <div className="form-group">
            <input type="text" 
            className="form-control" 
            id="formGroupExampleInput" 
            value = { taskName }
            onInput = { this.toggleTaskName }
            placeholder = { errorPlaceHolder }
            />
            <button type="button" className="btn btn-light"
            onClick = { this.sendValue }
            >Создать</button>
          </div>
         </div> 
        )
    }

  sendValue = (e) => {
    e.preventDefault()
    const { changeAddTaskMenuState } = this.props
    const { taskName } = this.state

    if (!taskName || !taskName.length) {
      this.setState({
        errorPlaceHolder: 'вы ничего не ввели'
      })
      return null
    }
    
    addTask(this.state.taskName) //send value for reducer
    changeAddTaskMenuState()     //close menu

      this.setState({
        errorPlaceHolder: ''
      })
  }

  toggleTaskName = (ev) => {
    let value = ev.target.value
    this.setState({
      taskName: ev.target.value
    })
  }


}

export default connect((state) => ({
  isOpen: state.task.isOpen
}), { changeAddTaskMenuState, addTask })(AddTaskMenu)