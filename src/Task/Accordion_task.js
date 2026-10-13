import React, { useState } from 'react';

function Accordion_task() {
    const [openIndex, setOpenIndex] = useState(-1);

    const data = [
        {
            question: "What is React?",
            answer: "React is a JavaScript library used to build user interfaces."
        },
        {
            question: "What is HTML?",
            answer: "HTML is used to create the structure of a web page."
        },
        {
            question: "What is CSS?",
            answer: "CSS is used to style and design web pages."
        }
    ];

    return (
        <div className="accordion">
            <h1>Accordion</h1>

            {data.map((item, index) => (
                <div key={index}>
                    <h3 onClick={() =>
                        setOpenIndex(openIndex === index ? -1 : index)
                    }>
                        {item.question}
                        {openIndex === index ? " −" : " +"}
                    </h3>

                    {openIndex === index && (
                        <p>{item.answer}</p>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Accordion_task;