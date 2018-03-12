import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.css';
import { sendChangeImportant } from '../../AC';
import 'react-router-modal/css/react-router-modal.css';
import Tag from 'react-feather/dist/icons/tag';

const radioLabelSize = {
    width: "40px",
    height: "40px"
};

class ModalImportant extends Component {
    static propTypes = {
        id: PropTypes.string,
        sendChangeImportant: PropTypes.func
    }

    render () {
        return (
            <div className="form-group" onChange = {this.toggleRadio}>
                <span className = "modal-icon"><Tag /></span>
                <h6>Важность</h6>

                <div className="form-check form-check-inline" >
                    <input className="form-check-input"
                        type="radio" name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="1"/>
                    <div className = "important-first" style = {radioLabelSize} />
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2" value="2"/>
                    <div className = "important-second" style = {radioLabelSize} />
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2" value="3"/>
                    <div className = "important-third" style = {radioLabelSize} />
                </div>

            </div>
        );
    }

    toggleRadio = (ev) => {
        const change = ev.target.value;
        const { id } = this.props;

        this.props.sendChangeImportant(change, id);
    }
}

export default connect(null, { sendChangeImportant })(ModalImportant);
