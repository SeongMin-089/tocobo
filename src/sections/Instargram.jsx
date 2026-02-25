import React from "react";
import instar from "../util/instargram";
import './styles/instargram.scss'
const Instargram = () => {
  return (
    <div className="inner instar-inner">
      <div className="t-wrap">
        <h2 className="tit">Instagram</h2>
        <p className="txt">@tocobo_official</p>
      </div>
      <ul className="instar-list">
        {instar.map((i) => (
          <li key={i.id}>
            <a 
            href={i.link} 
            style={{ backgroundImage: `url(${i.image})` }}>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Instargram;
