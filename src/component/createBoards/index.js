import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import ActiveCreateBoards from './ActiveCreateBoards'
import {connect} from 'react-redux'
import {changeBoardsState} from '../../AC'

class CreateBoards extends Component {
    static propTypes = {
        //from toggleOpen decorators
        isOpen: PropTypes.bool,
    };

    render() {
    	const { isOpen , changeBoardsState } = this.props
        return (
                <div className = "boards">
                    <div className = "boardsTitle" onClick = {changeBoardsState}>
                        {!isOpen ? <h5>Create new boards...</h5> : 
                            <h5 className = "activeTitleBoards">Create new boards:</h5>}
                    </div>
                    <div className = "boardsBody">
                        <ActiveCreateBoards />
                    </div>
                </div>    
        )
    }

}

export default connect((state) => ({
    isOpen: state.boards.isOpen
}), { changeBoardsState })((CreateBoards))