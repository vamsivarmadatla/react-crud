import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3001/users`, user);
    history.push("/");
    window.location.reload(false);
  };
  //https://jsonplaceholder.typicode.com/users
  //http://localhost:3001/users

  return (
    <div className="container">
      <div className="mx-auto shadow">
        <h2 className="text-center">add user</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              autoComplete="off"
              placeholder="enter your fullname"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="enter your username"
              autoComplete="off"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email ID</label>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="enter your email"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="enter your number"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <label>Website</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="enter your webste"
              name="website"
              value={website}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
