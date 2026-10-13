import React from 'react';

const Projects_task = () => {
    const data = [
        {
            id: 1,
            title: "Task Management System",
            description: "This project helps users to manage their daily tasks."
        },
        {
            id: 2,
            title: "My Portfolio",
            description: "This project displays my skills and personal details."
        }
    ];

    return (
        <>
            <h1>My Projects</h1>

            <div className="project-list">
                <div className="project">
                    <h2>{data[0].title}</h2>
                    <p>{data[0].description}</p>
                </div>

                <div className="project">
                    <h2>{data[1].title}</h2>
                    <p>{data[1].description}</p>
                </div>
            </div>
        </>
    );
};

export default Projects_task;