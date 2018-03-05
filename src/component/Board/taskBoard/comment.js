import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { DragSource } from 'react-dnd';
import ReactDOM from 'react-dom'

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


    render() { 
        const { comments, idComment, connectDragSource, isDragging, idTask } = this.props

        const commentElement = comments.filter(comment => comment.id === idComment)[0]

        return connectDragSource(
            <div key = {commentElement.id} className = "comment_container" style={{
                    opacity: isDragging ? 0.5 : 1,
                    fontSize: 15,
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    "height": '100%'
                  }}>
                  <div className = "comment_title">{commentElement.date}</div>
                  <div className = "comment_body">
                    <img className = "comment_body_avatar" src = {commentElement.img}/>
                    <span className = "comment_body_name"><b>{commentElement.name}</b></span>
                    <p className = "comment_body_text">{commentElement.text}</p>
                  </div>
                  <div className = "comment_footer">
                    <img className = "comment_footer_like" src ="./src/assets/img/gal.png" />
                    <img className = "comment_footer_del" src ="./src/assets/img/del.png" 
                    onClick = {this.deleteComment}/>
                  </div>

            </div>
        )
    }

}

export default connect(state => ({
  comments: state.comments
}), { })(Comment)