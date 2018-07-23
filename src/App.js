import React, { Component } from 'react';
import Header from './containers/Header';
import Sidebar from './containers/Sidebar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Posts from './pages/Posts';
import Post from './pages/Post';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Header />
                    <Sidebar />
                    <div className="app__content">
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/posts" component={Posts} />
                        <Route path="/posts/:id" component={Post} />
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/signup" component={Signup}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
