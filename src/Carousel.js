import React, { Component } from "react";
import Slider from "react-slick";
import Img1 from "./assets/gallery/15.jpeg";
import Img2 from "./assets/gallery/1.jpeg";
import Img3 from "./assets/gallery/2.jpeg";
import Img4 from "./assets/gallery/3.jpeg";
import Img5 from "./assets/gallery/4.jpeg";
import Img6 from "./assets/gallery/5.jpeg";
import Img7 from "./assets/gallery/6.jpeg";
import Img8 from "./assets/gallery/7.jpeg";
import Img9 from "./assets/gallery/8.jpeg";
import Img10 from "./assets/gallery/9.jpeg";
import Img11 from "./assets/gallery/10.jpeg";
import Img12 from "./assets/gallery/11.jpeg";
import Img13 from "./assets/gallery/12.jpeg";
import Img14 from "./assets/gallery/13.jpeg";
import Img15 from "./assets/gallery/14.jpeg";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      speed: 2000,
      autoplaySpeed: 0,
      cssEase: "linear",

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="slider">
        <Slider {...settings}>
          <div className="">
            <img className="img-fluid" src={Img1} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={Img2} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={Img3} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={Img4} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={Img5} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={Img6} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={Img7} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={Img8} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={Img9} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={Img10} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={Img11} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={Img12} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={Img13} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={Img14} alt="" />
          </div>
          <div className="">
            <img className="img-fluid" src={Img15} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
