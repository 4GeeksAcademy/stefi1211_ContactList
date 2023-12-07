import React, { useContext } from "react";
import { FormContact } from "./formContact.js";
import { FormUpdate } from "./formUpdate.js";
import { Link, Route } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Modal } from "./modal.js";
import { Single } from "../views/single.js";

export const ListContact = () => {
  const { store, actions } = useContext(Context);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row mb-3">
          <div className="col d-flex justify-content-end">
            <div className="button-form m-3">
              <Link to="/demo">
                <button type="button" className="btn btn-primary">
                  Add new contact
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ul className="list-group m-3">
              {store.contacts.map((item, index) => {
                return (
                  <li className="list-group-item" key={index}>
                    <div className="row">
                      <div className="col-2 d-flex justify-content-start">
                        <picture className="m-4">
                          <img
                            src="https://picsum.photos/150/150"
                            alt=""
                            className="rounded-circle"
                          />
                        </picture>
                      </div>
                      <div className="col-7">
                        <div className="infoContact text-start text-white opacity-75 m-4">
                          <h4>{item.full_name}</h4>

                          <p className="mb-1 fs-5 text-secondary">
                            <i className="fa-solid fa-location-dot m-2"></i>
                            {item.address}
                          </p>
                          <p className="mb-1 fs-5 text-secondary">
                            <i className="fa-solid fa-phone m-2"></i>
                            {item.phone}
                          </p>
                          <p className="mb-1 fs-5 text-secondary">
                            <i className="fa-solid fa-envelope m-2"></i>
                            {item.email}
                          </p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="Action m-4 d-flex justify-content-evenly">
                          <Link to={`/single/` + item.id}>
                            <p
                              type="button"
                              className="btn btn-outline-primary"
                            >
                              <i className="fa-solid fa-pencil"></i>
                            </p>
                          </Link>
                          <p
                            type="button"
                            className="btn btn-outline-danger"
                            data-bs-toggle="modal"
                            data-bs-target={`#exampleModal${item.id}`}
                          >
                            <i className="fa-solid fa-trash-can"></i>
                          </p>
                          <Modal
                            id={`exampleModal${item.id}`}
                            contact_id={item.id}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};