import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import shortid from "shortid";
import Contact from "./Contact";

const EditContact = () => {
  const selected = useSelector((state) => state.selected);
  console.log(selected);

  const [data, setdata] = useState({
    name: selected.data.name,
    phone: selected.data.phone,
    email: selected.data.email,
  });
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const handelinput = (e) => {
    let { name, value } = e.target;
    setdata((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handelsubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "UPDATE_CONTACT",
      data,
      id,
    });
    setdata({ name: "", phone: "", email: "" });
  };
  return (
    <div className="card shadow">
      <div className="card-header">
        Update Contact
        <form className="card-body" onSubmit={handelsubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              onChange={handelinput}
              value={data.name}
              className="form-control"
              placeholder="Enter The Name"
            />
          </div>
          <div className="form-group">
            <input
              type="num"
              name="phone"
              onChange={handelinput}
              value={data.phone}
              className="form-control"
              placeholder="Enter The Phone No"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              onChange={handelinput}
              value={data.email}
              className="form-control"
              placeholder="Enter The Email"
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
