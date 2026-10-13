import React from 'react';

const Contact_task = () => {
    const data = [
        {
            contact: "6383605393",
            email: "nandha@gmail.com",
            location: "Salem"
        }
    ];

    return (
        <>
            <div className="profile">
                <h1>Contact Me</h1>

                <div className="contact">
                    <h3>Phone</h3>
                    <p>{data.contact}</p>
                </div>

                <div className="contact">
                    <h3>Email</h3>
                    <p>{data.email}</p>
                </div>

                <div className="contact">
                    <h3>Location</h3>
                    <p>{data.location}</p>
                </div>
            </div>
        </>
    );
};

export default Contact_task;