import React, { useEffect, useState } from "react";
import useFirebase from "../../Hook/useFirebase";
import SingleBooked from "../SingleBooked/SingleBooked";

const MyBooking = () => {
  const { user, logOut } = useFirebase();
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    fetch("https://wanderlust-adventures-server.onrender.com/booking")
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);
  const handleDeleteUserService = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?", id);
    if (proceed) {
      const url = `https://wanderlust-adventures-server.onrender.com/booking/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingUsers = booking.filter(
              (userService) => userService._id !== id
            );
            setBooking(remainingUsers);
          }
        });
    }
  };
  const print = () => {
    console.log("hai");
  };

  return (
    <div className="container my-bookings">
      {booking.map((booked) => (
        <SingleBooked
          handleDeleteUserService={handleDeleteUserService}
          print={print}
          key={booked._id}
          booked={booked}
        ></SingleBooked>
      ))}
    </div>
  );
};

export default MyBooking;
