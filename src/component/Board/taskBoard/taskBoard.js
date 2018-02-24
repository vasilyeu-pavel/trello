import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AddTaskButton from './addTaskButton'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import { getBoards } from '../../../AC'
import Task from './task.js'
import './style.css'

class taskBoard extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        boards: PropTypes.array
    }

    render() {
        const { id, boards } = this.props

        if (!boards.length) return null
        const taskBoardElement = boards.filter( board => board.id === id )

        return (
            <div>    
                <div className="card bg-light mb-3" style={{"max-width": 18 + "rem"}}>

                  <div className="card-header" 
                  style = {{"text-align": "center"}}>
                  {taskBoardElement[0].title}
                  </div>

                </div>
                <div>
                    <ul className = "boardTaskList">
                        <li><AddTaskButton /></li>
                        <li><Task /></li>
                    </ul>
                </div>  
            </div>    
        )
    }

}

export default connect((state => ({
    boards: state.boards.boards
})), { getBoards })(taskBoard)