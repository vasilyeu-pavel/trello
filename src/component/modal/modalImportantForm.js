import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.css';
import 'react-router-modal/css/react-router-modal.css';


class ModalImportantForm extends Component {
    static propTypes = {
        id: PropTypes.string
    }

    render () {
        const { id } = this.props;
        return (
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Описание</label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Добавить более подробное описание…"
                />
            </div>
        );
    }
}

export default ModalImportantForm;
