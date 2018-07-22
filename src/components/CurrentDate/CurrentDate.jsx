import React from 'react';

class CurrentDate extends React.PureComponent {
    render() {
        return (<div className="currentDate" onClick={this.props.onClick}>{ this.props.date }</div>);
    }
}

export default CurrentDate;