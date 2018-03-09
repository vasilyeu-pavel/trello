import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddTaskButton from './addTaskButton';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { getBoards } from '../../../AC';
import TaskList from './taskList.js';
import './style.css';


class taskBoard extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        boards: PropTypes.array
    }

    render () {
        const { id, boards } = this.props;

        if (!boards.length) return null;

        const taskBoardElement = boards.filter(board => board.id === id);

        return (
            <div>
                <div className="taskNavBar" style={{ maxWidth: 18 + "rem", display: 'flex' }}>

                    <div className="card-header">
                        {taskBoardElement[0].title}
                    </div>
                    <AddTaskButton idBoards = {id}/>

                </div>
                <div>
                    <ul className = "boardTaskList">
                        <li><TaskList idBoards = {id} match = {this.props.match}/></li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default connect((state => ({
    boards: state.boards.boards
})), { getBoards })(taskBoard);
