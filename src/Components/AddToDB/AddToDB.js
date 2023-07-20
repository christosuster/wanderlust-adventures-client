import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const AddToDB = () => {
  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/packages", data).then((res) => {
      if (res.data.insertedId) {
        alert("Data Added.");
        reset();
      }
    });
  };
  return (
    <div className="container my-5 py-3">
      <h1 className="text-center">Add New Package</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-2 p-4 rounded shadow"
      >
        <input
          type="text"
          className="form-control my-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
          {...register("id", { required: true, maxLength: 20 })}
          placeholder="Package ID"
        />
        <input
          type="text"
          className="form-control my-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
          {...register("title", { required: true, maxLength: 300 })}
          placeholder="Package Name"
        />
        <input
          type="text"
          className="form-control my-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
          {...register("country", { required: true, maxLength: 300 })}
          placeholder="Destination Country"
        />
        <input
          type="text"
          className="form-control my-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
          {...register("place", { required: true, maxLength: 300 })}
          placeholder="Destination City"
        />
        <textarea
          type="text"
          className="form-control my-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
          {...register("description")}
          placeholder="Package Description"
        />
        <input
          type="text"
          className="form-control my-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
          {...register("time", { required: true, maxLength: 300 })}
          placeholder="Number of days"
        />
        <input
          type="text"
          className="form-control my-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
          {...register("people", { required: true, maxLength: 300 })}
          placeholder="Number of People "
        />

        <input
          type="text"
          className="form-control my-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
          {...register("cost", { required: true, maxLength: 300 })}
          placeholder="Price of Package"
        />

        <input
          type="text"
          className="form-control my-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
          {...register("image")}
          placeholder="URL of Image of Package"
        />

        <button type="submit" className="btn btn-primary my-1">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddToDB;
