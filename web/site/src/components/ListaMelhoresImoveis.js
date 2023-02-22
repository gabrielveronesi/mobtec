import React from "react";
import BestFlatItem from "./ListaMelhoresImoveisItem"

function ListaMelhoresImoveis() {

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


        <div>
            <section className="section-best-estate">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* <Title title={title.text} description={title.description} /> */}
                            
                                <BestFlatItem flatState="For Rent" />
                                <BestFlatItem flatState="For Sale" />
                                <BestFlatItem flatState="For Rent" />
                                <BestFlatItem flatState="For Rent" />
                                <BestFlatItem flatState="For Sale" />
                                <BestFlatItem flatState="For Rent" />
                          
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ListaMelhoresImoveis;
