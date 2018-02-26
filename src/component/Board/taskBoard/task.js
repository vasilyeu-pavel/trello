import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'

class Task extends Component {
    static propTypes = {

    }

    render() {
      console.log(this.props.id)
        return (
            <div className ="card bg-light mb-3" style={{"maxWidth": 18 + "rem"}}>
              <div className ="card-header">{ this.props.id }</div>
              <div className ="card-body">
                <h5 className ="card-title">Light card title</h5>
                <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
        )
    }

}

export default Task