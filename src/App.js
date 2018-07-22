import React, { Component } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
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
                        <Route path="/login" component={Login}/>
                        <Route path="/signup" component={Signup}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
