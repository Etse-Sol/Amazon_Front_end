import React from 'react'
import { IoMdMenu } from "react-icons/io";
import classes from "./header.module.css";

const LowerHeader = () => {
  return (
    <div className={classes.lower_container}>
      <ul>
        <li>
          <IoMdMenu />
          <p>All</p>
        </li>
        <li> Todays's Deals</li>
        <li>Costumer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader
