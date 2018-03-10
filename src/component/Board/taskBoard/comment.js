import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DragSource } from 'react-dnd';
import ReactDOM from 'react-dom';
import { deleteComment } from '../../../AC';
import Modal from '../../modal/modal';
import { NavLink } from 'react-router-dom';
import { ModalRoute } from 'react-router-modal';
import 'react-router-modal/css/react-router-modal.css';


export const ItemTypes = {
    COMMENT: 'comment'
};

const commentSource = {
    beginDrag ({ idComment, idTask }) {
        return {
            idComment, idTask
        };
    }
};

function collect (connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    };
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


    render () {
        const { comments, idComment, connectDragSource, isDragging, idTask, match } = this.props;

        const commentElement = comments.filter(comment => comment.id === idComment)[0];

        return connectDragSource(
            <div key = {commentElement.id} className = {this.handleClassComment()} style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 15,
                fontWeight: 'bolds',
                cursor: 'pointer',
                height: '100%',
                maxWidth: "18rem"
            }}>
                    <div className = "card-header">{commentElement.date}
                        {this.getCommentImportant(commentElement)}
                    </div>

                    <NavLink to={`${match.url}/comment/${commentElement.id}`}   
                    style={{
                    textDecoration: 'none',
                    color: 'white'
                   }}>
                        <div className = "card-body" onClick = {this.test}>
                            <h5 className = "card-title"><b>{commentElement.name}</b></h5>
                            <p className = "card-text">{commentElement.text}</p>
                        </div>
                    </NavLink>

                    <div className = "card-footer">
                        <img className = "card-footer-like" src ="./src/assets/img/gal.png"
                            onClick = {this.handleCommentStatus}/>
                        <button type="button" className="close" aria-label="Close" onClick = {this.deleteCommentary.bind(this, commentElement.id, idTask)}>
                          <span aria-hidden="true">&times;</span>
                        </button>        

                    <ModalRoute component = {this.getComment} path = {`${match.url}/comment/:id`}
                        parentPath={`${match.url}`}
                        exact
                    />
                </div>

            </div>
        );
    }

    getCommentImportant (comment) {
        const value = +comment.important
        if (!value) return null
        if (value === 1) {
            return (
                   <div className = "comment_important">
                        <div className = "comment_important_first"></div>
                   </div>
                )
        }
        else if (value === 2)  {
             return (
                   <div className = "comment_important">
                    <div className = "comment_important_first"></div>
                    <div className = "comment_important_second"></div>
                  </div>
                )
        }else {
            return (
                  <div className = "comment_important">
                    <div className = "comment_important_first"></div>
                    <div className = "comment_important_second"></div>
                    <div className = "comment_important_third"></div>
                  </div>
                )
        }   
    }

    getComment = ({ match }) => {
        const id = match.params.id;
        return (
            <div>
                <Modal id = {id} />
            </div>
        );
    }

    deleteCommentary (idComment, idTask) {
        this.props.deleteComment(idComment, idTask);
    }

    handleCommentStatus = (ev) => {
        ev.preventDefault();
        this.setState({
            commentStatus: !this.state.commentStatus
        });
    }

    handleClassComment () {
        const { commentStatus } = this.state;
        return commentStatus ? "card text-white bg-secondary mb-3" : "card text-white bg-dark mb-3";
    }
}

export default connect(state => ({
    comments: state.comments
}), { deleteComment })(Comment);
