import React from 'react'
import "./Blog.css";
import Header from '../../CommonComponents/Header';
import blogImg from '../../assets/Blogimg.png';
import { CiUser , CiCalendarDate  } from "react-icons/ci";

function Blog() {
    const blogData = [{
        id: 1,
        img: blogImg,
        userRole: 'Admin',
        postDate: '07/11/2021',
        title: 'Business Plans That Fit Your Best Blog',
        discrip: 'There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.',
        linkUrl: '#',
        linkTxt: 'Learn More'
    },
    {
        id: 2,
        img: blogImg,
        userRole: 'Admin',
        postDate: '07/11/2021',
        title: 'Business Plans That Fit Your Best Blog',
        discrip: 'There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.',
        linkUrl: '#',
        linkTxt: 'Learn More'
    },
    {
        id: 3,
        img: blogImg,
        userRole: 'Admin',
        postDate: '07/11/2021',
        title: 'Business Plans That Fit Your Best Blog',
        discrip: 'There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.',
        linkUrl: '#',
        linkTxt: 'Learn More'
    }]
  return (
    <div id='blogFull'>
        <div className="container">
            <div className="blog">
                <div className="blogTop">
                    <Header clss={'flexCenter'} head={'Our Letest News'} discrip={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'}/>
                </div>
                <div className="blogBottom">
                    {blogData?.map( info =>(
                        <div className="blogCard" key={info.id}>
                        <picture>
                            <img src={info.img} alt={info.img} />
                        </picture>
                        <div className="blogCard__user">
                            <span className='blogCardUser__Role'><CiUser fontSize={'18px'}/>{info.userRole}</span>
                            <span className='blogCardUser__Date'><CiCalendarDate fontSize={'18px'}/>{info.postDate}</span>
                        </div>
                        <div className="blogCard__content">
                            <h5 className="blogCard__Title">{info.title}</h5>
                            <p className="blogCard__discrip">{info.discrip}</p>
                            <a href={info.linkUrl} className='blogCard__Link'>{info.linkTxt}</a>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog