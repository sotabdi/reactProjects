import React from 'react';
import './Testimonial.css';
import Header from '../../CommonComponents/Header';
import TestiImg from '../../assets/Testi.png';
import { FaStar } from "react-icons/fa";

function Testimonial() {
    const testimonial = [{
        id: 1,
        starCount: 5,
        Comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
        Name: 'Mahid Ahmed',
        Tag: 'UX Designer',
        img: TestiImg
    },
    {
        id: 2,
        starCount: 5,
        Comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
        Name: 'Mahid Ahmed',
        Tag: 'UX Designer',
        img: TestiImg
    },
    {
        id: 3,
        starCount: 4,
        Comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
        Name: 'Mahid Ahmed',
        Tag: 'UX Designer',
        img: TestiImg
    }]
  return (
    <div id="testimonialFull">
        <div className="container">
            <div className="testimonial">
                <div className="testimonialTop">
                    <Header 
                    clss={'flexStart'} 
                    head={'We Care About Our Customer Experience Too'} 
                    discrip={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'}/>
                </div>
                <div className="testimonialBottom">
                    {testimonial.map(item=>(
                        <div className="testi" key={item.id}>
                            <picture>
                                <img src={item.img} alt={item.img} />
                            </picture>
                            <div className="stars">
                                {[...new Array(item.starCount)].map(()=>(
                                    <li>{<FaStar />}</li>
                                ))}
                            </div>
                            <p className="testi__comment">{item.Comment}</p>
                            <h5 className="testi__Title">{item.Name}</h5>
                            <h5 className="testi__tag">{item.Tag}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial