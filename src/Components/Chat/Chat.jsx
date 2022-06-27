import React from "react";
import "./chat.css";

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
          <i class="fa-solid fa-caret-down fa-xs"></i>
          LEAGUE (0)
        </div>
        <div className="style-status box-content">
          <i class="fa-solid fa-caret-down fa-xs"></i>
          LOL + (0)
        </div>
        <div className="style-status box-content">
          <i class="fa-solid fa-caret-down fa-xs"></i>
          OFFLINE (3)
        </div>
      </div>
      </span>
      <div className="footer-status">
        <div className="box-icon">
        <i className="fa-solid fa-message"></i>
        </div>
        <div className="box-icon">
        <i class="fa-solid fa-scroll"></i>
        </div>
        <div className="box-icon">
        <i class="fa-solid fa-microphone"></i>
        </div>
        <div className="box-version">
        V12.10
        </div>
        <div className="box-icon">
        <i className="fa-solid fa-bug"></i>
        </div>
      </div>
    </div>
  );
}
