import React from "react";

const items = [1, 2, 3, 4];
export const Slider = () => {
  return (
    <div className="slider" style={{ "--quantity": "4" }}>
      <div className="item" style={{ "--position": "0" }}>
        <img src="../src/assets/icon.png" alt="" />
      </div>
      <div className="item" style={{ "--position": "1" }}>
        <img src="../src/assets/icon.png" alt="" />
      </div>
      <div className="item" style={{ "--position": "2" }}>
        <img src="../src/assets/icon.png" alt="" />
      </div>
      <div className="item" style={{ "--position": "3" }}>
        <img src="../src/assets/icon.png" alt="" />
      </div>
    </div>
  );
};
