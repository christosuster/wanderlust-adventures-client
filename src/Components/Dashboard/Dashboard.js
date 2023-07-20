import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    fetch("https://wanderlust-adventures-server.onrender.com/booking")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch();
  }, []);
  let count = 0;
  const handleDeleteUserService = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?", id);
    console.log(id);
    if (proceed) {
      const url = `https://wanderlust-adventures-server.onrender.com/booking/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log(id);
            alert("deleted successfully");
            const remainingUsers = Data.filter(
              (userService) => userService._id !== id
            );
            setData(remainingUsers);
          }
        });
    }
  };
  return (
    <div className="container mx-auto my-10 all-bookings">
      <div className="table">
        <table>
          <tr>
            <th>User</th>
            <th>Package</th>
            <th>Price</th>
            <th>Photo</th>
            <th>Delete</th>
          </tr>

          {Data.map((userData) => (
            <tr key={userData._id}>
              <td>
                <h4 className="text-success">{userData.name}</h4>
                <br />
                <h6>{userData.email}</h6>
              </td>
              <td>
                <h4>{userData.package.title}</h4>
              </td>
              <td>
                <h4>{userData.package.cost}</h4>
              </td>
              <td>
                <img src={userData.package.image} alt="" width={200} />
              </td>
              <td>
                <button
                  type="button"
                  className="align-self-center btn btn-outline-danger my-1"
                  onClick={() => handleDeleteUserService(userData._id)}
                >
                  <small>Delete</small>
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
