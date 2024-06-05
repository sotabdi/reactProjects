import React from 'react';
import "./Header.css";

function Header({clss , head , discrip}) {
  return (
    <div className={clss? clss: 'flexCenter'}>
        <h2 className="header">{head? head: "header missing"}</h2>
        <p className="discription">{discrip? discrip: "discription missing"}</p>
    </div>
  )
}

export default Header