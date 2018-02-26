import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getBoards } from '../../../AC'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import Task from './Task.js'

class TaskList extends Component {
    static propTypes = {
      //from connect
      taskList: PropTypes.array,
      getBoards: PropTypes.func,
      idBoards: PropTypes.string
    }

    render() {
      const { boards, idBoards } = this.props

       const taskList = boards.filter( board => board.id === idBoards )
      
        return (
            <div>
              <ul>
                { taskList[0].task.map(id => <li key = {id}><Task id = {id} /></li>) }
              </ul>
            </div>
        )
    }

}

export default connect(state => ({
  boards: state.boards.boards
}),{ getBoards })(TaskList)