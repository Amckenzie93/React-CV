import React, {Component} from 'react';
import './textBody.scss';
import HeadingItem from '../headingItem/headingItem.js'

class textBody extends Component{
    constructor() {
        super();
        this.state = {};
      }

    render() {
        return(
        <div className="profile-textBody">
         <HeadingItem headingType={"h2"} text={this.props.heading} />
         {this.props.text.map((item,index) => {
                return <p key={index}>{item}</p>
            })}           

        </div>
        )
    };

}

export default textBody;
