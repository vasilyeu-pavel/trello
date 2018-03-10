import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './comment';
import { connect } from 'react-redux';
import { sendComment, handleDrop } from '../../../AC';
import './style.css';
import { DropTarget } from 'react-dnd';

const dropSource = {
    drop (props, monitor) {
        const comment = monitor.getItem();
        props.handleDrop(comment.idComment, comment.idTask, props.id);
    }

};

function collect (connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
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

    render () {
        const { tasks, id, comments, connectDropTarget } = this.props;
        const { commentText } = this.state;

        const taskSelected = tasks.filter(task => task.id === id);

        return connectDropTarget(
            <div>
                <div className ="card-header" style = {{ textAlign: "center" }}>
                    <b>{ taskSelected[0].title }</b>
                </div>
                <div className ="card-body">
                    <form className ="form-group" onSubmit = {this.sendCommentText}>
                        <input
                            className = "form-control"
                            type="text"
                            value = {commentText}
                            onInput = {this.toggleCommentName}
                            placeholder = "введите комментарий"
                        />
                    </form>
                    <div>
                        {taskSelected[0].comments.map(id =>
                            (<div key = {id}>
                                <Comment idComment = {id} idTask = {taskSelected[0].id} match = {this.props.match}/>
                    </div>)
                        )}

                    </div>
                </div>
            </div>
        );
    }

  sendCommentText = (ev) => {
      ev.preventDefault();
      const { sendComment, tasks, id } = this.props;
      const { commentText } = this.state;

      if (!commentText || !commentText.length) return null;

      const taskSelected = tasks.filter(task => task.id === id);
      const idTask = taskSelected[0].id;

      sendComment(commentText, idTask);

      this.setState({
          commentText: ''
      });
  }

  toggleCommentName = (ev) => {
      let value = ev.target.value;
      this.setState({
          commentText: value
      });
  }
}

export default connect(state => ({
    tasks: state.task.task
}), { sendComment, handleDrop })(Task);
