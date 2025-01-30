import React, { useRef } from "react";
import Ymap from "../map/Ymap.jsx";

import "./Map.css";

export default function Map() {
  const childRef = useRef();

  return (
    <>
      <section className="map-block">
        <div className="">
          <h2 className="map-block__title">на карте</h2>
          <div className="map-block__controls">
            {/* <button id="pharmacy-btn" className="map-block__controls-button">
              КРАСОТА И ЗДОРОВЬЕ
            </button>
            <button id="shop-btn" className="map-block__controls-button">
              МАГАЗИНЫ
            </button> */}
          </div>
        </div>
        <div className="map-container">
          <Ymap ref={childRef} />
        </div>
      </section>
    </>
  );
}
