import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import useFirebase from "../../Hook/useFirebase";
import "./SingleBooked.css";

const SingleBooked = (props) => {
  const { user, logOut } = useFirebase();
  const handleDelete = (id) => {
    props.handleDeleteUserService(id);
  };
  if (props.booked.email === user.email) {
    return (
      <div className="single-booked col-8 mx-auto text-center">
        <div className="my-5">
          <div className="card h-100 border-0 shadow service-cart ">
            <img
              src={props.booked.package.image}
              className="card-img-top img-height"
              alt="..."
            />
            <div className="card-body">
              <h2 className="card-title ts-3 fw-bold">
                {props.booked.package.title}{" "}
              </h2>

              <h4 className="card-title  my-3">
                <span className="fw-bold"> Order ID:</span>{" "}
                <span className="bg-dark text-light px-2">
                  {props.booked.package._id}
                </span>
              </h4>
              <h4 className="card-title my-3 text-danger">
                ${props.booked.package.cost}
              </h4>
              <p className="card-text ts-5">
                {props.booked.package.description}
              </p>
            </div>
            <div className="card-footer bg-body border-0">
              <div className="d-flex justify-content-around my-3">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(props.booked._id)}
                >
                  Delete <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default SingleBooked;
