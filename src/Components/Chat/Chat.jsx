import React from "react";
import "./chat.css";

import darius from "../../Images/LOL/darius.jpg";
import katarina from "../../Images/LOL/kat.jpg";
import diana from "../../Images/LOL/diana.png";

import backD from "../../Images/LOL/back-darius.jpg";
import iconD from "../../Images/LOL/back-darius.png";

import imgModal1 from "../../Images/LOL/kat-modal.jpg";
import imgModal2 from "../../Images/LOL/diana-modal.png";
import imgIcon1 from "../../Images/LOL/kat-border.png";
import imgIcon2 from "../../Images/LOL/diana-border.png";


export default function Chat() {
  return (
    <div className="container-chat">
      <span>
        <div className="box-social">
          <div className="style-status">SOCIAL</div>
          <div className="box-social-icon">
            <i className="fa-solid fa-user-plus"></i>
            <i className="fa-solid fa-list"></i>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="container-status">
          <div className="style-status box-content">
            <i className="fa-solid fa-caret-down fa-xs"></i>
            LEAGUE (0)
          </div>
          <div className="style-status box-content">
            <i className="fa-solid fa-caret-down fa-xs"></i>
            LOL + (0)
          </div>
          <div className="style-status box-content">
            <i className="fa-solid fa-caret-down fa-xs"></i>
            OFFLINE (3)
          </div>
          <div>
            <div className="info-friend info-darius">
              <div className="box-img-radius">
                <div className="modal-left">
                  <div className="modal-container-left">
                    <img src={backD} alt="" className="img-back-darius" />
                  </div>
                  <div className="modal-footer-left">
                    <div className="user-status-modal">
                      <i className="fa-solid fa-circle"></i> Online
                    </div>
                  </div>
                  <div className="box-img-icon-left">
                    <img src={iconD} alt="" className="img-icon-d" />
                    <div className="modal-info-left">
                      <div className="modal-name-left">Red Stars</div>
                      <div className="modal-title-left">Bianca Pampana</div>
                    </div>
                  </div>
                  <div></div>
                </div>
                <img src={darius} alt="" className="img-darius" />
              </div>
              <div className="box-friend">
                <div className="user-name-friend">Red Stars</div>
                <div className="user-status">Online</div>
              </div>
            </div>
            <div className="info-friend info-katarina">
              <div className="box-img-radius">
              <div className="modal-left">
                  <div className="modal-container-left">
                    <img src={imgModal1} alt="" className="img-back-darius" />
                  </div>
                  <div className="modal-footer-left">
                    <div className="user-status-modal-offline">
                      <i className="fa-solid fa-circle"></i> Offline
                    </div>
                  </div>
                  <div className="box-img-icon-left">
                    <img src={imgIcon1} alt="" className="img-icon-d" />
                    <div className="modal-info-left">
                      <div className="modal-name-left">Blue Stars</div>
                      <div className="modal-title-left">Main MID</div>
                    </div>
                  </div>
                  <div></div>
                </div>
                <img src={katarina} alt="" className="img-darius" />
              </div>
              <div className="box-friend">
                <div className="user-name-friend">Blue Stars</div>
                <div className="user-status-friend">Offline</div>
              </div>
            </div>
            <div className="info-friend info-diana">
              <div className="box-img-radius">
              <div className="modal-left">
                  <div className="modal-container-left">
                    <img src={imgModal2} alt="" className="img-back-darius" />
                  </div>
                  <div className="modal-footer-left">
                    <div className="user-status-modal-offline">
                      <i className="fa-solid fa-circle"></i> Offline
                    </div>
                  </div>
                  <div className="box-img-icon-left">
                    <img src={imgIcon2} alt="" className="img-icon-d" />
                    <div className="modal-info-left">
                      <div className="modal-name-left">White Stars</div>
                      <div className="modal-title-left">A lua nova está chegando</div>
                    </div>
                  </div>
                  <div></div>
                </div>
                <img src={diana} alt="" className="img-darius" />
              </div>
              <div className="box-friend">
                <div className="user-name-friend">White Stars</div>
                <div className="user-status-friend">Offline</div>
              </div>
            </div>
          </div>
        </div>
      </span>
      <div className="footer-status">
        <div className="box-icon">
          <i className="fa-solid fa-message"></i>
        </div>
        <div className="box-icon">
          <i className="fa-solid fa-scroll"></i>
        </div>
        <div className="box-icon">
          <i className="fa-solid fa-microphone"></i>
        </div>
        <div className="box-version">V12.10</div>
        <div className="box-icon">
          <i className="fa-solid fa-bug"></i>
        </div>
      </div>
    </div>
  );
}
