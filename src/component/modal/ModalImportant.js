import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.css';
import { sendChangeImportant } from '../../AC'
import 'react-router-modal/css/react-router-modal.css';

const radioLabelSize = {
    "width": "40px",
    "height": "40px"
}

class ModalImportant extends Component {
    static propTypes = {
        id: PropTypes.string,
        sendChangeImportant: PropTypes.func
    }

    render () {
        const { id } = this.props;
        return (
            <div className="form-group" onChange = {this.toggleRadio}>
                <label htmlFor="exampleFormControlTextarea1" style = {{ width: "100%" }}>Важность</label>
                <div className="form-check form-check-inline" >
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1"/>
                    <div className = "comment_important_first" style = {radioLabelSize}></div>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2"/>
                    <div className = "comment_important_second" style = {radioLabelSize}></div>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="3"/>
                    <div className = "comment_important_third" style = {radioLabelSize}></div>
                </div>
            </div>
        );
    }

    toggleRadio = (ev) => {
        const change = ev.target.value
        const { id } = this.props

        this.props.sendChangeImportant(change, id)
    }
}

export default connect(null, { sendChangeImportant })(ModalImportant);
