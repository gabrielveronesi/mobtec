import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ListaMelhoresImoveis.css'

export default class BestFlatList extends Component {
    render() {

        var flatState = 'Aluguel'
        const title = {
            text: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit ame"
        }

        const settings = {
            infinite: true,
            speed: 1500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoPlay: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };
        return (
            <section className="section-best-estate">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div title={title.text} description={title.description} />
                            <Slider {...settings}>


                                <div className="best-estate">
                                    <div className="best-estate-item">
                                        <div className="best-estate-img-area">
                                            <img className="best-estate-img" src="/img/product1.jpeg" alt="flat" />
                                            <div className={`best-estate-state ${flatState === "Aluguel" ? "bg-green" : "bg-red"}`}>{flatState}</div>
                                        </div>
                                        <div className="best-estate-content">
                                            <h4><Link to="/">Lorem Ipsum</Link></h4>
                                            <span><Link to="/">Loraaaaeam Ipsum</Link></span>
                                        </div>
                                        <div className="best-estate-features">
                                            <div className="d-flex">
                                                <div className="best-estate-feature">
                                                    <i className="fas fa-check-circle"></i>
                                                    <span>3 Beds</span>
                                                </div>
                                                <div className="best-estate-feature">
                                                    <i className="fas fa-check-circle"></i>
                                                    <span>2 Bathrooms</span>
                                                </div>
                                            </div>
                                            <h5 className="best-estate-price">$111111</h5>
                                        </div>
                                    </div>
                                </div>


                                <div className="best-estate">
                                    <div className="best-estate-item">
                                        <div className="best-estate-img-area">
                                            <img className="best-estate-img" src="/img/product1.jpeg" alt="flat" />
                                            <div className={`best-estate-state ${flatState === "For Rent" ? "bg-green" : "bg-red"}`}>{flatState}</div>
                                        </div>
                                        <div className="best-estate-content">
                                            <h4><Link to="/">Lorem Ipsum</Link></h4>
                                            <span><Link to="/">Loraaaaeam Ipsum</Link></span>
                                        </div>
                                        <div className="best-estate-features">
                                            <div className="d-flex">
                                                <div className="best-estate-feature">
                                                    <i className="fas fa-check-circle"></i>
                                                    <span>3 Beds</span>
                                                </div>
                                                <div className="best-estate-feature">
                                                    <i className="fas fa-check-circle"></i>
                                                    <span>2 Bathrooms</span>
                                                </div>
                                            </div>
                                            <h5 className="best-estate-price">$222222</h5>
                                        </div>
                                    </div>
                                </div>


                                <div className="best-estate">
                                    <div className="best-estate-item">
                                        <div className="best-estate-img-area">
                                            <img className="best-estate-img" src="/img/product1.jpeg" alt="flat" />
                                            <div className={`best-estate-state ${flatState === "For Rent" ? "bg-green" : "bg-red"}`}>{flatState}</div>
                                        </div>
                                        <div className="best-estate-content">
                                            <h4><Link to="/">Lorem Ipsum</Link></h4>
                                            <span><Link to="/">Loraaaaeam Ipsum</Link></span>
                                        </div>
                                        <div className="best-estate-features">
                                            <div className="d-flex">
                                                <div className="best-estate-feature">
                                                    <i className="fas fa-check-circle"></i>
                                                    <span>3 Beds</span>
                                                </div>
                                                <div className="best-estate-feature">
                                                    <i className="fas fa-check-circle"></i>
                                                    <span>2 Bathrooms</span>
                                                </div>
                                            </div>
                                            <h5 className="best-estate-price">$333333333</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="best-estate">
                                    <div className="best-estate-item">
                                        <div className="best-estate-img-area">
                                            <img className="best-estate-img" src="/img/product1.jpeg" alt="flat" />
                                            <div className={`best-estate-state ${flatState === "For Rent" ? "bg-green" : "bg-red"}`}>{flatState}</div>
                                        </div>
                                        <div className="best-estate-content">
                                            <h4><Link to="/">Lorem Ipsum</Link></h4>
                                            <span><Link to="/">Loraaaaeam Ipsum</Link></span>
                                        </div>
                                        <div className="best-estate-features">
                                            <div className="d-flex">
                                                <div className="best-estate-feature">
                                                    <i className="fas fa-check-circle"></i>
                                                    <span>3 Beds</span>
                                                </div>
                                                <div className="best-estate-feature">
                                                    <i className="fas fa-check-circle"></i>
                                                    <span>2 Bathrooms</span>
                                                </div>
                                            </div>
                                            <h5 className="best-estate-price">$333333333</h5>
                                        </div>
                                    </div>
                                </div>



                       





                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}