import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { DragSource } from 'react-dnd';
import ReactDOM from 'react-dom'
import { deleteComment } from '../../../AC'

export const ItemTypes = {
  COMMENT: 'comment'
};

const commentSource = {
  beginDrag({ idComment, idTask }) {
    return {
        idComment, idTask
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

@DragSource(ItemTypes.COMMENT, commentSource, collect)  

class Comment extends Component {
    static propTypes = {
        connectDragSource: PropTypes.func,
        connectDragPreview: PropTypes.func.isRequired,
        isDragging: PropTypes.bool,
        idComment: PropTypes.string,
        idTask: PropTypes.string,
        comments: PropTypes.array
    }

    state = {
      commentStatus: true
    }


    render() {
        const { comments, idComment, connectDragSource, isDragging, idTask } = this.props
        const {commentStatus} = this.state

        const commentElement = comments.filter(comment => comment.id === idComment)[0]
        if (!commentElement) return null

        return connectDragSource(
            <div key = {commentElement.id} className = {this.handleClassComment()} style={{
                    opacity: isDragging ? 0.5 : 1,
                    fontSize: 15,
                    fontWeight: 'bolds',
                    cursor: 'pointer',
                    "height": '100%'
                  }}> 
                 <div> 
                    <div className = "comment_title">{commentElement.date}</div>
                     <div className = "comment_body" onClick = {this.test }>
                      <img className = "comment_body_avatar" src = {commentElement.img}/>
                      <span className = "comment_body_name"><b>{commentElement.name}</b></span>
                      <p className = "comment_body_text">{commentElement.text}</p>
                    </div>
                    <div className = "comment_footer">
                      <img className = "comment_footer_like" src ="./src/assets/img/gal.png" 
                      onClick = {this.handleCommentStatus}/>
                      <img className = "comment_footer_del" src ="./src/assets/img/del.png" 
                      onClick = {this.deleteCommentary.bind(this, commentElement.id, idTask)}/>
                      
                    

                    </div>
                  </div>
            </div> 
        )
    }

    deleteCommentary(idComment, idTask) {
      this.props.deleteComment(idComment, idTask)
    }

    handleCommentStatus = (ev) => {
      ev.preventDefault()
      this.setState({
        commentStatus: !this.state.commentStatus
      })
    }

    handleClassComment() {
      const { commentStatus } = this.state
      return commentStatus ? "comment_container" : "comment_container_complited" 
    }

}

export default connect(state => ({
  comments: state.comments
}), { deleteComment })(Comment)