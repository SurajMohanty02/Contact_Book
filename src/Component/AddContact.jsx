import React, { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";

const AddContact = () => {
  const [data, setdata] = useState({
    name: "",
    phone: "",
    email: "",
  });
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
      type: "CONTACT_DETAILS",
      id: shortid.generate(),
      data,
    });
    setdata({ name: "", phone: "", email: "" });
  };
  return (
    <div className="card shadow">
      <div className="card-header">
        Add Contact
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
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
