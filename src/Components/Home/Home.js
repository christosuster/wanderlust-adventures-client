import React from "react";
import { Card, Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Contact from "../Contact/Contact";
import Logo from "../Logo/Logo";
import Packages from "../Packages/Packages";
import PopularDestination from "../PopularDestination/PopularDestination";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section>
        <Carousel fade>
          <Carousel.Item>
            <div
              className="w-100 d-flex flex-column justify-content-center align-items-center text-center"
              style={{
                minHeight: "550px",
                background:
                  "linear-gradient(#00000094, #00000094), url(https://www.virginholidays.co.uk/.imaging/Desktop/dam/52b76431-970d-49db-beae-91e7c04f1692.jpg) no-repeat center center / cover",
              }}
            >
              <h2 className="text-warning h1">Discover Unique Destinations</h2>
              <h5 className="w-50 mx-auto text-light p-2">
                Unleash your wanderlust spirit and explore our handpicked
                selection of off-the-beaten-path travel destinations
              </h5>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="w-100 d-flex flex-column justify-content-center align-items-center text-center"
              style={{
                minHeight: "550px",
                background:
                  "linear-gradient(#00000094, #00000094), url(https://prod-virtuoso.dotcmscloud.com/dA/188da7ea-f44f-4b9c-92f9-6a65064021c1/heroImage1/PowerfulReasons_hero.jpg) no-repeat center center / cover",
              }}
            >
              <h2 className="text-warning h1">Book Your Dream Escape</h2>
              <h5 className="w-50 mx-auto text-light p-2">
                Escape the ordinary and embark on a journey like never before.
                With just a few clicks, you can book your dream accommodation
                and immerse yourself in the beauty of captivating landscapes and
                local culture.
              </h5>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div
              className="w-100 d-flex flex-column justify-content-center align-items-center text-center"
              style={{
                minHeight: "550px",
                background:
                  "linear-gradient(#00000094, #00000094), url(https://www.bsr.org/images/heroes/bsr-travel-hero..jpg) no-repeat center center / cover",
              }}
            >
              <h2 className="text-warning h1">Unforgettable Experiences</h2>
              <h5 className="w-50 mx-auto text-light p-2">
                Wanderlust Adventures offers more than just a place to stay;
                it's an opportunity to create lasting memories. Engage in
                thrilling outdoor activities, savor mouthwatering cuisines, and
                forge meaningful connections with fellow travelers.
              </h5>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div
              className="w-100 d-flex flex-column justify-content-center align-items-center text-center"
              style={{
                minHeight: "550px",
                background:
                  "linear-gradient(#00000094, #00000094), url(https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fHww&w=1000&q=80) no-repeat center center / cover",
              }}
            >
              <h2 className="text-warning h1">Local Gems & Hidden Treasures</h2>
              <h5 className="w-50 mx-auto text-light p-2">
                Uncover the best-kept secrets of each destination with the help
                of our local hosts. Whether it's a hidden waterfall, a secret
                beach, or a charming little café, our hosts are eager to share
                their insider knowledge with you.
              </h5>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>

      <section>
        <PopularDestination></PopularDestination>
      </section>

      <section>
        <Packages></Packages>
      </section>

      <section className="pb-5">
        <Container className="py-5">
          <h1 className="text-center text-info pt-5 heading">Our Guides</h1>
          <hr className="p-1 w-25 mx-auto mb-5 rounded-pill text-secondary" />
          <div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              <div className="col">
                <div className="card shadow guide-card">
                  <div className="text-center">
                    <img
                      src="https://centurycitynews-enki.s3.amazonaws.com/wp-content/uploads/2021/03/Chris-Weiland-e1614648969960.jpeg"
                      className="card-img-top img-fluid rounded-circle p-2 guidImg"
                      alt="..."
                    />
                  </div>
                  <div className="card-body text-center">
                    <h4 className="card-title">Alex Turner</h4>
                    <h6>The Nature Explorer</h6>

                    <p>
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
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow guide-card">
                  <div className="text-center">
                    <img
                      src="https://media.licdn.com/dms/image/C5603AQGp13vmdENyjA/profile-displayphoto-shrink_800_800/0/1651048290998?e=2147483647&v=beta&t=stzLe8EeFAau3_RoOGNCC6gKdJULq7Nvnznzt0bm0tQ"
                      className="card-img-top img-fluid rounded-circle p-2 guidImg"
                      alt="..."
                    />
                  </div>
                  <div className="card-body text-center">
                    <h4 className="card-title">Sophia Rodriguez</h4>
                    <h6>The Cultural Connoisseur</h6>
                    <p>
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
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow guide-card">
                  <div className="text-center">
                    <img
                      src="https://i0.wp.com/asiatimes.com/wp-content/uploads/2017/11/student01.jpg?fit=1200%2C788&ssl=1"
                      className="card-img-top img-fluid rounded-circle p-2 guidImg"
                      alt="..."
                    />
                  </div>
                  <div className="card-body text-center">
                    <h4 className="card-title">Jack Thompson</h4>
                    <h6>The Thrill Seeker</h6>
                    <p>
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
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow guide-card">
                  <div className="text-center">
                    <img
                      src="https://d3i6fh83elv35t.cloudfront.net/static/2020/11/west-skipping-harvard-7-1024x683-1024x683.jpg"
                      className="card-img-top img-fluid rounded-circle p-2 guidImg"
                      alt="..."
                    />
                  </div>
                  <div className="card-body text-center">
                    <h4 className="card-title">Emily Chen</h4>
                    <h6>The Wellness Guru</h6>
                    <p>
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
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-3 my-4">
        <Contact></Contact>
      </section>
    </div>
  );
};

export default Home;
