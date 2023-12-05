import Carousel from "react-bootstrap/Carousel";
import React from "react";

function ImageCarousel() {
  return (
    <div style={{ display: "block", width: 580, padding: 30 }}>
      <Carousel>
        <Carousel.Item>
          <img src="../images/soldiers/230702-A-GS113-011.jpg" height="350px" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="../images/soldiers/230606-GS113-0002.jpg" height="350px" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="../images/soldiers/230606-GS113-0003.jpg" height="350px" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="../images/soldiers/230607-GS113-0005.jpg" height="350px" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="../images/soldiers/230608-GS113-0003.jpg" height="350px" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="../images/soldiers/230702-A-GS113-018.jpg" height="350px" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="../images/soldiers/230702-A-GS113-027.jpg" height="350px" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
