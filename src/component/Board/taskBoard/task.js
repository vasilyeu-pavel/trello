import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './comment';
import { connect } from 'react-redux';
import { sendComment, handleDrop } from '../../../AC';
import { addCommentWS } from '../../../AC/websocket'
import './style.css';
import { DropTarget } from 'react-dnd';

const dropSource = {
    drop (props, monitor) {
        const comment = monitor.getItem();
        props.dispatch(handleDrop(comment.idComment, comment.idTask, props.id));
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
        tasks: PropTypes.array,
        sendComment: PropTypes.func,
        comments: PropTypes.array,
        connectDropTarget: PropTypes.func

    }

    state = {
        commentText: ''
    }

    componentDidMount() {
      this.props.socket.on('add comment', (data) => {
        console.log(data)
        return this.setState({
          commentText: data.payload.commentText
        })
      })
    }

    render () {
        const { tasks, id, connectDropTarget,socket } = this.props;

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
                            onInput = {this.toggleCommentName}
                            placeholder = "введите комментарий"
                        />
                    </form>
                    <div>
                        {taskSelected[0].comments.map(id =>
                            (<div key = {id}>
                                <Comment 
                                idComment = {id} 
                                idTask = {taskSelected[0].id} 
                                match = {this.props.match}
                                socket = {socket}
                                />
                            </div>)
                        )}

                    </div>
                </div>
            </div>
        );
    }

  sendCommentText = (ev) => {
      ev.preventDefault();
      const { tasks, id } = this.props;
      const { commentText } = this.state;

      if (!commentText || !commentText.length) return null;

      const taskSelected = tasks.filter(task => task.id === id);
      const idTask = taskSelected[0].id;

      this.props.dispatch(addCommentWS(commentText, this.props.socket));
      this.props.dispatch(sendComment(this.state.commentText, idTask))

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
}))(Task);
