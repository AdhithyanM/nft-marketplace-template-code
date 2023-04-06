import React from "react";

//----ICONS IMPORT
import { TiTick } from "react-icons/ti";

// INTERNAL IMPORT
import Style from "./Subscription.module.css";
import { Button } from "../components/components-index";

const Subcription = ({ el, i }) => {
  return (
    <div className={Style.subscriptionBox}>
      <div className={Style.subscriptionBox_box}>
        <span className={Style.subscriptionBox_box_span}>{el.plan}</span>
        <small className={Style.subscriptionBox_box_small}>
          {el.popular || ""}
        </small>
        <p className={Style.subscriptionBox_box_price}>{el.price}</p>

        <div className={Style.subscriptionBox_box_info}>
          {el.service.map((el, i) => (
            <p className={Style.subscriptionBox_box_info_para} key={i + 1}>
              <span>
                <TiTick />
              </span>
              {el}
            </p>
          ))}
        </div>

        <Button
          btnName="Submit"
          handleClick={() => {}}
          classStyle={Style.button}
        />
      </div>
    </div>
  );
};

export default Subcription;
