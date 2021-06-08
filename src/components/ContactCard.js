import React from "react";

const ContactCard = ({title, paragraph}) => {
  return (
    <div className="card py-4 h-100">
      <div className="card-body text-center">
        <i className="fas fa-map-marked-alt text-primary mb-2"></i>
        <h4 className="text-uppercase m-0">{title}</h4>
        <hr className="my-4 mx-auto" />
        <div className="small text-black-50">{paragraph}</div>
      </div>
    </div>
  );
};

export default ContactCard;
