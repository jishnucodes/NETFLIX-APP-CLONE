import React from "react";
import './Footer.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {

    return (
        <div className="footer">
            <Container >
                <Row>
                    <div className="socialMedia-link">
                        <a className="icon" href="https://www.facebook.com/NetflixIN/" target="-blank">
                            <FaFacebookF size={25} />
                        </a>
                        <a className="icon" href="https://www.instagram.com/Netflix_IN/" target="-blank">
                            <FaInstagram size={25} />
                        </a>
                        <a className="icon" href="https://twitter.com/netflixindia" target="-blank">
                            <FaTwitter size={25} />
                        </a>
                        <a className="icon" href="https://www.youtube.com/channel/UCZSNzBgFub_WWil6TOTYwAg" target="-blank">
                            <FaYoutube size={25} />
                        </a>
                    </div>
                    <Col xs={6} md={3} >

                        <div className="description-content">
                            <a href="audiodescription">Audio Description</a>
                            <a href="audiodescription">Audio Description</a>
                            <a href="audiodescription">Audio Description</a>
                        </div>
                    </Col>
                    <Col xs={6} md={3} gx={0} >
                        <div className="description-content">
                            <a href="helpCenter">Help Center</a>
                            <a href="jobs">Jobs</a>
                            <a href="cookiePreferences">Cookie Preferences</a>
                        </div>
                    </Col>
                    <Col xs={6} md={3} >
                        <div className="description-content">
                            <a href="giftCards">Gift Cards</a>
                            <a href="termsOfUse">Terms Of Use</a>
                            <a href="corporateInformation">Corporate Information</a>
                        </div>
                    </Col>
                    <Col xs={6} md={3} >
                        <div className="description-content">
                            <a href="mediaCentre">Media Centre</a>
                            <a href="privacy">Privacy</a>
                            <a href="contactUs">Contact Us</a>
                        </div>
                    </Col>
                    <div className="service-button">
                        <button>Service Code</button>
                    </div>
                    <span className="mt-4 netflix-local">
                        © 1997-2024 Netflix, Inc
                    </span>
                </Row>

            </Container>

        </div>
    )
}
export default Footer;