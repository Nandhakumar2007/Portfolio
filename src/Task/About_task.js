import React from 'react';

const About_task = (props) => {
    const data = [
        {
            name: props.name,
            role: props.role,
            location: props.location,
            about: "I am a student from Muthayammal Engineering College. I am interested in web development. I like learning new technologies and creating websites."
        }
    ];

    return (
        <>
            <div className="profile">
                <h1>About Me</h1>
                <h2>{data.name}</h2>
                <h3>{data.role}</h3>
                <p>Location: {data.location}</p>
                <p>{data.about}</p>
            </div>
        </>
    );
};

export default About_task;