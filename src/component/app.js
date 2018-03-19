import React, { Component } from 'react';
import BoardsList from './Board/BoardsList';
import NavBar from './navBar/navBar';
import TaskBoard from './Board/taskBoard/taskBoard.js';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import { ModalContainer } from 'react-router-modal';
import { connect } from 'react-redux';
import { addBoard, deleteBoard } from '../AC';

import io from "socket.io-client"
let socket

class App extends Component {

    render () {
        return (
            <div>
                <NavBar />
                <main role="main" className="container">
                    <Switch>
                        <Route path="/" render = {this.getBoards} exact/>
                        <Route path ="/board/:id" component = {this.getTask}/>
                    </Switch>
                </main>
                <ModalContainer />
            </div>
        );
    }

    getBoards = () => {
    if(socket) socket.disconnect()

    socket = io.connect("http://localhost:3000")
    console.log('connection')
        return (
            <div>
                <BoardsList socket = {socket}/>
            </div>
        );
    }

    getTask = ({ match }) => {
        const id = match.params.id;
        socket.disconnect()
        console.log('disconnection')

        return (
            <div >
                <TaskBoard id = {id} match = {match} socket = {socket}/>
            </div>
        );
    }
}

export default App;
