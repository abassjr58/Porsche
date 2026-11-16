import pink from "../assets/slider/pink.jpg";
import blue from "../assets/slider/blue.jpg";
import yellow from "../assets/slider/yellow.jpg";
import grey from "../assets/slider/grey.jpg";
import green from "../assets/slider/green.jpg";
import brown from "../assets/slider/brown.jpg";
import light from "../assets/slider/light.jpg";
import { Carousel } from "react-bootstrap";




function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
       <img src={pink} alt="" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={blue} alt="" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={yellow} alt="" />
      </Carousel.Item>

 <Carousel.Item>
        <img src={grey} alt="" />
      </Carousel.Item>

 <Carousel.Item>
        <img src={green} alt="" />
      </Carousel.Item>

 <Carousel.Item>
        <img src={brown} alt="" />
      </Carousel.Item>

 
    </Carousel>
  );
}

export default Slider;