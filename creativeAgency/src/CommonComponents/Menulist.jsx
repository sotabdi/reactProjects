import React from 'react';
import './Menulist.css';

function Menulist({head, items}) {

  return (
    <div id="meuList">
        <h6 className="menulistHeader">{head}</h6>
        <ul className="menulistItem">
            {items?.map(item=>(
                <li><a href="#" className="list__item">{item}</a></li>
            ))}
        </ul>
    </div>
  )
}

export default Menulist