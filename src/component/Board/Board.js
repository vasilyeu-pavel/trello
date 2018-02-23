import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import { connect } from 'react-redux'
import { deleteBoard } from '../../AC'
import { Link, Route } from 'react-router-dom'

class Board extends Component {
    static propTypes = {
        board: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string,
            task: PropTypes.array
        })
    }

    render() {
        const { title, id } = this.props.board
        
        return (
                <div className = "boards">
                    <Link to = {`/board/${id}`}>
                        {title}
                    </Link>
                    <span 
                    className = "boadsExit" 
                    onClick = { this.handleDeleteBoard }
                    >x</span> 
                </div>   
        )
    }

    handleDeleteBoard = (ev) => {
        ev && ev.preventDefault && ev.preventDefault()
        const { board, deleteBoard } = this.props
        deleteBoard(board.id)
    }

}

export default connect(null, { deleteBoard })(Board)