import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'
import { connect } from 'react-redux'
import { sendComment, handleDrop } from '../../../AC'
import './style.css'
import { DropTarget } from 'react-dnd';

const dropSource = {
    drop(props, monitor) {
        const comment = monitor.getItem(); // this item is being dragged
        props.handleDrop(comment.commentText, comment.idComment, comment.idTask, props.id);
        // const droppedItem = props.onDrop(monitor.getItem());

    },
 
}

function collect(connect, monitor) {
    return {
        // Call this function inside render()
        // to let React DnD handle the drag events:
        connectDropTarget: connect.dropTarget(),
        // You can ask the monitor about the current drag state:
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
        canDrop: monitor.canDrop(),
        itemType: monitor.getItemType()
    };
}

const ItemTypes = {
  COMMENT: 'comment'
};


@DropTarget(ItemTypes.COMMENT, dropSource, collect)

class Task extends Component {
    static propTypes = {
      id: PropTypes.string,
      task: PropTypes.array,
      sendComment: PropTypes.func

    }

    state = {
      commentText: ''
    }

    render() {
      const { tasks, id, comments, connectDropTarget } = this.props
      const { commentText } = this.state

      const taskSelected = tasks.filter(task => task.id === id)

        return connectDropTarget(
            <div className ="card bg-light mb-3" style={{"maxWidth": 18 + "rem"}}>
              <div className ="card-header" style = {{"textAlign": "center"}}>
                <b>{ taskSelected[0].title }</b>
              </div>
              <div className ="card-body">
                <form className ="form-group" onSubmit = {this.sendCommentText} style = {{"marginBottom": -1 + 'em'}}>
                  <input 
                  className = "form-control"
                  type="text"
                  value = { commentText }
                  onInput = { this.toggleCommentName }
                  placeholder = "введите комментарий"
                  />
                </form>
                <ul style = {{'display': 'inline'}}>

                  {taskSelected[0].comments.map(id => 
                    <li className = "commentElement" key = {id}>
                    <Comment idComment = {id} idTask = {taskSelected[0].id}/>
                    </li>
                    )}

                </ul>
              </div>
            </div>
        )
    }

  sendCommentText = (ev) => {
    ev.preventDefault()
    const { sendComment, tasks, id } = this.props
    const { commentText } = this.state

    if (!commentText || !commentText.length) return null

    const taskSelected = tasks.filter(task => task.id === id)
    const idTask = taskSelected[0].id

    sendComment(commentText, idTask)

    this.setState({
      commentText: '',
    })  
  }  

  toggleCommentName = (ev) => {
    let value = ev.target.value
    this.setState({
      commentText: ev.target.value
    })
  }



}

export default connect(state => ({
  tasks: state.task.task,
}), { sendComment, handleDrop })(Task)