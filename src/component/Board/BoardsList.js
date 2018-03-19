import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreateBoards from '../createBoards/index';
import './style.css';
import { connect } from 'react-redux';
import Board from './Board';

class BoardsList extends Component {
    static propTypes = {
        //from connect
        boards: PropTypes.array,
        select: PropTypes.array
    };

    render () {
        const { boards, select, socket } = this.props;
        if (!boards) return null;

        const boardElement = boards
            .filter(board => {
                if (!select) return true;
                if (!select.length) return true;
                return !!select.find(one => one.value === board.id);
            })
            .map((board) =>
                (<div className="col-md-3" key = {board.id}>
                    <Board
                        board = {board}
                        id = {board.id}
                        socket = {socket}
                    />
                </div>));
        return (

            <div className="row">
                {boardElement}
                <div className="col-md-3"><CreateBoards socket = {socket}/></div>
            </div>

        );
    }
}

export default connect(state => ({
    boards: state.boards.boards,
    select: state.select
}))(BoardsList);
