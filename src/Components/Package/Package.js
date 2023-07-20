import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import "./Package.css";

const Package = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/packages")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch();
  }, []);
  const {
    title,
    country,
    city,
    place,
    description,
    time,
    people,
    reviews,
    rating,
    cost,
    image,
    id,
    _id,
  } = props.package;
  const handleDelete = (id) => {
    props.handleDeleteUserService(id);
  };
  return (
    <div className="col">
      <div className="card shadow">
        <div className="card bg-dark text-white">
          <img src={image} className="card-img package-img" alt="..." />
          <div className="card-img-overlay p-0">
            <div>
              <div className="d-flex justify-content-between">
                <p></p>
                <h5 className="bg-success  p-1 my-2">
                  $<span>{cost}</span> / per person
                </h5>
              </div>
              <div className="footer">
                <p className="bg-success my-0  p-2 d-flex justify-content-evenly">
                  <small className=" px-2">
                    <i className="fa-solid fa-user-large"></i> {people}
                  </small>
                  <small>
                    <i className="fa-solid fa-location-dot"></i> {country}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>

          <p className="card-text text-secondary m-0 p-o">
            Location: {place}, {country}
          </p>

          <p className="card-text text-secondary m-0 p-o">{time} nights</p>

          <p className="card-text fw-bold text-secondary pt-2">{description}</p>
        </div>
        <div className="d-flex">
          <Link to={`/details/${_id}`} className="w-50 text-center my-2 link">
            <button className="btn btn-outline-success">
              Book Now <i className="fa-solid fa-arrow-right"></i>
            </button>
          </Link>

          <button
            onClick={() => handleDelete(_id)}
            type="button"
            className="align-self-center btn btn-outline-danger mx-auto"
          >
            Delete <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Package;
