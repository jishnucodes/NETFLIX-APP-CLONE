import React from "react";
import { useNavigate } from "react-router-dom";
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoIosSearch } from "react-icons/io";
import { useLogginContext } from "../../Context/LoginContext/LoginContext";



const Header = (props) => {

    const { isLogged,style } = useLogginContext();
    const navigate = useNavigate();
   const {clickBack} = props;

    const clickLogin = () => {
        navigate("/login");   
    };
    const clickMovies = () => {
        navigate("/movies");
    }
    const clickTvShows = () => {
        navigate("/tvshows");
    }
    const clickNewAndPopular = () => {
        navigate("/newpopular");
    }

    return (

        <Navbar expand="lg" className="navbar px-4">
            <Container fluid>
                <Navbar.Brand to="#home">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                        className="netflix-logo"
                        alt="Netflix Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-button" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="/" onClick={clickBack}>Home</Nav.Link>
                        <Nav.Link to="/movies" onClick={clickMovies}>Movies</Nav.Link>
                        <Nav.Link to="/tvshows" onClick={clickTvShows}>TV Shows</Nav.Link>
                        <Nav.Link to="/newpopular" onClick={clickNewAndPopular}>New & Popular</Nav.Link>
                        <Nav.Link to="/">My List</Nav.Link>
                        <Nav.Link to="/">Browse by Language</Nav.Link>
                    </Nav>
                    <Nav className="">
                        <Nav.Link to="">
                            <IoIosSearch />
                        </Nav.Link>
                        <Nav.Link to="/">Children</Nav.Link>
                        <Nav.Link to="/" onClick={clickLogin} style={{display:style}} >Login</Nav.Link>
                        
                        {
                            isLogged && (
                                    <Nav.Link to="/">
                                        <img
                                            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
                                            alt="login-avatar"
                                            className="login-avatar"
                                        />
                                    </Nav.Link>
                            )
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Header;