import React, {Component} from 'react';
import './profileDetailsItem.scss';
import HeadingItem from '../headingItem/headingItem.js'

class profileDetailsItem extends Component{

    constructor() {
        super();
        this.state = {};
      }

    render() {
        return(
        <div className="profile-details">
            <HeadingItem headingType={"h2"} text={this.props.heading} />

            {this.props.items.map((item,index) => {
                return <div key={index}>
                        <HeadingItem headingType={"h3"} text={item.heading} />
                        <p>{item.text}</p>
                    </div>
            })}           
        </div>
        )
    };
}

export default profileDetailsItem;
