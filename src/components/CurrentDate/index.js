import React, { Component } from 'react';
import CurrentDate from './CurrentDate.jsx';
import './CurrentDate.css';

class RealTimeDate extends Component {
    state = {
        date: new Date(),
    };

    componentDidMount() {
        this.setDateUpdater();
    }
    componentWillUnmount() {
        this.clearDateUpdater();
    }
    updateDate() {
        this.setState({
            date: new Date(),
        });
    }
    setDateUpdater(interval = 1000) {
        if (this.dateUpdater !== null) {
            this.clearDateUpdater();
        }
        this.dateUpdater = setInterval(() => {
            this.updateDate();
        }, interval)
    }
    clearDateUpdater() {
        clearInterval(this.dateUpdater);
    }
    render() {
        let localeDate = this.state.date.toLocaleTimeString();
        return (
            <React.Fragment>
                <CurrentDate date={localeDate} />
            </React.Fragment>
        );
    }
}

export default RealTimeDate;
