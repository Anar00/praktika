import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./main.scss";
const Main = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
      <div className="popular">
        <div className="contanier">
          <div className="row">
            <div className="col">
              <div className="section_title">
                <div className="xet"></div>
                <h1>Popular Courses</h1>
              </div>
            </div>
          </div>
          <div className="course_boxes">
            <div className="course_box">
              <div className="card">
                <img
                  src="https://preview.colorlib.com/theme/course/images/course_1.jpg.webp"
                  alt=""
                />
                <div className="card-body">
                  <div className="card-title">
                    <b>A complete guide to design</b>
                  </div>
                  <div className="card-text">
                    Adobe Guide, Layes, Smart Objects etc...
                  </div>
                </div>
                <div className="price-box">
                  <div className="course_author_image">
                    <img
                      src="https://preview.colorlib.com/theme/course/images/author.jpg.webp"
                      alt=""
                    />
                  </div>
                  <div className="course_author_name">
                    Michael Smith,
                    <span>Author</span>
                  </div>
                  <div className="course_price">
                    <span>$29</span>
                  </div>
                </div>
              </div>
              <div className="card">
                <img
                  src="https://preview.colorlib.com/theme/course/images/course_1.jpg.webp"
                  alt=""
                />
                <div className="card-body">
                  <div className="card-title">
                    <b>A complete guide to design</b>
                  </div>
                  <div className="card-text">
                    Adobe Guide, Layes, Smart Objects etc...
                  </div>
                </div>
                <div className="price-box">
                  <div className="course_author_image">
                    <img
                      src="https://preview.colorlib.com/theme/course/images/author.jpg.webp"
                      alt=""
                    />
                  </div>
                  <div className="course_author_name">
                    Michael Smith,
                    <span>Author</span>
                  </div>
                  <div className="course_price">
                    <span>$29</span>
                  </div>
                </div>
              </div>
              <div className="card">
                <img
                  src="https://preview.colorlib.com/theme/course/images/course_1.jpg.webp"
                  alt=""
                />
                <div className="card-body">
                  <div className="card-title">
                    <b>A complete guide to design</b>
                  </div>
                  <div className="card-text">
                    Adobe Guide, Layes, Smart Objects etc...
                  </div>
                </div>
                <div className="price-box">
                  <div className="course_author_image">
                    <img
                      src="https://preview.colorlib.com/theme/course/images/author.jpg.webp"
                      alt=""
                    />
                  </div>
                  <div className="course_author_name">
                    Michael Smith,
                    <span>Author</span>
                  </div>
                  <div className="course_price">
                    <span>$29</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="register">
        <div className="container-fluid">
          <div className="row-eq-height">
            <div className="nopadding">
              <div className="register_section">
                <div className="register_content">
                  <h1>
                    Register now and get a discount
                    <span>50%</span> discount until 1 January
                  </h1>
                  <p>
                    In aliquam, augue a gravida rutrum, ante nisl fermentum
                    nulla, vitae tempor nisl ligula vel nunc. Proin quis mi
                    malesuada, finibus tortor fermentum. Aliquam, augue a
                    gravida rutrum, ante nisl fermentum nulla, vitae tempo.
                  </p>
                  <button>
                    <b>Register Now</b>
                  </button>
                </div>
              </div>
            </div>
            <div className="nopadding">
              <div className="search_section"></div>
              <div className="search_background"></div>
              <div className="search_content">
                <h1>Search for your course</h1>
                <form className="search_form">
                  <input
                    id="search_form_name"
                    type="text"
                    placeholder="Course Name"
                    required="required"
                    data-error="Course name is required."
                  />
                  <input
                    id="search_form_category"
                    type="text"
                    placeholder="Category"
                  />
                  <input
                    id="search_form_category"
                    type="text"
                    placeholder="Category"
                  />
                  <button
                    id="search_submit_button"
                    type="submit"
                    value="Submit"
                  >
                    search course
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section_title ">
                <div className="xet"></div>
                <h1>Our Services</h1>
              </div>
            </div>
          </div>
            <div className="services-contanier">
          <div className="services_row">
            <div className="service_item">
              <div className="icon_container">
                <img
                  src="https://preview.colorlib.com/theme/course/images/earth-globe.svg"
                  alt=""
                />
              </div>
            </div>
            <h3>Online Courses</h3>
            <p>
              In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
              vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
              finibus tortor fermentum.
            </p>
          </div></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
