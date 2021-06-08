import React from "react";
import VisionImage from '../assets/Images/vision.jpg'

const Vision = () => {
  return (
    <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
      <div className="col-lg-6">
        <img
          className="img-fluid"
          src={VisionImage}
          alt="..."
        />
      </div>
      <div className="col-lg-6">
        <div className="bg-black text-center h-100 project">
          <div className="d-flex h-100">
            <div className="project-text w-100 my-auto text-center text-lg-left">
              <h4 className="text-white">Vision</h4>
              <p className="m-2 text-white">
                We are building an investment advisor portal powered by
                Artificial Intelligence for personal users. Thereafter, we will
                offer API licenses to our proprietary model for commercial
                customers. Providing predictive analytics services for other
                domains will be part of the subsequent phase. If you are
                interested in our product, please contact us. Stay tuned for the
                latest updates!
              </p>
              <hr className="d-none d-lg-block mb-0 ms-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
