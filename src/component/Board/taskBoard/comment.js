import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

class Comment extends Component {
    static propTypes = {

    }

    render() {

        return (
            <div>
              123
            </div>
        )
    }

}

export default connect(state => ({
  tasks: state.task.task
}), { sendComment })(Comment)