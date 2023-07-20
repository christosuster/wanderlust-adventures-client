import React, { useEffect, useState } from "react";
import Package from "../Package/Package";
import "./Packages.css";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("https://wanderlust-adventures-server.onrender.com/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  const handleDeleteUserService = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?", id);
    console.log(id);
    if (proceed) {
      //   const url = `https://wanderlust-adventures-server.onrender.com/users/${id}`;
      fetch(
        `https://wanderlust-adventures-server.onrender.com/packages/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log(id);
            alert("deleted successfully");
            const remainingUsers = packages.filter(
              (userService) => userService._id !== id
            );
            setPackages(remainingUsers);
          }
        });
    }
  };
  return (
    <div className="container my-4">
      <div className="text-center">
        <h1 className="heading text-primary">POPULAR PACKAGES</h1>
        <h5 className="w-50 mx-auto">
          Explore our most popular travel packages that have captured the hearts
          of wanderers worldwide
        </h5>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 py-5">
        {packages.map((plrPackage) => (
          <Package
            handleDeleteUserService={handleDeleteUserService}
            package={plrPackage}
            key={plrPackage.id}
          ></Package>
        ))}
      </div>
    </div>
  );
};

export default Packages;
