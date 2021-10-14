import React from "react";
import { Carousel } from "react-bootstrap";

const Header = () => {
  return (
    <div className="px-2" id="home">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.freepik.com/free-photo/cocktail-glasses_144627-34955.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.freepik.com/free-photo/rose-exotic-cocktail-fruit-blue_155003-2051.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://image.freepik.com/free-photo/fresh-cola-drink-with-green-lime_144627-12396.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;
