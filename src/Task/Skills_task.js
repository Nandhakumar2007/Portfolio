import React from 'react';
import { UNSAFE_NavigationContext } from 'react-router-dom';

const Skills_task = () => {
    const data = [
        {
            skills: ["HTML", "CSS", "JavaScript", "Python", "Java"]
        }
    ];

    return (
        <>
            <div className="profile">
                <h1>My Skills</h1>

                <div className="skills">
                    <p>{data.skills[0]}</p>
                    <p>{data.skills[1]}</p>
                    <p>{data.skills[2]}</p>
                    <p>{data.skills[3]}</p>
                    <p>{data.skills[4]}</p>
                </div>
            </div>
        </>
    );
};

export default Skills_task;