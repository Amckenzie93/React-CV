import React, { Component } from 'react';
import './headingItem.scss';

class headingItem extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="heading">
                {this.headingType(this.props.headingType, this.props.text)}
            </div>
        )
    };

    headingType = (type, text) => {
        if (type === "h1") {
            return (
                <h1>{text}</h1>
            );
        }
        else if (type === "h2") {
            return (
                <h2>{text}</h2>
            );
        }
        else if (type === "h3") {
            return (
                <h3>{text}</h3>
            );
        }
        else if (type === "h4") {
            return (
                <h4>{text}</h4>
            );
        }
        else if (type === "h5") {
            return (
                <h5>{text}</h5>
            );
        }
    }
}

export default headingItem;
