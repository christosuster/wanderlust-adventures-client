import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="container" id="Contact">
        <div className="text-center">
          <h1>
            We'd Love to Hear{" "}
            <span className="text-color-update-2">From You</span>
          </h1>
          <p className="text-color-update">
            Have questions or need assistance with your wanderlust adventure?
            Our team is here to help you every step of the way.
          </p>
        </div>
        <div className="row addresses">
          <div className="col">
            <h1 className="text-color-update">Customer Support</h1>
            <p>Email: support@wanderlustadventures.com</p>
            <p>Phone: +1 (XXX) XXX-XXXX</p>

            <h1 className="text-color-update">General Inquiries</h1>
            <p>Email: info@wanderlustadventures.com</p>
            <p>Phone: +1 (XXX) XXX-XXXX</p>
          </div>

          <div className="col">
            <h1 className="text-color-update">Office Address</h1>
            <p>Wanderlust Adventures</p>
            <p>67 High Street</p>
            <p>New York City, New York</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
