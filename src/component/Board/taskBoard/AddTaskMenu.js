import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { changeTaskMenuState, addTaskTitle } from '../../../AC';
//import { addTaskWS } from '../../../AC/websocket';
import { connect } from 'react-redux';

class AddTaskMenu extends Component {
  state = {
        taskName: '',
        errorPlaceHolder: 'Создать новый список'
  
  }
    static propTypes = {
        //from connect
        isOpen: PropTypes.bool,
        changeTaskMenuState: PropTypes.func,
        addTask: PropTypes.func,
        addTaskTitle: PropTypes.func,
        //from props
        idBoards: PropTypes.string
    }

    render () {
        const { errorPlaceHolder } = this.state;
        const { socket, changeTaskMenuState } = this.props

        return (
            <form onSubmit = {this.sendValue}>
                <input className="form-control"
                    type="text"
                    onInput = {this.toggleTaskName}
                    onBlur = {this.handleOpen.bind(this, changeTaskMenuState)}
                    id = "formGroupExampleInput"
                    placeholder={errorPlaceHolder}/>
            </form>

        );
    }

 handleOpen = function (func) {
     func();
 }


  sendValue = (e) => {
      e.preventDefault();
      const { idBoards, dispatch } = this.props;
      const { taskName } = this.state;

      if (!taskName || !taskName.length) {
          this.setState({
              errorPlaceHolder: 'вы ничего не ввели'
          });
          return null;
      }

      let name = this.state.taskName;

      dispatch(addTaskTitle(name, idBoards)); //send value for reducer
      dispatch(changeTaskMenuState());

      this.setState({
          errorPlaceHolder: 'Создать новый список'
      });
  }

  toggleTaskName = (ev) => {
      this.setState({
          taskName: ev.target.value
      });
  }
}

export default connect((state) => ({
    isOpen: state.task.isOpen
}))(AddTaskMenu);
