import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import { connect } from 'react-redux'
import { changeBoardsState, addBoard } from '../../../AC'

class ActiveCreateBoards extends Component {
    static propTypes = {
        //from connect
        isOpen: PropTypes.bool,
        changeBoardsState: PropTypes.func, 
        addBoard: PropTypes.func,
    };

    state = {
        boardsName: '',
        alertState: false,
    }

    render() {
        const {isOpen, changeBoardsState, addBoard} = this.props
        const { alertState } = this.state
        if (!isOpen) return null
        return (
                <div>
                    <h6>Boards name:</h6>
                    <from>
                        <input type = "text" 
                        value = {this.state.boardsName} 
                        onChange = {this.handleBoardsNameChange}
                        className = "form-control"
                        />
                        {alertState ? <h7 className = "alertError">Plz enter boards name</h7> : null}
                        <input 
                        type = "submit" 
                        value = "Create"
                        onClick = {this.sendValue}
                        className = "btn btn-primary"
                        />
                    </from>
                    
                </div>    
        )
    }

    sendValue = (ev) => {
        const { changeBoardsState, addBoard } = this.props
        const { alertState } = this.state
        if (this.state.boardsName.length !== 0) {
            addBoard(this.state.boardsName) //send board name for reducer
            changeBoardsState()             //close activeCreateBoards menu
        }
        else {
            this.setState({
                alertState: !this.state.alertState
            })
        }
        this.setState({
            boardsName: '',
        })
    }   

    handleBoardsNameChange = (ev) => {
        if (ev.target.value.length > 20) return    
        this.setState({
            boardsName: ev.target.value,
        })
    }
        
}

export default connect((state) => ({
    isOpen: state.boards.isOpen
}), { changeBoardsState, addBoard })(ActiveCreateBoards)