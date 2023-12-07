import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FormUpdate } from "../component/formUpdate.js";

export const Single = (props) => {
  const { store, actions } = useContext(Context);

  const params = useParams();
  const contact_id = params.theid;
  return (
    <div className="text-center">
      <FormUpdate contact_id={contact_id} />
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};

