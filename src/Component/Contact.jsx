import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import "../index.css";
import Avatar from "react-avatar";
import { Checkbox } from "@material-ui/core";
import { Link } from "react-router-dom";
const Contact = () => {
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact);
  console.log(contact);
  const deletecontact = (id) => {
    dispatch({
      type: "DELETE_CONTACT",
      id,
    });
  };
  const UpdateContact = (id) => {
    dispatch({
      type: "EDIT_CONTACT",
      id: id,
    });
  };
  return (
    <div>
      <table className="table shadow ">
        <thead className="bg-danger text-white  text-left ">
          <tr>
            <th>
              <Checkbox color="primary" />
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        {contact
          ? contact.map((info) => (
              <tbody className="text-left" key={info.id}>
                <tr className="bg">
                  <td>
                    <Checkbox />
                  </td>

                  <td>
                    <Avatar name={info.data.name} size="40" round={true} />
                    {info.data.name}
                  </td>
                  <td>{info.data.phone}</td>
                  <td>{info.data.email}</td>
                  <td className="visible">
                    <Link to={`/Edit-Contact/${info.id}`}>
                      <FiEdit
                        fontSize="x-large"
                        className="mr-2"
                        style={{ color: "#6e4aa5", cursor: "pointer" }}
                        onClick={() => UpdateContact(info.id)}
                      />
                    </Link>

                    <MdDelete
                      fontSize="x-large"
                      style={{ color: "#6e4aa5", cursor: "pointer" }}
                      onClick={() => deletecontact(info.id)}
                    />
                  </td>
                </tr>
              </tbody>
            ))
          : ""}
      </table>
    </div>
  );
};

export default Contact;
