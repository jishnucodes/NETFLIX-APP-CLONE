import React, { useState, useEffect } from "react";
import "./RowPoster.css"
import axios from "../../axios"
import Youtube from "react-youtube"
import { API_Key, imageUrl } from "../../Constants/constants";
import { RxCrossCircled } from "react-icons/rx";


const RowPoster = (props) => {

    const [movies, setMovies] = useState([])
    const [UrlId, setUrlId] = useState('')

    useEffect(() => {
        axios.get(props.url)
            .then((response) => {
                console.log(response.data)
                setMovies(response.data.results)
            })
            .catch(err => {
                alert("Network error")
            })
    }, []);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleMovieVideoEnter = (id) => {
        console.log(id);
        axios.get(`movie/${id}/videos?api_key=${API_Key}`)
            .then(response => {
                if (response.data.results.length !== 0) {
                    setUrlId(response.data.results[0])
                }
                else {
                    console.log("Array is Empty...")
                }
            })
    }

    const handleMovieVideoLeave = () => {
        setUrlId(null);
    }

    return (
        <div className="movie-row">
            <div className="row">
                <h1>{props.title}</h1>
                <div className="posters">
                    {
                        movies.map((obj) => {
                            return (
                                <img
                                    onClick={() => handleMovieVideoEnter(obj.id)}
                                    src={`${imageUrl + obj.backdrop_path}`}
                                    alt="salar-img"
                                    className={props.isSmall ? "smallPoster-img" : "poster-img img-fluid"}
                                    key={obj.id} />
                            );
                        })
                    }
                </div>
                {
                    UrlId &&
                    <div className="video-displayer" onClick={handleMovieVideoLeave}>
                        <RxCrossCircled />
                        <Youtube videoId={UrlId.key} opts={opts} />
                    </div>
                }
            </div>
        </div>
    )
}
export default RowPoster;