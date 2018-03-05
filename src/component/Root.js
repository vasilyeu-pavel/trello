import React from 'react'
import PropTypes from 'prop-types'
import App from './App'
import store from '../store'
import {Provider} from 'react-redux'
import {HashRouter as Router} from 'react-router-dom'

function Root() {
    return (
        <Provider store = {store}>
       		<Router>
            	<App />
            </Router>
        </Provider>
    )
}

export default Root