import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { connect } from 'react-redux';
import { changeBoardsState, addBoard } from '../../../AC';
import { addBoardWS } from '../../../AC/websocket';


class ActiveCreateBoards extends Component {
constructor(props) {
    super(props)

    const {dispatch, socket} = this.props

    socket.on('add board',(res)=>{
        console.log(res)
        dispatch(addBoard(res.payload.name))
    })

    this.state = {
        boardsName: '',
        alertState: false
    }

}  

    render () {
        const { isOpen,socket } = this.props;
        const { alertState } = this.state;
        if (!isOpen) return null;
        return (
            <div>
                <h6>Название:</h6>

                <from className = "boardsCreatesForm">
                    <input type = "text"
                        value = {this.state.boardsName}
                        onChange = {this.handleBoardsNameChange}
                        className = "form-control"
                    />
                    {alertState ? <h7 className = "alertError">Введите название</h7> : null}
                    <input
                        type = "submit"
                        value = "создать"
                        onClick = {this.sendValue.bind(this, socket)}
                        className = "btn btn-dark"
                    />
                </from>

            </div>
        );
    }

    sendValue = (ev) => {
        const { dispatch, socket } = this.props;
        if (this.state.boardsName.length !== 0) {
            dispatch(addBoardWS(this.state.boardsName, socket)); //send board name for ws
            dispatch(changeBoardsState());
            //close activeCreateBoards menu
        } else {
            this.setState({
                alertState: !this.state.alertState
            });
        }
        this.setState({
            boardsName: ''
        });
    }

    handleBoardsNameChange = (ev) => {
        if (ev.target.value.length > 20) return;
        this.setState({
            boardsName: ev.target.value
        });
    }
}


export default connect((state) => ({
    isOpen: state.boards.isOpen
}))(ActiveCreateBoards);