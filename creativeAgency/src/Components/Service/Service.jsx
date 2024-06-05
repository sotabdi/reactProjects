import React from 'react';
import "./Service.css";
import Header from '../../CommonComponents/Header';
import { SiMaterialdesignicons } from "react-icons/si";
import { MdOutlineWebStories } from "react-icons/md";
import { HiOutlineRectangleStack } from "react-icons/hi2";

function Service() {
    const serviceCardcontent = [{
        id: 1,
        Icon: <SiMaterialdesignicons fontSize={'25px'}/>,
        Header: 'UI/UX Design',
        Discrip: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        id: 2,
        Icon: <MdOutlineWebStories fontSize={'25px'}/>,
        Header: 'Web Development',
        Discrip: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        id: 3,
        Icon: <HiOutlineRectangleStack fontSize={'25px'}/>,
        Header: 'Digital Marketing',
        Discrip: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        id: 4,
        Icon: <SiMaterialdesignicons fontSize={'25px'}/>,
        Header: 'Graphic Design',
        Discrip: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        id: 5,
        Icon: <SiMaterialdesignicons fontSize={'25px'}/>,
        Header: 'Web Design',
        Discrip: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        id: 6,
        Icon: <SiMaterialdesignicons fontSize={'25px'}/>,
        Header: 'Motion Design',
        Discrip: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    }];
  return (
    <div id="serviceFull">
        <div className="container">
            <div className="service">
                <div className="serviceTop">
                <Header clss="flexCenter" head="Our Services" discrip='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'/>
                </div>
                <div className="serviceBottom">
                    {serviceCardcontent?.map((content) =>(
                        <div className="serviceCard" key={content.id?content.id:'id missing'}>
                        <span className="serviceCard__icon">{content.Icon?content.Icon:'icon missing'}</span>
                        <h4 className="serviceCard__header">{content.Header?content.Header:"header missing"}</h4>
                        <p className="serviceCard__discrip">{content.Discrip?content.Discrip:'discription missing'}</p>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service;