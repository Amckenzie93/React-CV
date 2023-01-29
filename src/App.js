import React from 'react';
import './App.scss';

import ProfileImage from './components/profileImage/ProfileImage.js';
import ProfileName from './components/profileName/profileName.js';
import ProfileDetailsItem from './components/profileDetailsItem/profileDetailsItem.js';
import TextBody from './components/textBody/textBody.js';
import ListCollection from './components/listCollection/listCollection.js';
import Experiences from './components/experiences/experiences.js';


function App() {
    return (
        <div className="App">

            <div className="two-column">
                <div className="col">

                    <ProfileImage image={"./Assets/Adam Mckenzie.jpg"} imageAlt={"Photograph of Adam Mckenzie."} />

                    <ProfileName />

                    <ProfileDetailsItem 
                    heading={"Contact Details"} 
                    items={[{heading:"Email", text:"Adam.Mckenzie93@gmail.com"},{heading:"Phone",text:"07956 760640"}]}/>

                     <ProfileDetailsItem 
                    heading={"Education"}
                    items={[{heading:"BSC Hons Software Engineering", text:"2021 - First Class Honours"},{heading:"HNC Interactive Media",text:"2011"}, {heading:"NC Digital Media",text:"2010"}]}/>
                
                    <ProfileDetailsItem 
                        heading={"Interests"} 
                        headingType={"h2"}
                        items={[
                            {heading:"", text:"- Finance"},
                            {heading:"",text:"- Investing"},
                            {heading:"",text:"- Technology"},
                            {heading:"",text:"- Mountain Biking"},
                            {heading:"",text:"- Fitness"},
                            {heading:"",text:"- Technology"},
                            {heading:"",text:"- Music"}
                    ]}/>
                </div>
                <div className="col">
                    <TextBody heading={"Bio"} 
                    text={[
                        "With almost 10 years’ commercial experience working within the web industry and a first class honours degree in software development, i have taken on a new challenge in becoming a lead front end developer, applying the knowledge i have soaked up over the years including Responsive Web Development, Accessibility, Web interactions and animation, and many more. I enjoy the ability to do so whilst keeping and maintaining a clean codebase utilising modern tech stacks.",
                        "One of my favorite aspects in what i do, and what i consider myself lucky in, is being able to offer help and support to others in my field - i take no greater joy and am honoured by the fact i can help those in areas i struggled to grasp over the years, and find myself having a meaningful impact on peoples careers."
                    ]} />

                    <ListCollection
                        heading="Main Skillset"
                        data={[
                            "HTML5","CSS","LESS","SCSS",
                            "Javascript", "React", "JQuery", "TypeScript","SEO", "Web Accessibility",
                            "C# (.NET & MVC)", "Web Design", "Web Analysis", "Codebase Manager", "Bootstrap"
                        ]}
                    /> 

                    <ListCollection
                        heading="Lesser skillset"
                        data={["SQL", "Gulp", "Angular", "Haskell", "Java", "Vue", "Animations", "Wordpress","PHP"
                        ]}
                    /> 

                    <Experiences 
                    heading={"Experience"}
                    jobs={[
                        {Company:"Forrit",
                        logo:"./assets/forrit.png",
                        logoAlt:"",
                        website:"www.Forrit.com",
                        year:"2016 - present",
                        text:["As a senior developer within the Microsoft delivery team at Cortex World Wide I perform many duties such as handling large website migrations, creating and maintaining responsive web pages, building accessible yet interactive user interfaces and features for all to use. I also maintain the integrity of the project code base alongside managing deployments of new updates to the public website"
                        ,"maintaining responsive web pages, building accessible yet interactive user interfaces and features for all to use. I also maintain the integrity of the project code base alongside managing deployments of new updates to the public website."
                        ]
                        },
                        {Company:"Inforgen",
                        logo:"./assets/inforgen.png",
                        logoAlt:"",
                        website:"www.Inforgen.com",
                        year:"2013 - 2016",
                        text:["As a software tester and a junior web developer as part of a development team, I completed front and back end adhoc tasks; creating, implementing, and fixing multiple eCommerce driven websites alongside the testing of both cloud based management software ‘Inforgen’ and the clients’ websites through all stages of development"]
                        },
                        ]}/>

                </div>
            </div>
        </div>
    );
}

export default App;
