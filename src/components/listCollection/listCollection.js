import React, { Component } from 'react';
import './listCollection.scss';

class listCollection extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="profile-listCollection">
                <h3>{this.props.heading}</h3>
                <ul>
                    {this.props.data.map((item, index) => {
                        return <li key={index}>{item}</li>

                    })}
                </ul>
            </div>
        )
    };
}

export default listCollection;
