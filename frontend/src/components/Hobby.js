import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import travel1 from "../assets/img/travel1.jpeg";
import travel2 from "../assets/img/travel2.jpeg";
import travel3 from "../assets/img/travel3.jpeg";
import travel4 from "../assets/img/travel4.jpeg";
import travel5 from "../assets/img/travel5.jpeg";
import travel6 from "../assets/img/travel6.jpeg";

import football1 from "../assets/img/football1.jpeg";
import football2 from "../assets/img/football2.jpeg";
import football3 from "../assets/img/football3.jpeg";
import football4 from "../assets/img/football4.jpeg";
import football5 from "../assets/img/football5.jpeg";
import football6 from "../assets/img/football6.jpeg";

import hiking1 from "../assets/img/hiking1.jpeg";
import hiking2 from "../assets/img/hiking2.jpeg";
import hiking3 from "../assets/img/hiking3.jpeg";

import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Hobby = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 5000, // Adjust the speed as needed
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        nextArrow: <img src={arrow1} alt="arrow" />,
        prevArrow: <img src={arrow2} alt="arrow" />
    };

    const images = {
        football: [
            football1,
            football2,
            football3,
            football4,
            football5,
            football6,
        ],
        travel: [
            travel1,
            travel2,
            travel3,
            travel4,
            travel5,
            travel6,
            hiking1,
            hiking2,
            hiking3
        ],
    };

    const renderCarousel = (images, category) => (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index} className="item">
                    <img src={image} alt="Hobby" className={category === 'football' ? '' : 'hobby-image'} />
                </div>
            ))}
        </Slider>
    );

    return (
        <section className="skill" id="hobby">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Hobby</h2>
                            <p style={{ marginBottom: '2px' }}>In my free time, I love playing football, traveling, and hiking.</p>
                            <p style={{ marginTop: '2px' }}>Fun fact: I've traveled to 10 countries in the past one year.</p>
                            <div className="hobby-bx wow zoomIn">
                                <div className="hobby-section">
                                    <h3 style={{ marginBottom: '10px', marginTop: "10px" }}>Football</h3>
                                    {renderCarousel(images.football, 'football')}
                                </div>

                                <div className="hobby-section">
                                    <h3 style={{ marginBottom: '10px', marginTop: "10px" }}>Travel</h3>
                                    {renderCarousel(images.travel, 'travel')}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>

    );
};
