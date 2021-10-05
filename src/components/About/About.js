import React from 'react';
import { Container } from 'react-bootstrap';
import Img from '../../images/about.jpg'

const About = () => {
    return (
        <Container style={{ minHeight: '80vh' }}>
            <img className="img-fluid my-2" src={Img} alt="" srcset="" />
            <p className="fs-5">Welcome to Lernify, your number one source for all things our courses. We're dedicated to giving you the very best of coureses, with a focus on skilled and learning of.
                Founded in 2021 by Supravat Sarkar, Learnify has come a long way from its beginnings in a local coutching. When [store founder] first started out, his/her passion for [passion of founder, ie: helping other parents be more eco-friendly, providing the best equipment for his fellow musicians] drove him to [action, ie: do intense research, quit her day job], and gave him the impetus to turn hard work and inspiration into to a booming online store. We now serve customers all over [place, ie: the US, the world, the Austin area], and are thrilled to be a part of the [adjective, ie: quirky, eco-friendly, fair trade] wing of the [industry type, ie: fashion, baked goods, watches] industry.

                We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
                <span className="d-block text-muted">
                    Sincerely,
                    Rathin Taoushil, Founder of Leranify
                </span>
            </p>
        </Container>
    );
};

export default About;