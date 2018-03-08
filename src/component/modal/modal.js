import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './style.css'
import 'react-router-modal/css/react-router-modal.css';


class Modal extends Component {
    static propTypes = {
        id: PropTypes.string
    }

    render() {
        return (
            <div className = "basic__modal-content">    
                123
            </div>    
        )
    }
}

export default Modal