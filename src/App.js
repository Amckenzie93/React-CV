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

                        <ProfileName name={"Adam Mckenzie"} role={"Senior Web Developer"} />
                        <div className="profile-details-collection">
                            <ProfileDetailsItem
                                heading={"Contact Details"}
                                items={[
                                    { heading: "Email", text: "Adam.Mckenzie93@gmail.com", hasFlag: "email" },
                                    { heading: "Phone", text: "07956 760640", hasFlag: "phone" },
                                    { heading: "Location", text: "Edinburgh", hasFlag: "Location" },
                                    { heading: "GitHub", text: "www.github.com/Amckenzie93", hasFlag: "link", ariaLabel: "Follow this link to Adam Mckenzie's GitHub profile." },
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
                                "With almost 10 years’ commercial experience working within the web industry, and a first class honours degree in software development, I have taken on a new challenge in becoming a lead front end developer. In this role I apply the knowledge I have accrued over the years including Responsive Web Development, Accessibility, Javascript frameworks, animations , and much more. I enjoy being able to do so whilst maintaining a clean codebase, utilising modern tech stacks such as CSS Preprocessors, Typescript, and React.",
                                "I take great joy in being able to offer help and support to others in my field, and am honoured by the fact that I can now help mentor in areas where I have struggled in the past. Having a meaningful impact on other people’s careers is one of my favourite aspects of my job, and I consider myself lucky to have the opportunity to do so."
                            ]}

                        />
                        <div className="margin-bottom-48">
                            <HeadingItem headingType={"h2"} text="Skill set" />
                            <ListCollection
                                heading="Key skills:"
                                data={[
                                    "HTML", "CSS", "LESS", "SCSS",
                                    "Javascript", "React", "JQuery", "TypeScript", "Web Accessibility", "Web Analysis",
                                    "C# (.NET & MVC)", "Codebase Manager", "SEO", "Web Design", "Bootstrap"
                                ]}
                            />
                            <ListCollection
                                heading="Secondary skills:"
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
                                    text: ["During the last two years at Forrit ltd, I was promoted as the Lead Front end developer. This has been such an exciting pivotal change bringing a whole myriad of new challenges and opportunities.",
                                        "As Lead Front End Developer at Forrit I help break down large web builds and migrations into smaller, more manageable pieces of work in which can be picked up and developed by my colleagues at Forrit.",
                                        "To ensure this is the case I perform full front end analysis, covering off design requirements provided by clients via calls and collaborative boards, in which overall aids in the ability to make the correct front end technology choices to best meet the needs of the project. By taking the time to analyse client requests, I am able to point out potential flaws and improvements earlier on in the phase of work before development has begun. Doing so then allows me to share resolutions in which better fit the needs of the end user and save time overall.",
                                        "Whilst performing this role, I also thrive and take great pleasure in helping others within my organisation, offering support to colleagues on a variety of different technology stacks along with sharing internal knowledge I have learnt over time within the company across various different projects.",
                                        "Recently, I built the new Forrit  website, which I encourage you to check out! I used LESS CSS along with typescript, gulp, and many other tools in connection with our own  CMS platform, Forrit One."
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
                                    text: ["As a Senior Web Developer at Forrit, I worked with multiple large scale household name clients, such as Microsoft Education, Lloyds of London, Macallan, Motorola, and more. Over the years, I successfully delivered several full scale website migrations into our in house solutions. Many projects required new functionality over time, from small to large component updates, to complete redesigns of client websites."
                                        , "Collaborating with clients and colleagues was a vital part of my work, ensuring my knowledge was applied to help improve the performance and quality of the work being analysed. This often lead to smoother and more successful outcomes for the client."
                                        , "My role covered many aspects from creating and maintaining responsive web pages, building accessible yet interactive user interfaces and features for all to use to WCAG standards, utilising differing front end frameworks best suited to the project needs. I maintained the integrity of several project code bases, alongside managing deployments of new updates to clients public facing websites. I have developed several in house toolkit applications at Forrit which aid across the service delivery teams in day to day functions."]
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
                        <p className="copyright">Built with React.js | © Copyright Adam Mckenzie 2023 </p>
                    </main>
                </div>
            </div>
        );
    }
}


export default App;
