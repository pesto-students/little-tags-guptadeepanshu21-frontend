import React, { useState } from "react";
import "./styles.css";

const PopUp = (props) => {
  const { content, children } = props;
  const [isOpen, setIsOpen] = useState(true);

  const closePopUp = () => {
    setIsOpen(false);
  };

  return isOpen ? (
    <div className="popup">
      <div className="popup-content">
      <button  className="close-btn" onClick={closePopUp}>X</button>
        <div class="content">{content}</div>
        {
          children
        }
      </div>
    </div>
  ) : (
    ""
  );
};

export default PopUp;
