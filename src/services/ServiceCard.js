import React from "react";
import "./serviceCard.css";
function ServiceCard({ item }) {
  const { imgUrl, title, desc } = item;
  return (
    <div className="service_item">
      <div className="service_img">
        <img src={imgUrl} alt="img" />
      </div>
      <h5>{title}</h5>

      <div className="userMsg">
        <span className="messageContent">{desc}</span>
      </div>
    </div>
  );
}

export default ServiceCard;
