import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useFirebase from "../../Hook/useFirebase";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const { user, logOut } = useFirebase();
  const [data, setData] = useState([]);

  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.package = itemDetail[0];
    console.log(data);
    axios.post("http://localhost:5000/booking", data).then((res) => {
      if (res.data.insertedId) {
        alert(
          "Booking Added. You can see your booking in My Booking or Dashboard page. Thank you"
        );
        reset();
      }
    });
  };

  useEffect(() => {
    fetch("http://localhost:5000/packages")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch();
  }, []);

  console.log(data);

  const itemDetail = data.filter((td) => td._id === id);

  return (
    <div>
      <div
        id="show"
        style={{
          minHeight: "450px",
          backgroundImage: `url(${itemDetail[0]?.image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <section className="container">
          <div className="detail-footer pb-3">
            <img src="{itemDetail[0]?.image}" alt="" />
            <h1>{itemDetail[0]?.title}</h1>
            <h4>
              {itemDetail[0]?.place}, {itemDetail[0]?.country}
            </h4>
            <h4>{itemDetail[0]?.time} nights</h4>
            <h4 className="p-1 my-2 border-danger border-bottom d-inline-block">
              <span className="text-danger">$</span>
              {itemDetail[0]?.cost} / per person
            </h4>
          </div>
        </section>
      </div>
      <section className="container py-5 my-5">
        <Row className="align-items-center mx-auto">
          <Col sm={7} className="mx-auto">
            <div className="slogan mx-auto text-center">
              <h1 className="text-success">{itemDetail[0]?.title}</h1>
              <h5 className="text-secondary">{itemDetail[0]?.description}</h5>
              <br />
              <br />
            </div>
            <div className="pt-5">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="my-2 p-4 rounded shadow"
              >
                <div className="mb-3">
                  <h2 className="text-center">Book Now</h2>
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label mt-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                    {...register("name", { required: true, maxLength: 40 })}
                    placeholder="Your Name"
                  />
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label mt-2"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                    {...register("phone", { required: true, maxLength: 40 })}
                    placeholder="Your Phone Number"
                  />
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label mt-2"
                  >
                    Email address
                  </label>
                  <input
                    value={user.email || ""}
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    {...register("email", { required: true, maxLength: 40 })}
                    placeholder="email"
                  />
                </div>
                <div className="row mb-3 text-danger"></div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Details;
