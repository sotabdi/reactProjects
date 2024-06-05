import React from 'react';
import './Expert.css';
import Header from '../../CommonComponents/Header';
import ExperImg1 from '../../assets/Expert.png'

function Expert() {
    const experts = [{
        id: 1,
        Name: 'Mahid Ahmed',
        Discrip: 'UX Designer',
        img: ExperImg1
    },
    {
        id: 2,
        Name: 'Mahid Ahmed',
        Discrip: 'UX Designer',
        img: ExperImg1
    },
    {
        id: 3,
        Name: 'Mahid Ahmed',
        Discrip: 'UX Designer',
        img: ExperImg1
    }]
  return (
    <div id="expertFull">
        <div className="container">
            <div className="expert">
                <div className="expertTop">
                    <Header
                    clss={'flexCenter'}
                    head={'Our Expert Team Member'}
                    discrip={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'}/>
                </div>
                <div className="expertBottom">
                    {experts?.map(person =>(
                        <div className="person" key={person.id}>
                            <picture>
                                <img src={person.img} alt={person.img} />
                            </picture>
                            <div className="overly">
                                <h5 className="person__header">{person.Name}</h5>
                                <h5 className="person__discrip">{person.Discrip}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Expert