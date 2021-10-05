import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselData = props => {
    const { title, description } = props.course;
    return (
        <Carousel.Item>
            <div className="bg-success rounded-3 p-5 my-3 text-white shadow">
                <h2>{title}</h2>
                <p>{description}</p>
                <button type="button" className="btn btn-outline-light">Register Now</button>
            </div>
        </Carousel.Item>
    );
};

export default CarouselData;

// useEffect(() => {
//     const courseData = [
//         {
//             title: "Learn Adobe CC with our Masterclass",
//             description: "In this Adobe CC Masterclass, you will learn Photoshop, Illustrator, Adobe XD, InDesign & more. Register now."

//         },
//         {
//             title: "A to Z JavaScript with Special Guid",
//             description: "In this JavaScript , you will learn Photoshop, JS6, OOP Concept, . Register now."

//         },
//         {
//             title: "Learn MERN Stack by Mark Kaka",
//             description: "In this Adobe CC Masterclass, you will learn Photoshop, Illustrator, Adobe XD, InDesign & more. Register now."

//         }
//     ]
//     setItems(courseData);
// }, [])