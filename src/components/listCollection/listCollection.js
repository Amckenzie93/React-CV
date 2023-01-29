import React, {Component} from 'react';
import './listCollection.scss';
import HeadingItem from '../headingItem/headingItem.js'

class listCollection extends Component{

    constructor() {
        super();
        this.state = {};
      }

    render() {
        return(
        <div className="profile-listCollection">
            <HeadingItem headingType={"h2"} text={this.props.heading} />
            <ul>
            {this.props.data.map((item,index) => {
                return <li key={index}>{item}</li>
                   
            })}    
            </ul>       
        </div>
        )
    };
}

export default listCollection;
