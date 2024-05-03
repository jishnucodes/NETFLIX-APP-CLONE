import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/MainNavbar/Header";
import RowPoster from "../../Components/RowPoster/RowPoster";
import{action, animation, comedy, crime, horror, originals, thriller} from '../../urls'
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";



const Movies = () => {

    

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    }

    return (
        <>
            <Header clickBack = {handleClick} />
            <Banner />
            
            <RowPoster url={originals} title="Netflix Orignal" />
            <RowPoster url={action} title="Action" isSmall />
            <RowPoster url={animation} title="Animation" isSmall />
            <RowPoster url={crime} title="Crime" isSmall />
            <RowPoster url={horror} title="Horror" isSmall />
            <RowPoster url={thriller} title="Thriller" isSmall />
            <RowPoster url={comedy} title="Comedy" isSmall />
            <Footer />
        </>
    )
}
export default Movies;