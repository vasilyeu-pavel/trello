import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.css';
import 'react-router-modal/css/react-router-modal.css';


class ModalTextForm extends Component {
    static propTypes = {
        id: PropTypes.string
    }

    render () {
        const { id } = this.props;
        return (
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1" style = {{ width: "100%" }}>Важность</label>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label className="form-check-label" htmlFor="inlineRadio2">3</label>
                </div>

            </div>
        );
    }
}

export default ModalTextForm;
