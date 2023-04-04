import React from "react";

//----ICONS IMPORT
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineHttp, MdOutlineContentCopy } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialLinkedin,
} from "react-icons/ti";

// INTERNAL IMPORT
import Style from "./Form.module.css";
import { Button } from "../../components/components-index";

const Form = () => {
  return (
    <div className={Style.Form}>
      <div className={Style.Form_box}>
        <form>
          {/* USERNAME */}
          <div className={Style.Form_box_input}>
            <label htmlFor="name">Username</label>
            <input
              type="text"
              placeholder="shoaib bhai"
              className={Style.Form_box_input_username}
            />
          </div>
          {/* EMAIL */}
          <div className={Style.Form_box_input}>
            <label htmlFor="email">Email</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <HiOutlineMail />
              </div>
              <input type="text" placeholder="Email" />
            </div>
          </div>
          {/* DESCRIPTION */}
          <div className={Style.Form_box_input}>
            <label htmlFor="description">Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              placeholder="something about yourself in few words"
            ></textarea>
          </div>
          {/* WEBSITE */}
          <div className={Style.Form_box_input}>
            <label htmlFor="website">Website</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>
              <input type="text" placeholder="website" />
            </div>
          </div>
          {/* SOCIAL LINK INPUTS */}
          <div className={Style.Form_box_input_social}>
            {/* Facebook */}
            <div className={Style.Form_box_input}>
              <label htmlFor="facebook">Facebook</label>
              <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                  <TiSocialFacebook />
                </div>
                <input type="text" placeholder="http://facebook.com" />
              </div>
            </div>
            {/* Instagram */}
            <div className={Style.Form_box_input}>
              <label htmlFor="instagram">Instagram</label>
              <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                  <TiSocialInstagram />
                </div>
                <input type="text" placeholder="http://instagram.com" />
              </div>
            </div>
            {/* Twitter */}
            <div className={Style.Form_box_input}>
              <label htmlFor="twiiter">Twitter</label>
              <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                  <TiSocialTwitter />
                </div>
                <input type="text" placeholder="http://twitter.com" />
              </div>
            </div>
            {/* Youtube */}
            {/* <div className={Style.Form_box_input}>
              <label htmlFor="youtube">Youtube</label>
              <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                  <TiSocialYoutube />
                </div>
                <input type="text" placeholder="http://youtube.com" />
              </div>
            </div> */}
            {/* LinkedIn */}
            {/* <div className={Style.Form_box_input}>
              <label htmlFor="linkedIn">LinkedIn</label>
              <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                  <TiSocialLinkedin />
                </div>
                <input type="text" placeholder="http://linkedin.com" />
              </div>
            </div> */}
          </div>
          {/* WALLET ADDRESS */}
          <div className={Style.Form_box_input}>
            <label htmlFor="wallet">Wallet Address</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>
              <input type="text" placeholder="0xEA1321314112434211241064" />
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineContentCopy />
              </div>
            </div>
          </div>

          {/* UPLOAD BUTTON */}
          <div className={Style.Form_box_btn}>
            <Button
              btnName="Upload profile"
              handleClick={() => {}}
              classStyle={Style.button}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
