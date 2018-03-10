import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { connect } from 'react-redux';
import { deleteBoard } from '../../AC';
import { NavLink } from 'react-router-dom';

class Board extends Component {
    static propTypes = {
        board: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string,
            task: PropTypes.array
        })
    }

    render () {
        const { title, id, date } = this.props.board;

        return (
            <NavLink to = {`/board/${id}`} style = {{
                "textDecoration": "none",
            }}>
                <div className = "boards">
                    <h5 className = "boardsTitle">{title}</h5>
                    <button type="button" className="close" aria-label="Close" onClick = {this.handleDeleteBoard}>
                          <span aria-hidden="true" style = {{"color": "#FF0000"}}>&times;</span>
                    </button> 
                    <span className = "boardsDate">{date}</span>
                </div>
            </NavLink>
        );
    }


    handleDeleteBoard = (ev) => {
        ev.preventDefault();
        const { board, deleteBoard } = this.props;
        deleteBoard(board.id);
    }
}

export default connect(null, { deleteBoard })(Board);
