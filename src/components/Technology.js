import React from "react";
import opensource from "../assets/Images/tech.jpg";

const Projects = () => {
  return (
    <section className="projects-section bg-light" id="projects">
      <div className="container px-4 px-lg-5">
        <div className="row gx-0 mb-6 mb-lg-5 align-items-center">
          <div className="col-xl-5 col-lg-6">
            <img
              className="img-fluid mb-3 mb-lg-0 "
              
              src={opensource}
              alt="opensource"
            />
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="featured-text text-center text-lg-left">
              <h4>Our Technology</h4>
              <p className="text-black-20 mb-0">
                At Aarna Analytics, we have undertaken the greatest challenge
                there is. Predicting the future is a tough task, even with
                today's technology. The Profitis Prediction Engine will use
                state of the art methodologies to hyper-tune our models using AI
                to give the best insights possible for a given problem. Our
                engine will analyze vast amounts of data and output usable and
                measurable insights that will enable our customers to reach new
                heights. Profitis will be a game changer!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
