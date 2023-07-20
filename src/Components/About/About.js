import React from "react";
import { Col, Row } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="showcase">
        <section className="container py-5">
          <Row className="align-items-center mx-auto">
            <Col sm={8} className="mx-auto">
              <div>
                <h1 className="text-warning text-center">About Us</h1>
                <br />
                <h4 className="text-info text-center">
                  Welcome to Wanderlust Adventures, where the love for travel
                  and the quest for unique experiences come together.
                </h4>
                <br />
              </div>
            </Col>
          </Row>
        </section>
      </div>

      <section className="container py-5">
        <Row className="align-items-center">
          <Col sm={12} md={6}>
            <div>
              <p>
                At Wanderlust Adventures, we believe that travel is not just a
                destination; it's a transformative journey that enriches the
                soul and broadens horizons. Come, embark on your next adventure
                with us, and let the spirit of wanderlust guide you to the most
                extraordinary experiences the world has to offer. Together,
                let's create unforgettable memories and make every journey truly
                remarkable.
                <br />
                <br />
                We invite you to join our ever-growing community of travelers
                who seek not only to explore the world but also to embrace the
                diverse cultures that enrich our lives. Be inspired by the
                stories of fellow adventurers, share your travel tales, and
                embark on a journey of self-discovery through the lens of
                exploration.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="card shadow">
              <div className="card-body">
                <h1 className="card-title text-center">Contact Us</h1>
                <hr className="w-50 text-danger p-1 rounded-pill mx-auto" />
                <br />
                <h6 className="card-text">Phone : +(123) 6451-648</h6>
                <br />
                <h6 className="card-text">Office : +(888) 7546-351</h6>
                <br />
                <h6 className="card-text">
                  E-mail : support@wanderlustadventures.com
                </h6>
                <br />
                <h6>
                  Social :
                  <i
                    className="fa-brands fa-facebook-f mx-2 text-primary"
                    aria-hidden="true"
                  ></i>
                  <i
                    className="fa-brands fa-twitter mx-2 text-info"
                    aria-hidden="true"
                  ></i>
                  <i
                    className="fa-brands fa-instagram mx-2 text-danger"
                    aria-hidden="true"
                  ></i>
                  <i className="fa fa-envelope mx-2" aria-hidden="true"></i>
                </h6>
                <br />
              </div>
            </div>
          </Col>
        </Row>
      </section>

      <section className="container text-center pb-5 col-sm-7">
        <h1 className="text-danger">Our Mission</h1>
        <br />
        <h5>
          At Wanderlust Adventures, our mission is to inspire and empower
          individuals to embrace the spirit of wanderlust, encouraging them to
          explore the world with an open heart and an adventurous mind. We
          believe that travel has the power to transform lives, foster cultural
          understanding, and bring people closer together.
        </h5>
        <br />
        <br />
        <h1 className="text-danger">Handpicked Destinations</h1>
        <br />
        <h5>
          We take great pride in curating a carefully selected collection of
          extraordinary travel destinations that go beyond the ordinary. From
          hidden gems nestled amidst nature's wonders to culturally rich urban
          hubs, every accommodation featured on our platform has been handpicked
          to ensure an exceptional experience for our valued guests.
        </h5>
        <br />
        <br />
        <h1 className="text-danger">Safety and Trust</h1>
        <br />
        <h5>
          Your safety and comfort are our top priorities. We work closely with
          our hosts to ensure that every accommodation adheres to strict safety
          standards. Our trusted verification process offers peace of mind, so
          you can embark on your journey with confidence.
        </h5>
      </section>
    </div>
  );
};

export default About;
