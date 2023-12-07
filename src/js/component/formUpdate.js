import React, { useContext, useState, useEffect } from "react";
import { Link, Route, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const FormUpdate = ({ contact_id }) => {
  console.log("This is the form", contact_id);
  const { store, actions } = useContext(Context);
  const [full_name, setFull_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleUpdateContact = (event) => {
    event.preventDefault();
    actions.UpdateContact(contact_id, full_name, email, address, phone);
    navigate("/")
  };

  useEffect(() => {
    handleData()
  }, []);

  const handleData = async () => {
    const getOneContact = await actions.GetContact(contact_id);
    console.log(getOneContact)
    setFull_name(getOneContact.full_name)
    setEmail(getOneContact.email)
    setPhone(getOneContact.phone)
    setAddress(getOneContact.address)

  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="title mt-5">
              <h2>
                <strong>Edit contact</strong>
              </h2>
            </div>

            {/* formulario de contacto */}

            <form onSubmit={handleUpdateContact} className="text-start mb-2">
              <div className="mb-3">
                <label
                  htmlFor="exampleInputText"
                  className="form-label fs-5 text-black"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputText"
                  aria-describedby="textlHelp"
                  placeholder="Full Name"
                  value={full_name}
                  onChange={(event) => {
                    setFull_name(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label fs-5 text-black"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputPhone"
                  className="form-label fs-5 text-black"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="exampleInputPhone"
                  aria-describedby="phoneHelp"
                  placeholder="Enter phone"
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputText1"
                  className="form-label fs-5 text-black"
                >
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputText1"
                  aria-describedby="text1lHelp"
                  placeholder="Enter address"
                  value={address}
                  onChange={(event) => {
                    setAddress(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary w-100">
                  Save
                </button>
              </div>
            </form>
            <div className="mb-3 text-start">
              <Link to={"/"}>
                <p>go back to contacts</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};