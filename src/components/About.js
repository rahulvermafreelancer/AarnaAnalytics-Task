import React from "react";
import OpenSource from "../assets/Images/opensource.svg";

const About = () => {
  return (
    <section className="about-section text-center" id="about">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8">
            <h2 className="text-white mb-4">How We Got Here</h2>
            <p className="text-white-50">
              We're a talented group of engineers coming from various industries
              and academia. We all have advanced degrees and numerous years of
              experience in the field of Artificial Intelligence. Our work has
              been published at numerous conferences and journals around the
              globe. ​<br />
              <br />
              What unites us and acted as the catalyst to form Aarna Analytics
              is our passion for this subject and our desire to use our
              expertise to create something that will help people make better
              decisions. We will strive to bring solutions to customers in
              various industries to help them make tactical and strategic
              decisions to overcome the challenges they face.
              <br />
              <br />
              At Aarna Analytics, we believe that our technological edge and
              expertise can lead our customers towards a successful future. We
              will work to keep our technology ahead of the curve and accessible
              to everyone.
            </p>
          </div>
        </div> 
        <img className="img-fluid" src={OpenSource} alt="opensource" height="200" width="500" />
      </div>
    </section>
  );
};

export default About;
