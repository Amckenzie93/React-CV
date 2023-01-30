import React, { Component } from 'react';
import './profileName.scss';

class profileName extends Component {
    render() {
        return (
            <div className="profile-name">
                <h2>{this.props.name}</h2>
                <h3>{this.props.role}</h3>
            </div>
        )
    };
}

export default profileName;