import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ModalTextForm from './modalTextForm';
import ModalImportant from './ModalImportant';
import './style.css';
import 'react-router-modal/css/react-router-modal.css';


class Modal extends Component {
    static propTypes = {
        id: PropTypes.string
    }

    render () {
        const { id, comments } = this.props;

        const comment = comments.filter(element => element.id === id)[0]

        return (
            <div className = "basic__modal-content">
                <div className = "title">
                     <span className = "comment_body_name"><b>{comment.name}</b></span>
                     <p>{comment.text}</p>
                </div>

                <div className = "body">

                    <div className = "content">
                        <ModalTextForm id = {comment.id}/>
                        <ModalImportant id = {comment.id}/>
                    </div>

                    <div className = "menuBar" />

                </div>

            </div>
        );
    }
}

export default connect(state => ({
    comments: state.comments
}))(Modal);
