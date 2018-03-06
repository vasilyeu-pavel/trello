import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import { connect } from 'react-redux'
import { deleteBoard } from '../../AC'
import { Link } from 'react-router-dom'

class Board extends Component {
    static propTypes = {
        board: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string,
            task: PropTypes.array
        })
    }

    render() {
        const { title, id , date} = this.props.board

        return (
            <Link to = {`/board/${id}`}>
                <div className = "boards">
                        <h5 className = "boardsTitle">{title}</h5>
                    <img 
                    src ="./src/assets/img/del.png"
                    className = "boadsExit" 
                    onClick = { this.handleDeleteBoard }
                    />
                    <span className = "boardsDate">{date}</span>
                </div>
            </Link>     
        )
    }


    handleDeleteBoard = (ev) => {
        ev.preventDefault()
        const { board, deleteBoard } = this.props
        deleteBoard(board.id)
    }   

}

export default connect(null, { deleteBoard })(Board)