import React, { Component } from 'react';
import './App.scss';

import ProfileImage from './components/profileImage/ProfileImage.js';
import ProfileName from './components/profileName/profileName.js';
import ProfileDetailsItem from './components/profileDetailsItem/profileDetailsItem.js';
import TextBody from './components/textBody/textBody.js';
import ListCollection from './components/listCollection/listCollection.js';
import Experiences from './components/experiences/experiences.js';
import HeadingItem from './components/headingItem/headingItem.js';

class App extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        window.history.scrollRestoration = "manual"
        return (
            <div className="App">
                <div className="two-column">
                    <aside className="col">

                        <ProfileImage image={"./Assets/Adam Mckenzie.jpg"} imageAlt={"Photograph of Adam Mckenzie."} />

                        <ProfileName />
                        <div className="profile-details-collection">
                            <ProfileDetailsItem
                                heading={"Contact Details"}
                                items={[
                                    { heading: "Email", text: "Adam.Mckenzie93@gmail.com", hasFlag: "email" },
                                    { heading: "Phone", text: "07956 760640", hasFlag: "phone" },
                                    { heading: "GitHub", text: "https://github.com/Amckenzie93/", hasFlag: "link", ariaLabel: "Follow this link to Adam Mckenzie's GitHub profile." },
                                ]}
                            />

                            <ProfileDetailsItem
                                heading={"Education"}
                                items={[
                                    { heading: "BSC Hons Software Engineering", text: "2021 - First Class Honours" },
                                    { heading: "HNC Interactive Media", text: "2011" },
                                    { heading: "NC Digital Media", text: "2010" }]}
                            />

                            <ProfileDetailsItem
                                heading={"Interests"}
                                headingType={"h2"}
                                items={[
                                    { heading: "", text: "- Finance" },
                                    { heading: "", text: "- Investing" },
                                    { heading: "", text: "- Technology" },
                                    { heading: "", text: "- Mountain Biking" },
                                    { heading: "", text: "- Fitness" },
                                    { heading: "", text: "- Technology" },
                                    { heading: "", text: "- Music" }
                                ]} />
                        </div>
                    </aside>
                    <main className="col">
                        <TextBody heading={"Bio"}
                            text={[
                                "With almost 10 years’ commercial experience working within the web industry and a first class honours degree in software development, i have taken on a new challenge in becoming a lead front end developer, applying the knowledge i have soaked up over the years including Responsive Web Development, Accessibility, Web interactions and animation, and many more. I enjoy the ability to do so whilst keeping and maintaining a clean codebase utilising modern tech stacks.",
                                "One of my favorite aspects in what i do, and what i consider myself lucky in, is being able to offer help and support to others in my field - i take no greater joy and am honoured by the fact i can help those in areas i struggled to grasp over the years, and find myself having a meaningful impact on peoples careers."
                            ]}

                        />
                        <div className="margin-bottom-48">
                            <HeadingItem headingType={"h2"} text="Skill set" />
                            <ListCollection
                                heading="Main technologies:"
                                data={[
                                    "HTML5", "CSS", "LESS", "SCSS",
                                    "Javascript", "React", "JQuery", "TypeScript", "SEO", "Web Accessibility",
                                    "C# (.NET & MVC)", "Web Design", "Web Analysis", "Codebase Manager", "Bootstrap"
                                ]}
                            />
                            <ListCollection
                                heading="Exposure to:"
                                data={["SQL", "Gulp", "Angular", "Haskell", "Java", "Vue", "Animations", "Wordpress", "PHP"
                                ]}
                            />
                        </div>

                        <Experiences
                            heading={"Experience"}
                            jobs={[
                                {
                                    Company: "Forrit ltd",
                                    logo: "./assets/forrit.png",
                                    logoAlt: "",
                                    website: "www.Forrit.com",
                                    ariaLabel: "Follow this link to learn more about Forrit.",
                                    year: "2021 - present",
                                    position: "Lead Front End Developer",
                                    text: ["During the last two years at Forrit ltd, i was promoted as the Lead Front end developer. This has been such an exciting pivotol change bringing a whole myriad of new challenges and opertunities.",
                                        "explain whats new ... to be written",
                                        "Recently i built Forrits new public facing website, i encourage you to please do check it out! I used LESS css along with typescript, gulp, and many other tools along side our own inhouse built CMS platform 'Forrit'."
                                    ]
                                },
                                {
                                    Company: "Forrit ltd",
                                    logo: "./assets/forrit.png",
                                    logoAlt: "",
                                    website: "www.Forrit.com",
                                    ariaLabel: "Follow this link to learn more about Forrit.",
                                    year: "2016 - 2021",
                                    position: "Senior Developer",
                                    text: ["As a senior developer within the Microsoft delivery team at Forrit, I perform many duties such as handling large website migrations, creating and maintaining responsive web pages, building accessible yet interactive user interfaces and features for all to use. I also maintain the integrity of the project code base alongside managing deployments of new updates to the public website",
                                        "maintaining responsive web pages, building accessible yet interactive user interfaces and features for all to use. I also maintain the integrity of the project code base alongside managing deployments of new updates to the public website."]
                                },
                                {
                                    Company: "Inforgen",
                                    logo: "./assets/inforgen.png",
                                    logoAlt: "",
                                    website: "www.Inforgen.com",
                                    ariaLabel: "Follow this link to learn more about Inforgen.",
                                    year: "2013 - 2016",
                                    position: "Software Tester / Junior Web Developer",
                                    text: ["As a software tester and a junior web developer as part of a development team, I completed front and back end adhoc tasks; creating, implementing, and fixing multiple eCommerce driven websites alongside the testing of both cloud based management software ‘Inforgen’ and the clients’ websites through all stages of development"]
                                },
                            ]} />


                        <p className="copyright">© Copyright Adam Mckenzie 2023 | powered by React.js</p>

                    </main>
                </div>
            </div>
        );
    }
}


export default App;
