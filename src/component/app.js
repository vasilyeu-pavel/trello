import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css'
import CreateBoards from './createBoards/index'
import {boards} from '../fixtures'


class App extends Component {
    static propTypes = {
    };

    render() {
        return (
                <div className = "alert alert-primary">
                	<CreateBoards />
                </div>    
        )
    }
}

export default App