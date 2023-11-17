import React from "react";
import style from "./Commentary.module.css";
import "./Commentary.css"
import user from "../../../src/assets/img/user.png";

const Commentary = () => {
  return (
    <div className={style.containerCommentary} id="services">
      <div className={style.subcontainer}>
        <div className={style.titleContainer}>
          <h2 className="blueComentary">What</h2>
          <h2 className={style.red}> People Say </h2>
        </div>
        {/* <p className="descComment">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
          viverra
        </p>
        <p className="descComment">parturient diam sagittis nec cras.</p> */}
      </div>
      <div className={style.containerComments}>
        <div className={style.flexUserComment}>
          <div className="containerCards">
            <p className={style.paraf}>
              The location is very good and the hotel has an excellent area for guests.
            </p>
            <span>★★★★★</span>
            <span className={style.arrow}></span>
          </div>
          <img src={user} alt="" />
          <h2 className="h2Commentary">Jane Cooper</h2>
        </div>

        <div className={style.flexUserComment}>
          <div className="containerCards">
            <p className={style.paraf}>
              Very friendly staff, good rooms, breakfast and services offered.
            </p>
            <span>★★★★★</span>
            <span className={style.arrow}></span>
          </div>
        </div>
        <div className={style.flexUserComment}>
          <div className="containerCards">
            <p className={style.paraf}>
              What stands out from my stay is the friendliness of the staff, all very friendly.
            </p>
            <span>★★★★★</span>
            <span className={style.arrow}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commentary;