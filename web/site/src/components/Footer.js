import React from "react"
import './Footer.css'

const Footer = () => {
    return (
        <section className="footer">

            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <i className="fas fa-home"></i>
                        <span className="footer-other-text d-block mt-3 mb-3">
                        IMOBILIÁRIA VERONESI - Creci. 1234
                        Avenida Siqueira Campos, 960 - Centro 
                        </span>
                        <div className="footer-social">
                            <div className="footer-social-item"><i className="fab fa-facebook"></i></div>
                            <div className="footer-social-item"><i className="fab fa-twitter"></i></div>
                            <div className="footer-social-item"> <i className="fab fa-instagram"></i></div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <p className="footer-title"></p>
                        <ul className="footer-ul">
                     
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div>
                            <p className="footer-title"></p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <p className="footer-title">Menu</p>
                        <ul className="footer-ul">
                            <li>Início</li>
                            <li>Sobre</li>
                            <li>Contato</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer