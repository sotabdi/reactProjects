import React from 'react';
import './Banner.css';
import Button from '../../CommonComponents/Button';
import bannerImg from '../../assets/Banner.png';


function Banner() {
  return (
    <div id="bannerFull">
        <div className="container">
            <div className="banner">
                <div className="bannerLeft">
                    <h1 className='bannerLeft__header'>We Are Digital Product Design Agency</h1>
                    <p className='bannerLeft__discrip'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <Button clss={'lightBtn'} content={'Get Started'} />
                </div>
                <div className="bannerRight">
                    <picture>
                        <img src={bannerImg} alt={bannerImg}/>
                    </picture>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner;