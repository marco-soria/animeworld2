import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './RankingAnime.css';

const RankingAnime = () => {
    const [animeList, setAnimeList] = useState([]);
    const [selectedSynopsis, setSelectedSynopsis] = useState('');
    const [selectedTitle, setSelectedTitle] = useState('');

    const handleSynopsisClick = (synopsis, title) => {
        const cleanedSynopsis = synopsis.replace(/\\"/g, '"').replace(/\\n/g, '<br>');
        setSelectedSynopsis(cleanedSynopsis);
        setSelectedTitle(title);
    };

    useEffect(() => {
        const obtenerAnime = async () => {
            const url = "https://api.jikan.moe/v4/top/anime?limit=12";
            try {
                const response = await fetch(url);
                const data = await response.json();
                setAnimeList(data.data);
            } catch (error) {
                console.error('Error fetching anime:', error);
            }
        };

        obtenerAnime();
    }, []);

    return (
        <section className="container-fluid mb-4">
            <div className="row " id="row-ranking">
                <div className="col-md-12 d-flex align-items-center" style={{border: 'solid 3px'}}>
                    <i className="fa-sharp fa-solid fa-star fa-xl mb-2" style={{color: '#C21292'}}></i>
                    <h2 className="fs-2">&#160;Ranking&#160;</h2>
                    <i className="fa-sharp fa-solid fa-star fa-xl mb-2" style={{color: '#C21292'}}></i>
                </div>
            </div>

            <div className="row">
                {animeList.map((anime, index) => (
                    <div className="col-md-3 mt-3 g-2" key={index}>
                        <div className="card formbg">
                            <img
                                className="card-img-top"
                                style={{maxHeight: '40vh', objectFit: 'cover'}}
                                src={anime.images.jpg.large_image_url}
                                alt={anime.title}
                            />
                            <div className="card-body text-center">
                                <h6 className="text-title fs-4" style={{color: '#9500ff'}}>N. {anime.rank}</h6>
                                <h4 className="text-title" style={{color: '#9500ff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{anime.title}</h4>
                                <p className="text-title fs-5">Score: {anime.score}</p>
                                <button
                                    type="button"
                                    className="btn btn-primary signupbutton"
                                    data-bs-toggle="modal"
                                    data-bs-target="#synopsisModal"
                                    onClick={() => handleSynopsisClick(anime.synopsis, anime.title)}
                                >
                                    Synopsis
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="modal fade" id="synopsisModal" tabIndex="-1" aria-labelledby="synopsisModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="synopsisModalLabel">{selectedTitle}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" id="synopsisContent">
                        <p dangerouslySetInnerHTML={{ __html: selectedSynopsis }}></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { RankingAnime };