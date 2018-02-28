import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import {connect} from 'react-redux'
import {getBoards} from '../../AC'
import Board from './Board'

class BoardsList extends Component {
    static propTypes = {
        //from connect
        boards: PropTypes.array
    };

    render() {
        const { boards } = this.props
        console.log(boards);
        if (!boards) return null

        const boardElement = boards
        .map((board) => 
            <li key = {board.id}>
                <Board 
                 board = {board}
                 id = {board.id}
                />
            </li>)
        return (

                <ul>
                    {boardElement}
                </ul> 
 
        )
    }

}

export default connect(state => ({
    boards: state.boards.boards
}), { getBoards })(BoardsList)