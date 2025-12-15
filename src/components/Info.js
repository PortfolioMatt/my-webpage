import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Rating from '@mui/material/Rating';
import '../styles/Info.css';

function InterestCard({ label }) {
  return (
    <div className="interest-card" aria-label={`Interest: ${label}`}>
      {label}
    </div>
  );
}

function TopItemCard({ imageSrc, title, description, rating, opinion }) {
  return (
    <div className="top-item-card" aria-label={title}>
      <div className="top-item-avatar" aria-label={`${title} image`}>
        <img src={imageSrc} alt={title} loading="lazy" />
      </div>

      <div className="top-item-content">
        <div className="top-item-header">
          <h3 className="top-item-title">{title}</h3>
          <Rating value={rating} readOnly max={5} size="small" />
        </div>

        <p className="top-item-description">{description}</p>
        <p className="top-item-opinion">
          <strong>Opinion:</strong> {opinion}
        </p>
      </div>
    </div>
  );
}

function Info() {
  const [selected, setSelected] = useState('personal');

  const personalInterests = {
    items: ['Music'],
  };

  const profileImageSrc = `${process.env.PUBLIC_URL}/images/Imagen CV (1).jpg`;

  // Temporary sample data (later we can source from a .json)
  const topVideoGames = [
    {
      id: 'game-1',
      title: 'Hollow Knight',
      imageSrc: profileImageSrc,
      description: 'Metroidvania with tight combat and beautiful atmosphere.',
      rating: 5,
      opinion: 'The exploration + music is top tier, and the difficulty feels fair.',
    },
  ];

  const topMovies = [
    {
      id: 'movie-1',
      title: 'Interstellar',
      imageSrc: profileImageSrc,
      description: 'Sci‑fi with emotional storytelling and stunning visuals.',
      rating: 5,
      opinion: 'It always hits—soundtrack, pacing, and scale are incredible.',
    },
  ];

  return (
    <main className="info">
      <div className="info-top" aria-label="Info selection">
        <ButtonGroup variant="contained" size="medium" aria-label="Info toggle">
          <Button
            disabled={selected === 'personal'}
            variant={selected === 'personal' ? 'contained' : 'outlined'}
            onClick={() => setSelected('personal')}
          >
            Personal Info
          </Button>
          <Button
            disabled={selected === 'professional'}
            variant={selected === 'professional' ? 'contained' : 'outlined'}
            onClick={() => setSelected('professional')}
          >
            Professional Info
          </Button>
        </ButtonGroup>
      </div>

      {selected === 'professional' ? (
        <div className="info-panels" aria-label="Professional info panels">
          <section className="info-half info-left" aria-label="Info left panel" />
          <section className="info-half info-right" aria-label="Info right panel" />
        </div>
      ) : (
        <section className="info-single" aria-label="Personal info section">
          <div className="personal-card" aria-label="Personal info card">
            <div className="personal-photo" aria-label="Profile photo">
              <img src={profileImageSrc} alt="Imagen CV" loading="lazy" />
            </div>

            <div className="personal-details" aria-label="Personal description">
              <h2>About me</h2>
              <p>
                Here I will write a brief description about myself, my interests, and what motivates me.
              </p>

              <h2>Personal interests</h2>
              <div className="interests-grid" aria-label="Personal interests">
                {personalInterests.items.map((interest) => (
                  <InterestCard key={interest} label={interest} />
                ))}
              </div>
            </div>
          </div>

          <div className="personal-tops" aria-label="Personal tops">
            <h2>My top 5 videogames</h2>
            <div className="top-items" aria-label="Top videogames">
              {topVideoGames.map((item) => (
                <TopItemCard
                  key={item.id}
                  imageSrc={item.imageSrc}
                  title={item.title}
                  description={item.description}
                  rating={item.rating}
                  opinion={item.opinion}
                />
              ))}
            </div>

            <h2>My top 5 movies</h2>
            <div className="top-items" aria-label="Top movies">
              {topMovies.map((item) => (
                <TopItemCard
                  key={item.id}
                  imageSrc={item.imageSrc}
                  title={item.title}
                  description={item.description}
                  rating={item.rating}
                  opinion={item.opinion}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default Info;
