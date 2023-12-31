import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const UserUpdate = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const url = `https://wanderlust-adventures-server.onrender.com/users/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleNameChange = (e) => {
    const updatedName = e.target.value;
    const updatedUser = {
      photo: user.photo,
      name: updatedName,
      email: user.email,
    };
    setUser(updatedUser);
  };

  const handleEmailChange = (e) => {
    const updatedEmail = e.target.value;
    const updatedUser = {
      photo: user.email,
      name: user.name,
      email: updatedEmail,
    };
    setUser(updatedUser);
  };
  const handleUpdateUser = (e) => {
    const url = `https://wanderlust-adventures-server.onrender.com/users/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Update Successful");
          setUser({});
          e.target.reset();
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <div className="Banner">
        <div className="container">
          <div className="row">
            <div className="w-50 md-w-75 mx-auto shadow my-5 borderRadius-4">
              <h3 className="text-center my-3 ts-2">Update An Account</h3>
              <div className="w-75 md-w-85 mx-auto my-5">
                <form onSubmit={handleUpdateUser} className="">
                  <div className="form-floating mb-3">
                    <input
                      onChange={handleNameChange}
                      type="text"
                      className="form-control ts-5"
                      placeholder="User Name"
                      value={user.name || ""}
                    ></input>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={handleEmailChange}
                      type="email"
                      className="form-control ts-5"
                      placeholder="Email Address"
                      value={user.email || ""}
                    />
                  </div>
                  <div className="text-center">
                    <input
                      className="btn btn-primary text-center"
                      type="submit"
                      value="Update"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserUpdate;
