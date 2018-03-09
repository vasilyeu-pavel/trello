import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendChangeTextComment } from '../../AC'
import './style.css';
import 'react-router-modal/css/react-router-modal.css';


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
        const { id } = this.props;
        const { text, isOpen } =  this.state;

        return (
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Описание</label>
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
                    <button type="button" className="btn btn-primary" onClick = {this.sendValue} >Сохранить</button> 
                    : null}
            </div> 
        );
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: true
        })
    }

    sendValue = () => {
        this.props.sendChangeTextComment(this.state.text, this.props.id)
        this.setState({
            isOpen: false,
            text: ""
        })
    }

    handleCommentText = (ev) => {
      let value = ev.target.value;
      this.setState({
          text: value
      });
    }
}

export default connect(null, { sendChangeTextComment })(ModalTextForm)
