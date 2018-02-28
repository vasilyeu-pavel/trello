import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'
import { connect } from 'react-redux'
import { sendComment } from '../../../AC'
import './style.css'

class Task extends Component {
    static propTypes = {
      id: PropTypes.string,
      task: PropTypes.array,
      sendComment: PropTypes.func

    }

    state = {
      commentName: ''
    }

    render() {
      const { tasks, id  } = this.props
      const { commentName } = this.state
      const taskTitle = tasks.filter(task => task.id === id)

        return (
            <div className ="card bg-light mb-3" style={{"maxWidth": 18 + "rem"}}>
              <div className ="card-header" style = {{"textAlign": "center"}}>
                <b>{ taskTitle[0].title }</b>
              </div>
              <div className ="card-body">
                <form className ="form-group" onSubmit = {this.sendCommentName} style = {{"marginBottom": -1 + 'em'}}>
                  <input 
                  className = "form-control"
                  type="text"
                  value = { commentName }
                  onInput = { this.toggleCommentName }
                  placeholder = "введите комментарий"
                  />
                </form>
                <ul style = {{'display': 'inline'}}>

                  <li className = "commentElement"><Comment /></li>

                </ul>
              </div>
            </div>
        )
    }

  sendCommentName = (ev) => {
    ev.preventDefault()
    const { sendComment } = this.props
    const { commentName } = this.state
    if (!commentName || !commentName.length) return null

    sendComment(commentName)

    this.setState({
      commentName: '',
    })  
  }  

  toggleCommentName = (ev) => {
    let value = ev.target.value
    this.setState({
      commentName: ev.target.value
    })
  }



}

export default connect(state => ({
  tasks: state.task.task
}), { sendComment })(Task)