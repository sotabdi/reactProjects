import React from 'react';
import './Protfolio.css';
import Header from '../../CommonComponents/Header';
import ProtfolioImg1 from "../../assets/Protfolio1.png";
import ProtfolioImg2 from "../../assets/Protfolio2.png";
import { FaArrowRight } from "react-icons/fa6";

function Protfolio() {
    const protfoliObj = [{
        id: 1,
        protImg: ProtfolioImg1,
        title: 'Graphic Design',
        discrip: 'See Details',
        icon: <FaArrowRight/>,
        link: '#'
    },
    {
        id: 2,
        protImg: ProtfolioImg2,
        title: 'Graphic Design',
        discrip: 'See Details',
        icon: <FaArrowRight/>,
        link: '#'
    },
    {
        id: 3,
        protImg: ProtfolioImg1,
        title: 'Graphic Design',
        discrip: 'See Details',
        icon: <FaArrowRight/>,
        link: '#'
    },
    {
        id: 4,
        protImg: ProtfolioImg2,
        title: 'Graphic Design',
        discrip: 'See Details',
        icon: <FaArrowRight/>,
        link: '#'
    },
    {
        id: 5,
        protImg: ProtfolioImg1,
        title: 'Graphic Design',
        discrip: 'See Details',
        icon: <FaArrowRight/>,
        link: '#'
    },
    {
        id: 6,
        protImg: ProtfolioImg2,
        title: 'Graphic Design',
        discrip: 'See Details',
        icon: <FaArrowRight/>,
        link: '#'
    },
    {
        id: 7,
        protImg: ProtfolioImg1,
        title: 'Graphic Design',
        discrip: 'See Details',
        icon: <FaArrowRight/>,
        link: '#'
    },
    {
        id: 8,
        protImg: ProtfolioImg2,
        title: 'Graphic Design',
        discrip: 'See Details',
        icon: <FaArrowRight/>,
        link: '#'
    }]
  return (
    <div id='protfolioFull'>
        <div className="container">
            <div className="protfolio">
                <div className="protfolioTop">
                    <Header
                    clss={'flexCenter'}
                    head={'Our Work Portfolio'}
                    discrip={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'}/>
                </div>
                <div className="protfolioBottom">
                    {protfoliObj?.map(item =>(
                        <div className="protfolioCard" key={item.id}>
                        <img src={item.protImg} alt={item.protImg} />
                        <div className="protfolioCardOverlay">
                            <p className="protfolioCardOverly__header">{item.title}</p>
                            <a className="protfolioCardOverly__link" href={item.link}>{item.discrip}<span>{item.icon}</span></a>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Protfolio