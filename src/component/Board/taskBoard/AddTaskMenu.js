import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { changeTaskMenuState, addTaskTitle } from '../../../AC'
import { connect } from 'react-redux'

class AddTaskMenu extends Component {

    static propTypes = {
      //from connect
      isOpen: PropTypes.bool,
      changeTaskMenuState: PropTypes.func,
      addTask: PropTypes.func,
      addTaskTitle: PropTypes.func,
      //from props
      idBoards: PropTypes.string,
    }

    state = {
      taskName: '',
      errorPlaceHolder: '',
    }

    render() {
      const { taskName, errorPlaceHolder } = this.state

        return (
        <div className = "addTaskMenu">
          <div className="form-group">
            <input type="text" 
            className="form-control" 
            id = "formGroupExampleInput" 
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
    const { addTaskTitle, idBoards, changeTaskMenuState } = this.props
    const { taskName } = this.state

    if (!taskName || !taskName.length) {
      this.setState({
        errorPlaceHolder: 'вы ничего не ввели'
      })
      return null
    }

    let val = this.state.taskName
    
    addTaskTitle(val, idBoards)     //send value for reducer
    changeTaskMenuState()

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
}), { addTaskTitle, changeTaskMenuState })(AddTaskMenu)