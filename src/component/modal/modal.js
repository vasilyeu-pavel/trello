import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ModalTextForm from './modalTextForm';
import ModalImportant from './ModalImportant';
import './style.css';
import 'react-router-modal/css/react-router-modal.css';
import AlignCenter from 'react-feather/dist/icons/align-center'



class Modal extends Component {
    static propTypes = {
        id: PropTypes.string
    }

    render () {
        const { id, comments } = this.props;

        const comment = comments.filter(element => element.id === id)[0]

        return (
             <div className = "modal-content">
                    <div className = "modal-header">
                         <span className = "modal-icon"><AlignCenter /></span>
                         <h6 className = "modal-title"><span>{comment.text}</span></h6>
                         <button type="button" className="close" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                         </button>
                    </div>

                <div className = "modal-body">

                        <ModalTextForm id = {comment.id}/>
                        <ModalImportant id = {comment.id}/>


            </div>
            </div>

        );
    }
}

export default connect(state => ({
    comments: state.comments
}))(Modal);
