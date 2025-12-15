import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Rating from '@mui/material/Rating';
import topVideoGamesData from '../data/topVideoGames.json';
import topMoviesData from '../data/topMovies.json';
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

  const toScore = (value) => {
    const parsed = typeof value === 'number' ? value : parseFloat(String(value));
    return Number.isFinite(parsed) ? parsed : 0;
  };

  const personalInterests = {
    items: [
      'Music',
      'Movies',
      'TV shows',
      'Video games',
      'Programming',
      'Logic',
      'Dungeons & Dragons',
      'Drawing',
      'Combat sports',
      'AI',
      'Information technology',
      'Data management',
      'Writing'
    ],
  };

  const profileImageSrc = `${process.env.PUBLIC_URL}/images/Imagen CV (1).jpg`;
  const cvPdfSrc = `${process.env.PUBLIC_URL}/images/CV Mateo 2025 - English.pdf`;

  const professionalStack = {
    categories: [
      {
        title: 'Programming languages',
        items: ['Python', 'C#', 'C++', 'Javascript', 'HTML + CSS', 'XML', 'Java', 'Typescript'],
      },
      {
        title: 'Database management',
        items: ['SQL / NoSQL', 'MongoDB', 'PostgreSQL', 'MySQL'],
      },
      {
        title: 'Tools and Frameworks',
        items: [
          'Odoo',
          'Blazor',
          'React',
          'React Native',
          'Excel',
          'NodeJS',
          'Django Rest Framework',
          'PowerBI',
        ],
      },
      {
        title: 'General Skills',
        items: [
          'Strong familiarity with SCRUM methodology',
          'Process analysis and design',
          'Object-Oriented Programming (OOP)',
          'Software design patterns',
          'UX/UI design',
          'RESTful API development',
        ],
      },
    ],
  };

  const professionalExperience = [
    {
      id: 'exp-quanam-jr-software-developer',
      role: 'JR Software Developer',
      company: 'Quanam Uruguay',
      dates: 'March 2023 - August 2025',
      mode: 'Hybrid/Remote',
      bullets: [
        'Backend feature development in Python within the Odoo framework, including business logic, automations, and validations.',
        'Construction of interfaces, views, and reports using XML, ensuring alignment with functional requirements.',
        'UX/UI design and frontend development with React and JavaScript for an AI-powered virtual assistant delivered to the Canelones Departmental Government.',
        'Data integration and modeling using PostgreSQL.',
        'Collaboration in multidisciplinary teams applying agile methodologies to deliver scalable and robust solutions.',
        'Participation in ERP projects for sectors such as retail, funeral services, and the public sector, adapting developments to specific business needs.',
      ],
    },
    {
      id: 'exp-quanam-data-analytics-consultant',
      role: 'Data & Analytics Consultant',
      company: 'Quanam Uruguay',
      dates: 'March 2023 - August 2025',
      mode: 'Hybrid/Remote/International',
      bullets: [
        'Development of data connectors for Power BI using Power Query M, integrating sources such as IBM Planning Analytics.',
        'Design and construction of data models, databases, and pipelines on Azure platforms for high-demand ERP systems (including Coppel Mexico).',
        'Implementation of automated scripts for data management, cleansing, and maintenance.',
        'Creation of business reports and interactive dashboards using Power BI Desktop.',
        'Presentation of technical solutions to clients and use of modern approaches for the delivery of assigned projects.',
        'Collaboration with international, multidisciplinary teams to ensure the quality of analytical solutions.',
      ],
    },
  ];

  const topVideoGames = [...topVideoGamesData].sort((a, b) => toScore(b.score) - toScore(a.score));

  const topMovies = [...topMoviesData].sort((a, b) => toScore(b.score) - toScore(a.score));

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
          <section className="info-half info-left" aria-label="Info left panel">
            <div className="professional-left" aria-label="Professional summary and stack">
              <div className="professional-header" aria-label="Professional header">
                <div className="professional-photo" aria-label="Professional photo">
                  <img src={profileImageSrc} alt="Imagen CV" loading="lazy" />
                </div>

                <div className="professional-summary" aria-label="Professional summary">
                  <h2>Professional Summary</h2>
                  <p>
                    I am a software developer currently studying for a Bachelor’s degree in Information
                    Systems at ORT University Uruguay, and I am in my third year of the program. My
                    primary interests are software development and problem solving through the use of
                    modern technologies. I stand out for my ability to learn autonomously, my analytical
                    thinking, strong oral communication skills, and my focus on delivering efficient
                    solutions.
                  </p>
                </div>

                <div className="download-cv-row" aria-label="Download CV">
                  <Button
                    className="download-cv"
                    variant="contained"
                    component="a"
                    href={cvPdfSrc}
                    download="CV Mateo 2025 - English.pdf"
                  >
                    Download CV
                  </Button>
                </div>
              </div>

              <div className="stack-section" aria-label="Work stack">
                <h2>Work stack</h2>
                <div className="stack-grid" aria-label="Stack categories">
                  {professionalStack.categories.map((category) => (
                    <div key={category.title} className="stack-category" aria-label={category.title}>
                      <h3>{category.title}</h3>
                      <div className="interests-grid" aria-label={`${category.title} items`}>
                        {category.items.map((item) => (
                          <InterestCard key={`${category.title}-${item}`} label={item} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="info-half info-right" aria-label="Info right panel">
            <div className="experience-section" aria-label="Professional experience">
              <h2>Professional experience</h2>
              <div className="experience-list" aria-label="Experience list">
                {professionalExperience.map((experience) => (
                  <div
                    key={experience.id}
                    className="experience-item"
                    aria-label={`${experience.role} - ${experience.company}`}
                  >
                    <h3 className="experience-role">{experience.role} - {experience.company}</h3>
                    <p className="experience-meta">
                      {experience.dates} ({experience.mode})
                    </p>
                    <ul className="experience-bullets" aria-label={`${experience.role} responsibilities`}>
                      {experience.bullets.map((bullet) => (
                        <li key={`${experience.id}-${bullet}`}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
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
                My name is Mateo Arias, I'm 23 years old and I live in Montevideo/Uruguay, I'm a software developer who is studying the Bachelor's Degree in Systems at Universidad ORT. I’m someone who gets energy from being close to my friends, always trying to show up for them, listening, and genuinely caring.
                Music is a constant for me: I use it to focus, reset, and match the mood of whatever I’m doing, and I’m always
                planning the next step to keep my projects moving forward. Professionally, I love logical problem-solving that fixes
                real inefficiencies and turns messy situations into clear, reliable solutions. I’m growing toward full‑stack
                development, and lately I’ve also been curious about working with AI models and what they can unlock in products.
                I value honesty, respect, empathy, and clarity, and I do my best work in an organized environment that rewards
                autonomy and gives frequent, thoughtful feedback. I handle pressure well without leaving things to the last minute,
                staying pragmatic and efficient while paying attention to detail, and no matter where I am, I keep moving.
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
            <h2>My top 6 movies</h2>
            <div className="top-items" aria-label="Top movies">
              {topMovies.map((item) => (
                <TopItemCard
                  key={item.id}
                  imageSrc={item.imageUrl}
                  title={item.name}
                  description={item.description}
                  rating={toScore(item.score)}
                  opinion={item.opinion}
                />
              ))}
            </div>
            <h2>My top 6 videogames</h2>
            <div className="top-items" aria-label="Top videogames">
              {topVideoGames.map((item) => (
                <TopItemCard
                  key={item.id}
                  imageSrc={item.imageUrl}
                  title={item.name}
                  description={item.description}
                  rating={toScore(item.score)}
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
