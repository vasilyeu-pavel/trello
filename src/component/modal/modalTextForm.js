import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendChangeTextComment } from '../../AC';
import './style.css';
import 'react-router-modal/css/react-router-modal.css';
import Edit from 'react-feather/dist/icons/edit-3';


class ModalTextForm extends Component {
    static propTypes = {
        id: PropTypes.string,
        sendChangeTextComment: PropTypes.func
    }

    state = {
        text: "",
        isOpen: false
    }

    render () {
        const { text, isOpen } = this.state;

        return (
            <div className="form-group">
                <span className = "modal-icon"><Edit /></span>
                <h6>Описание</h6>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Добавить более подробное описание…"
                    value = {text}
                    onChange = {this.handleCommentText}
                    onFocus = {this.toggleOpen}
                />
                {isOpen ?
                    <button type="button"
                        className="btn btn-primary"
                        onClick = {this.sendValue}
                        style = {{ float: "right" }}>Сохранить
                    </button> :
                    null}
            </div>
        );
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: true
        });
    }

    sendValue = () => {
        this.props.sendChangeTextComment(this.state.text, this.props.id);
        this.setState({
            isOpen: false,
            text: ""
        });
    }

    handleCommentText = (ev) => {
        let value = ev.target.value;
        this.setState({
            text: value
        });
    }
}

export default connect(null, { sendChangeTextComment })(ModalTextForm);
