import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddTaskMenu from './AddTaskMenu';
import './style.css';
import { connect } from 'react-redux';
import { changeTaskMenuState } from '../../../AC';

class addTaskButton extends Component {
	static propTypes = {
	    //from connect
	    isOpen: PropTypes.bool,
	    changeTaskMenuState: PropTypes.func,
	    //from props
	    idBoards: PropTypes.string
	}

	render () {
	    const { isOpen, changeTaskMenuState, idBoards } = this.props;

	    return (
	        <div style = {{
	            display: "-webkit-box",
	            padding: "6px"

	        }}>
	            <button type="button" className="btn btn-secondary"
	                onClick = {changeTaskMenuState}><b>+</b></button>
	            {isOpen ? <AddTaskMenu idBoards = {idBoards}/> : null}
	        </div>
	    );
	}
}

export default connect((state) => ({
    isOpen: state.task.isOpen
}), { changeTaskMenuState })(addTaskButton);
