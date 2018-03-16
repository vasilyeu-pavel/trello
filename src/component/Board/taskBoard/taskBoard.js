import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddTaskButton from './addTaskButton';
import { connect } from 'react-redux';
import TaskList from './TaskList.js';
import './style.css';


class taskBoard extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        boards: PropTypes.array
    }

    render () {
        const { id, boards, socket } = this.props;

        if (!boards.length) return null;

        const taskBoardElement = boards.filter(board => board.id === id);

        return (
            <div className="container">
                <div className="taskNavBar">

                    <div className="card-header">
                        {taskBoardElement[0].title}
                    </div>
                    <AddTaskButton socket = {socket} idBoards = {id}/>

                </div>
                <div>
                    <div className="container">
                        <div><TaskList idBoards = {id} socket = {socket} match = {this.props.match}/></div>
                    </div>
                </div>

            </div>
        );
    }
}

export default connect((state => ({
    boards: state.boards.boards
})))(taskBoard);
