import React from "react";
import "./PopularDestination.css";

const PopularDestination = () => {
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="heading col-lg-7 col-sm-12 text-secondary">
          Our Top Destinations
        </div>
        <div className="col-lg-5 col-sm-12 pt-3 fw-bold text-secondary">
          Group travelers are passionate about cultural exchange, authentic and
          responsible travel, global adventure, life-changing experiences,
          unforgettable personal stories, and savvy travel with friends or
          family.
        </div>
      </div>
      <div className="row py-5">
        <div className="col-md-4">
          <div className="card bg-dark text-white img-opacity">
            <img
              src="https://cdn-imgix-open.headout.com/dynamic-remarketing/2020/10210.jpg"
              className="card-img"
              alt="..."
            />
            <div className="card-img-overlay p-0">
              <div>
                <div className="d-flex justify-content-between">
                  <h5 className="bg-success p-2 my-3 mx-3">France</h5>
                  <p></p>
                </div>
                <div className="footer m-3">
                  <h3>Eiffel Tower</h3>
                  <h6>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="card bg-dark text-white img-opacity">
            <img
              src="https://digitalnomads.world/wp-content/uploads/2021/01/bali-for-digital-nomads.jpg"
              className="card-img"
              alt="..."
            />
            <div className="card-img-overlay p-0">
              <div>
                <div className="d-flex justify-content-between">
                  <h5 className="bg-success p-2 my-3 mx-3">Indonesia</h5>
                  <p></p>
                </div>
                <div className="footer m-3">
                  <h3>Bali</h3>
                  <h6>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-dark text-white img-opacity">
            <img
              src="https://cdn.mos.cms.futurecdn.net/YMa7Wx2FyjQFUjEeqa72Rm-1200-80.jpg"
              className="card-img"
              alt="..."
            />
            <div className="card-img-overlay p-0">
              <div>
                <div className="d-flex justify-content-between">
                  <h5 className="bg-success p-2 my-3 mx-3">Egypt</h5>
                  <p></p>
                </div>
                <div className="footer m-3">
                  <h3>Pyramid of Giza</h3>
                  <h6>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDestination;
