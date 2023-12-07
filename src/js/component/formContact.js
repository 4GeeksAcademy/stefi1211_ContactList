import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";


export const FormContact = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate()
  const [full_name, setFull_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAdrres] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [touchedFields, setTouchedFields] = useState([]);

  const handleCreateContact = async (event) => {
    event.preventDefault();

    // Check if all fields are non-empty before proceeding
    if (full_name && email && phone && address) {
      actions.ContactsList();
      actions.CreateContactBook(full_name, email, phone, address);
      navigate("/");
    }
  };

  const handleBlur = (fieldName) => {
    if (!touchedFields.includes(fieldName)) {
      setTouchedFields([...touchedFields, fieldName]);
    }
  };

  const isFieldInvalid = (fieldName) => {
    return touchedFields.includes(fieldName) && !eval(fieldName);
  };

  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="mt-5 text-white fw-semibold fs-1">
              <h2>Add a new contact</h2>
            </div>

            <form className="text-start mt-5 mb-2" onSubmit={handleCreateContact}>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputText"
                  className="form-label fs-5 text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className={`form-control ${isFieldInvalid("full_name") ? "is-invalid" : ""}`}
                  id="exampleInputText"
                  placeholder="Full Name"
                  value={full_name}
                  onChange={(event) => {
                    setFull_name(event.target.value);
                  }}
                  onBlur={() => handleBlur("full_name")}
                  required
                />
                {isFieldInvalid("full_name") && (
                  <div className="invalid-feedback">Please enter your full name.</div>
                )}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label fs-5 text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control ${isFieldInvalid("email") ? "is-invalid" : ""}`}
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  onBlur={() => handleBlur("email")}
                  required
                />
                {isFieldInvalid("email") && (
                  <div className="invalid-feedback">Please enter your email.</div>
                )}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputPhone"
                  className="form-label fs-5 text-white"
                >
                  Phone
                </label>
                <input
                  type="phone"
                  className={`form-control ${isFieldInvalid("phone") ? "is-invalid" : ""}`}
                  id="exampleInputPhone"
                  placeholder="Enter phone"
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value);
                  }}
                  onBlur={() => handleBlur("phone")}
                  required
                />
                {isFieldInvalid("phone") && (
                  <div className="invalid-feedback">
                    Please enter a valid phone number.
                  </div>
                )}
              </div>
              <div className="mb-5">
                <label
                  htmlFor="exampleInputText1"
                  className="form-label fs-5 text-white"
                >
                  Address
                </label>
                <input
                  type="text"
                  className={`form-control ${isFieldInvalid("address") ? "is-invalid" : ""}`}
                  id="exampleInputText1"
                  placeholder="Enter address"
                  value={address}
                  onChange={(event) => {
                    setAdrres(event.target.value);
                  }}
                  onBlur={() => handleBlur("address")}
                  required
                />
                {isFieldInvalid("address") && (
                  <div className="invalid-feedback">
                    Please enter your address.
                  </div>
                )}
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-dark w-100">
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