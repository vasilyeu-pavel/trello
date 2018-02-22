import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import {connect} from 'react-redux'
import {changeBoardsState} from '../../../AC'

class ActiveCreateBoards extends Component {
    static propTypes = {
        isOpen: PropTypes.bool
    };

    state = {
        boardsName: '',
    }

    render() {
        if (!this.props.isOpen) return null
        return (
                <div>
                    <h6>Boards name:</h6>
                    <from>
                        <input type = "text" 
                        value = {this.state.boardsName} 
                        onChange = {this.handleBoardsNameChange}/>
                        <input 
                        type = "submit" 
                        value = "Create"
                        onClick = {this.props.changeBoardsState}
                        />
                    </from>
                    
                </div>    
        )
    }

    handleBoardsNameChange = (ev) => {
        if (ev.target.value.length > 10) return

        this.setState({
            boardsName: ev.target.value
        })
    }
    
}

export default connect((state) => ({
    isOpen: state.boards.isOpen
}), { changeBoardsState })(ActiveCreateBoards)