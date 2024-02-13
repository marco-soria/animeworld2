import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './SearchAnime.css';

const RankingAnime = () => {
  const [animeList, setAnimeList] = useState([]);
  const [selectedSynopsis, setSelectedSynopsis] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSynopsisClick = (synopsis, title) => {
    const cleanedSynopsis = JSON.stringify(synopsis).replace(/\\"/g, '"').replace(/\\n/g, '<br>');
    setSelectedSynopsis(cleanedSynopsis);
    setSelectedTitle(title);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const url = "https://api.jikan.moe/v4/top/anime";
    
    const obtenerAnime = async () => {
      try {
        const response = await fetch(`${url}?limit=12`);
        const data = await response.json();
        setAnimeList(data.data);
      } catch (error) {
        console.error('Error al obtener anime:', error);
      }
    };
    
    obtenerAnime();
  }, []);

  return (
    <section className="container-fluid mb-4">
      <div className="row" id="row-ranking">
        {animeList.map((result, index) => {
          return (
            <div key={index} className="col-md-3 mt-3 g-2">
              <div className="card formbg">
                <img
                  className="card border-0"
                  style={{ maxHeight: '40vh', objectFit: 'cover' }}
                  src={result.images.jpg.large_image_url}
                  alt={result.title}
                />
                <div className="card-body text-center">
                  <h6 className="text-title fs-4" style={{ color: '#9500ff' }}>N. {result.rank}</h6>
                  <h4 className="text-title" style={{ color: '#9500ff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{result.title}</h4>
                  <p className="text-title fs-5">Score: {result.score}</p>
                  <button
                    type="button"
                    className="btn btn-secondary signupbutton"
                    onClick={() => handleSynopsisClick(result.synopsis, result.title)}
                  >
                    Synopsis
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {isModalOpen && (
        <div className="modal fade show" id="synopsisModal" tabIndex="-1" aria-labelledby="synopsisModalLabel" aria-hidden="true" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="synopsisModalLabel">{selectedTitle}</h5>
                <button type="button" className="btn-close" onClick={() => setIsModalOpen(false)} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {/* Mostrar la sinopsis formateada */}
                <p dangerouslySetInnerHTML={{ __html: selectedSynopsis }}></p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export { RankingAnime };




















