import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useHistory } from "react-router-dom";
import ModalPop from "../ModalPop";

const Home = (props) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  const { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:3001/users`);
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUsers();
    window.location.reload(false);
  };

  //edit data

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/users/${user.id}`, user);
    console.log(id);
    console.log(user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(result.data);
  };
  function refreshPage() {
    window.location.reload(false);
    console.log("delete cancel");
  }

  return (
    <>
      <div className="container">
        <div className="py-4">
          <h1>Home Page</h1>

          <table class="table table-sm border shadow">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Email ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <td scope="row">{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    {/* <Link
                      className="btn btn-primary mr-2"
                      exact
                      to={`/users/${user.id}`}
                    >
                      View
                    </Link> */}
                    <ModalPop
                      popname="view"
                      poptitle="USER DATA"
                      popbody={
                        // user
                        <div>
                          <p>
                            <b>id:</b> {user.id}
                          </p>
                          <p>
                            <b>name:</b> {user.name}
                          </p>
                          <p>
                            <b>user name:</b> {user.username}
                          </p>
                          <p>
                            <b>email:</b> {user.email}
                          </p>
                          <p>
                            <b>phone:</b> {user.phone}
                          </p>
                          <p>
                            <b>website:</b> {user.website}
                          </p>
                        </div>
                      }
                    />
                    <ModalPop
                      btnColor="outline-primary"
                      popname="edit"
                      poptitle={user.id}
                      popbody={
                        <form onSubmit={(e) => onSubmit(e)}>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="Enter Your Name"
                              autoComplete="off"
                              name="user"
                              value={user.name}
                              onChange={(e) => onInputChange(e)}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="Enter Your Username"
                              autoComplete="off"
                              name="user"
                              value={user.username}
                              onChange={(e) => onInputChange(e)}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control form-control-lg"
                              placeholder="Enter Your E-mail Address"
                              name="user"
                              value={user.email}
                              onChange={(e) => onInputChange(e)}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="Enter Your Phone Number"
                              name="user"
                              value={user.phone}
                              onChange={(e) => onInputChange(e)}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="Enter Your Website Name"
                              name="user"
                              value={user.website}
                              onChange={(e) => onInputChange(e)}
                              required
                            />
                          </div>
                          <button className="btn btn-warning btn-block">
                            UpdateUser
                          </button>
                        </form>
                      }
                    />

                    {/* <Link
                      className="btn btn-outline-primary mr-2"
                      exact
                      to={`/users/edit/${user.id}`}
                    >
                      Edit
                    </Link> */}

                    <ModalPop
                      btnColor="danger"
                      popname="Delete"
                      popbody={
                        <div>
                          <h4>Delete User ID: {user.id}</h4>
                          <p>Are you sure you want to delete user?</p>
                          <div className="">
                            <button
                              className="btn btn-warning"
                              onClick={refreshPage}
                            >
                              Cancel
                            </button>

                            <button
                              className="btn btn-danger float-right"
                              onClick={() => deleteUser(user.id)}
                            >
                              {" "}
                              Delete
                            </button>
                          </div>
                        </div>
                      }
                    />

                    {/* <Link
                      className="btn btn-danger"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </Link> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
