import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreateBoards from '../createBoards/index';
import './style.css';
import { connect } from 'react-redux';
import { getBoards } from '../../AC';
import Board from './Board';

class BoardsList extends Component {
    static propTypes = {
        //from connect
        boards: PropTypes.array
    };

    render () {
        const { boards, select } = this.props;
        if (!boards) return null;

        const boardElement = boards
            .filter(board => {
                if (!select) return true;
                if (!select.length) return true;
                return !!select.find(one => one.value === board.id);
            })
            .map((board) =>
                (<li key = {board.id}>
                    <Board
                        board = {board}
                        id = {board.id}
                    />
                </li>));
        return (

            <ul style = {{ display: "inline-flex" }}>
                {boardElement}
                <li><CreateBoards /></li>
            </ul>

        );
    }
}

export default connect(state => ({
    boards: state.boards.boards,
    select: state.select
}), { getBoards })(BoardsList);
