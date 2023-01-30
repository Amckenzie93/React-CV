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
                    {this.isEmailOrPhone(item.hasFlag, item.text, item.ariaLabel)}
                    </div>
            })}           
        </div>
        )
    };

    //could handle linked mailto and phone psuedo but users always find this spammy and dont use anyway... span added for later button addition
    isEmailOrPhone = (type, text, ariaLabel) => {
        if (type === "email") {
            return (<p>{text}<span className="email"></span></p>);
        }
        else if (type === "phone") {
            return (<p>{text}<span className="phone"></span></p>);
        }
        else if (type === "link") {
            return (<a href={text} aria-label={ariaLabel} target="_blank" rel="noopener noreferrer">{text}</a>)
        }
        else {
            return (<p>{text}</p>);
        }
    }
}

export default profileDetailsItem;
