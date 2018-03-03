import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { DragSource } from 'react-dnd';

export const ItemTypes = {
  COMMENT: 'comment'
};

const commentSource = {
  beginDrag({ idComment, idTask, comments }) {
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

        const commentElement = comments.filter(comment => comment.id === idComment)
        const text = commentElement[0].text
        return connectDragSource(
            <div style={{
                    opacity: isDragging ? 0.5 : 1,
                    fontSize: 15,
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}>
              {text}
            </div>
        )
    }

}

export default connect(state => ({
  comments: state.comments
}), { })(Comment)