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
            <Link to = {`/board/${id}`}>
                <div className = "boards">
                        <h6 className = "boardsTitle">{title}</h6>
                    <span 
                    className = "boadsExit" 
                    onClick = { this.handleDeleteBoard }
                    >x</span> 
                </div>
            </Link>     
        )
    }


    handleDeleteBoard = (ev) => {
        ev && ev.preventDefault && ev.preventDefault()
        const { board, deleteBoard } = this.props
        deleteBoard(board.id)
    }

}

export default connect(null, { deleteBoard })(Board)