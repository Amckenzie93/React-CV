import React, { Component } from 'react';
import './experiences.scss';
import HeadingItem from '../headingItem/headingItem.js';

class experiences extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="profile-experiences">
                <HeadingItem headingType={"h2"} text={this.props.heading} />

                {this.props.jobs.map((job, index) => {

                    return <div key={index} className="profile-experiences-company">
                        <div className="profile-experiences-company-heading">
                            <img src={job.logo} alt={job.logoAlt} />
                            <div>
                                <label>Company: </label><p className="profile-experiences-name">{job.Company}</p>
                            </div>
                            <div>
                                <label>Website: </label><a className="profile-experiences-website" href={"https://" + job.website} aria-label={job.ariaLabel} target="_blank" rel="noopener noreferrer">{job.website}</a>
                            </div>
                            <div>
                                <label>Timeline: </label><p className="profile-experiences-year">{job.year}</p>
                            </div>
                        
                        <div>
                            <label>Role: </label>

                            <p className="profile-experieces-role">{job.position}</p>
                            </div>
                        </div>
                        {job.text.map((para, index2) => {
                            return (
                                <p className="profile-experiences-details" key={index2}>{para}</p>
                            )
                        })}
                    </div>
                })
                }
            </div >
        )
    };
}

export default experiences;
