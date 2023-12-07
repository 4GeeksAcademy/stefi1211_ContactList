import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { FormContact } from "../component/formContact.js";
import { FormUpdate } from "../component/formUpdate.js";
import { ListContact } from "../component/listContact.js";

export const Home = () => (
  <div className="text-center mt-5">
    <ListContact />
  </div>
);