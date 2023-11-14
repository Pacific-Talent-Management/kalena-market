import Carousel from 'react-bootstrap/Carousel';
import React from "react";

function ImageCarousel() {
    return (
        <div  style={{ display: 'block', width: 700, padding: 30}}>
        <Carousel>
            <Carousel.Item>
                <img src="../images/soldiers/230606-GS113-0002.jpg" width="700px"/>
            </Carousel.Item>
            <Carousel.Item>
                <img src="../images/soldiers/230606-GS113-0003.jpg" width="700px"/>
            </Carousel.Item>
            <Carousel.Item>
                <img src="../images/soldiers/230607-GS113-0005.jpg" width="700px"/>
            </Carousel.Item>
            <Carousel.Item>
                <img src="../images/soldiers/230608-GS113-0003.jpg" width="700px"/>
            </Carousel.Item>
            <Carousel.Item>
                <img src="../images/soldiers/230702-A-GS113-011.jpg" width="700px"/>
            </Carousel.Item>
            <Carousel.Item>
                <img src="../images/soldiers/230702-A-GS113-018.jpg" width="700px"/>
            </Carousel.Item>
            <Carousel.Item>
                <img src="../images/soldiers/230702-A-GS113-027.jpg" width="700px"/>
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default ImageCarousel;