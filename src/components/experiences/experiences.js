import React, {Component} from 'react';
import './experiences.scss';
import HeadingItem from '../headingItem/headingItem.js';

class experiences extends Component{

    constructor() {
        super();
        this.state = {};
      }

    render() {
        return(
        <div className="profile-experiences">
            <HeadingItem headingType={"h2"} text={this.props.heading} />
          
            {this.props.jobs.map((job,index) => {

                return <div key={index} className="profile-experiences-company">
                        <div className="profile-experiences-company-heading">
                            <img src={job.logo} alt={job.logoAlt}/>
                            <p className="profile-experiences-name">{job.Company}</p>
                        <a className="profile-experiences-website" href={"https://" + job.website} aria-label={job.ariaLabel} target="_blank">{job.website}</a>
                            <p className="profile-experiences-year">{job.year}</p>
                    </div>
                    <p className="profile-experieces-role">{job.position}</p>
                        {job.text.map((para,index2) => {
                            return(
                                <p className="profile-experiences-details" key={index2}>{para}</p>    
                            )
                        })}
                    </div>    
            })}
        </div>
        )
    };
}

export default experiences;
