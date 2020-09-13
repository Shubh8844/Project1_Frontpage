import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import "./Banner.css";

export default function Banner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel__main">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9rTky9Jr_fnEiPqEso2uVMIAefJRWAsRwFw&usqp=CAU"
            alt="First slide"
          />
          <Carousel.Caption>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="data:image/jpeg;base64,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"
            alt="Second slide"
          />

          <Carousel.Caption>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJw2okyf5qDpH_5bjCSTM-MysIwtOoNB6qmA&usqp=CAU"
            alt="Third slide"
          />

          <Carousel.Caption>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
