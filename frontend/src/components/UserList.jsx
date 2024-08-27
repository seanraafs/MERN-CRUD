import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("https://mern-crud-api-sandy.vercel.app/users");
    setUsers(response.data);
  };

  const deleteUser = async (id) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`https://mern-crud-api-sandy.vercel.app/users/${id}`);
          getUsers();
          MySwal.fire("Deleted!", "The user has been deleted.", "success");
        } catch (error) {
          MySwal.fire(
            "Error!",
            "There was an error deleting the user.",
            "error"
          );
        }
      }
    });
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to="/add" className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>
                  <Link
                    to={`/edit/${user._id}`}
                    className="button is-small is-info mr-2"
                  >
                    EDIT
                  </Link>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="button is-small is-danger has-text-white-ter"
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
