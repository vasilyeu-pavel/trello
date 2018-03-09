import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ModalTextForm from './modalTextForm';
import ModalImportantForm from './modalImportantForm';
import './style.css';
import 'react-router-modal/css/react-router-modal.css';


class Modal extends Component {
    static propTypes = {
        id: PropTypes.string
    }

    render () {
        const { id } = this.props;
        return (
            <div className = "basic__modal-content">
                <div className = "title">
                    <p>{id}</p>
                </div>

                <div className = "body">

                    <div className = "content">
                        <ModalTextForm />
                        <ModalImportantForm />
                    </div>

                    <div className = "menuBar" />

                </div>

            </div>
        );
    }
}

export default Modal;
