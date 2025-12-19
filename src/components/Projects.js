import React, { useState } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import InterestCard from './InterestCard';
import projectsData from '../data/projects.json';
import '../styles/Body.css';
import '../styles/Info.css';
import '../styles/Projects.css';

function ProjectCard({ project }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const totalImages = project.images.length;

  const liveUrl = String(project['url-access'] ?? '').trim();
  const hasLiveUrl = liveUrl.length > 0;

  const activeImage = project.images[activeImageIndex] ?? null;
  const hasImages = totalImages > 0;
  const canNavigate = totalImages > 1;

  const goPrevious = () => {
    if (!canNavigate) return;
    setActiveImageIndex((index) => (index - 1 + totalImages) % totalImages);
  };

  const goNext = () => {
    if (!canNavigate) return;
    setActiveImageIndex((index) => (index + 1) % totalImages);
  };

  return (
    <article className="project-card" aria-label={`Project: ${project.title}`}>
      <div className="project-title-row" aria-label="Project title">
        <h3 className="project-title">{project.title}</h3>
        <div className="project-links" aria-label="Project links">
          {hasLiveUrl && (
            <a
              className="project-live-link"
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Open live project"
              title="Open live project"
            >
              <LanguageIcon fontSize="small" />
            </a>
          )}
          <a
            className="project-repo-link"
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Open repository on GitHub"
            title="Open repository on GitHub"
          >
            <GitHubIcon fontSize="small" />
          </a>
        </div>
      </div>

      <div className="project-carousel" aria-label={`${project.title} images`}>
        {hasImages && (
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            loading="lazy"
          />
        )}

        <div className="project-carousel-controls" aria-label="Carousel controls">
          <button type="button" onClick={goPrevious} disabled={!canNavigate} aria-label="Previous image">
            <NavigateBeforeIcon fontSize="small" />
            Previous
          </button>
          <button type="button" onClick={goNext} disabled={!canNavigate} aria-label="Next image">
            Next
            <NavigateNextIcon fontSize="small" />
          </button>
        </div>
      </div>

      <p className="project-description">{project.description}</p>

      <div className="project-tech" aria-label="Technologies used">
        <h3>Technologies</h3>
        <div className="interests-grid" aria-label="Project technologies">
          {project.technologies.map((tech) => (
            <InterestCard key={`${project.id}-${tech}`} label={tech} />
          ))}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const projects = projectsData;

  return (
    <main className="body" aria-label="Projects page">
      <section className="content" aria-label="Projects introduction">
        <h2>Projects</h2>
        <p>
          In this section I will detail personal projects I have built using modern technologies. I also include access to the depoloyed projects and the GitHub
          repositories of these projects so you can view their documentation and understand how the code works.
        </p>
      </section>

      <section className="projects-list" aria-label="Projects list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </main>
  );
}

export default Projects;
