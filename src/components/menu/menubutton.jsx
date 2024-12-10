import React, { useState } from 'react';
import './menu.css';

function Button({ content, buttonText }) {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <button className="menu-button" onClick={openPopup}>{buttonText}</button>
      {isPopupOpen && (
        <div className="menupopup-background">
          <div className="menupopup">
            <div className="popup-content">
              {content}
              <button onClick={closePopup}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Button;





