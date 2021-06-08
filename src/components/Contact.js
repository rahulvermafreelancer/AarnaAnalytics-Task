import React from "react";
import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <section class="contact-section bg-black">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5">
          <div class="col-md-4 mb-3 mb-md-0">
            <ContactCard title="Address" paragraph="McKinney, TX, USAL" />
          </div>
          <div class="col-md-4 mb-3 mb-md-0">
            <ContactCard title="Email" paragraph="contact@aarnaanalytics.com" />
          </div>
          <div class="col-md-4 mb-3 mb-md-0">
            <ContactCard title="Phone" paragraph="(214)856-0385" />
          </div>
        </div>
        <div class="social d-flex justify-content-center">
          <a class="mx-2" href="https://www.linkedin.com/company/aarna-analytics/">
            <i class="fab fa-twitter">
              <img src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/instagram-512.png" alt="insta" height="50" width="50"/>
            </i>
          </a>
          <a class="mx-2" href="https://www.linkedin.com/company/aarna-analytics/">
            <i class="fab fa-facebook-f">
            <img src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png" alt="facebook" height="50" width="50"/>
            </i>
          </a>
          <a class="mx-2" href="https://www.linkedin.com/company/aarna-analytics/">
            <i class="fab fa-github">
            <img src="https://www.fpsa.org/wp-content/uploads/linkedin-logo-copy.png" alt="linkedin" height="50" width="50"/>
            </i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
