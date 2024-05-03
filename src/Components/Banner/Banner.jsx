import React,{useState,useEffect} from "react";
import { API_Key, imageUrl } from "../../Constants/constants";
import axios from '../../axios' //here we call the customized axios;
import { FaPlay } from "react-icons/fa";
import { CgMoreVerticalO } from "react-icons/cg";


const Banner = () => {

    const [movie, setMovie] = useState();
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_Key}&language=en-US`)
            .then((response) => {
                console.log(response.data.results[0])
                setMovie(response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])

            });

    }, []);

    return (
        <section className="home-interface" style={{ backgroundImage: `url(${movie && imageUrl + movie.backdrop_path})` }}>
            <div className="container-fluid py-3">
                <div className="banner-interface ">
                    <h1 className="movie-header mb-3">{movie ? movie.title : ""}</h1>
                    <h3 className="sub-header text-capitalize mb-3">watch in Tamil, Telugu, Malayalam, Kannada, and Hindi.</h3>
                    <div className="description-content">
                        <p>
                            {
                                movie && movie.overview
                            }
                        </p>
                    </div>
                    <button className="play-button">
                        <span className="play-icon">
                            <FaPlay />
                        </span>Play
                    </button>
                    <button className="more-button">
                        <span className="more-icon">
                            <CgMoreVerticalO />
                        </span>
                        More Info
                    </button>
                </div>
            </div>
        </section >
    )
}
export default Banner;