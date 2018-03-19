import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { connect } from 'react-redux';
import { deleteBoard } from '../../AC';
import { removeBoardWS } from '../../AC/websocket';
import { NavLink } from 'react-router-dom';

class Board extends Component {
    constructor(props) {
        super(props)

        const {dispatch, socket} = this.props
            
        socket.on('remove board',(res)=>{
        dispatch(deleteBoard(res))
    })
    }

    static propTypes = {
        board: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string,
            task: PropTypes.array,
            date: PropTypes.string,
        })
    }

    render () {
        const { title, id, date, socket } = this.props.board;

        return (
            <NavLink to = {`/board/${id}`} style = {{
                textDecoration: "none"
            }}>
                <div className = "boards">
                    <h5 className = "boardsTitle">{title}</h5>
                    <button type="button" 
                        className="close" 
                        aria-label="Close" 
                        onClick = {this.handleDeleteBoard}>
                        <span aria-hidden="true" style = {{ color: "#FF0000" }}>&times;</span>
                    </button>
                    <span className = "boardsDate">{date}</span>
                </div>
            </NavLink>
        );
    }


    handleDeleteBoard = (ev) => {
        ev.preventDefault();
        const { board, deleteBoard, socket, dispatch } = this.props;
        dispatch(removeBoardWS(board.id, socket));
    }
}

export default connect()(Board);
