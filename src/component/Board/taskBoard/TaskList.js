import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getBoards } from '../../../AC';
import { connect } from 'react-redux';
import Task from './task.js';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class TaskList extends Component {
    static propTypes = {
        //from connect
        taskList: PropTypes.array,
        getBoards: PropTypes.func,
        idBoards: PropTypes.string,
        boards: PropTypes.array
    }

    render () {
        const { boards, idBoards } = this.props;

        const taskList = boards.filter(board => board.id === idBoards);

        return (
            <div>
                <div className = "row">
                    { taskList[0].task.map(id =>
                        (<div className = "card text-center"
                            style = {{ height: "100%", marginRight: "15px" }}
                            key = {id}>
                            <Task match = {this.props.match}
                                id = {id}
                                idBoard = {taskList[0].id}/>
                        </div>)
                    )}
                </div>
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(connect(state => ({
    boards: state.boards.boards
}), { getBoards })(TaskList));
