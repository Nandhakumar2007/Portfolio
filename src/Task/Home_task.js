import React from 'react';

function Home_task(props) {
    return (
        <div className="profile">
            <h1>Welcome to My Portfolio</h1>
            <h2>{props.name}</h2>
            <h3>{props.role}</h3>

            <p>Username: {props.user_name}</p>
            <p>Email: {props.email}</p>
            <p>Location: {props.location}</p>

            <h3>My Skills</h3>

            {props.skills.map((skill) => (
                <p key={skill}>{skill}</p>
            ))}
        </div>
    );
}

export default Home_task;