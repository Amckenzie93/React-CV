import React, { Component } from 'react';
import './profileImage.scss';

class ProfileImage extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="profile-image">
                <img src={this.props.image} alt={this.props.imageAlt} />
            </div>
        );
    };
}

export default ProfileImage;
