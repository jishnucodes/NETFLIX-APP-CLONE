import React from "react";

import "./Home.css"

import{action, animation, comedy, crime, horror, originals, thriller} from '../../urls'


import Header from '../MainNavbar/Header';
import RowPoster from '../RowPoster/RowPoster';
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";




const Home = () => {
    

    return (
        <div>
            <Header />
            <Banner />
            <RowPoster url={originals} title="Netflix Orignal" />
            <RowPoster url={action} title="Action" isSmall />
            <RowPoster url={animation} title="Animation" isSmall />
            <RowPoster url={crime} title="Crime" isSmall />
            <RowPoster url={horror} title="Horror" isSmall />
            <RowPoster url={thriller} title="Thriller" isSmall />
            <RowPoster url={comedy} title="Comedy" isSmall />
            <Footer />
        </div>
    )
}
export default Home;