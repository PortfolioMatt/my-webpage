import React, { useState } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import TextField from '@mui/material/TextField';
import InterestCard from './InterestCard';
import projectsData from '../data/projects.json';
import '../styles/Body.css';
import '../styles/Info.css';
import '../styles/Projects.css';

function ProjectCard({ project, activeFilters }) {
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
            <InterestCard
              key={`${project.id}-${tech}`}
              label={tech}
              className={
                Array.isArray(activeFilters) && activeFilters.length > 0
                  ? activeFilters.some((filter) => String(tech).toLowerCase().includes(filter))
                    ? 'interest-card--highlight'
                    : undefined
                  : undefined
              }
            />
          ))}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const projects = projectsData;
  const [filterInput, setFilterInput] = useState('');
  const [filters, setFilters] = useState([]);

  const addFilter = () => {
    const nextFilter = filterInput.trim();
    if (!nextFilter) return;

    setFilters((currentFilters) => {
      const normalizedNext = nextFilter.toLowerCase();
      const alreadyExists = currentFilters.some(
        (existingFilter) => existingFilter.toLowerCase() === normalizedNext,
      );

      return alreadyExists ? currentFilters : [...currentFilters, nextFilter];
    });

    setFilterInput('');
  };

  const resetFilters = () => {
    setFilters([]);
    setFilterInput('');
  };

  const removeFilter = (filterToRemove) => {
    const normalizedTarget = String(filterToRemove).trim().toLowerCase();
    if (!normalizedTarget) return;

    setFilters((currentFilters) =>
      currentFilters.filter(
        (existingFilter) => String(existingFilter).trim().toLowerCase() !== normalizedTarget,
      ),
    );
  };

  const normalizedFilters = filters
    .map((filter) => String(filter).trim().toLowerCase())
    .filter(Boolean);

  const filteredProjects = normalizedFilters.length
    ? projects.filter((project) => {
        const title = String(project.title ?? '').toLowerCase();
        const technologies = Array.isArray(project.technologies) ? project.technologies : [];
        const normalizedTechnologies = technologies.map((tech) => String(tech).toLowerCase());

        return normalizedFilters.every((filter) => {
          const matchesTitle = title.includes(filter);
          const matchesTech = normalizedTechnologies.some((tech) => tech.includes(filter));
          return matchesTitle || matchesTech;
        });
      })
    : projects;

  return (
    <main className="body" aria-label="Projects page">
      <section className="content" aria-label="Projects introduction">
        <h2>Projects</h2>
        <p>
          In this section I will detail personal projects I have built using modern technologies. I also include access to the depoloyed projects and the GitHub
          repositories of these projects so you can view their documentation and understand how the code works.
        </p>
      </section>

      <section className="projects-filter" aria-label="Projects filters">
        <div className="projects-filter-controls" aria-label="Filter controls">
          <TextField
            id="outlined-basic"
            label="Filter by technology or project name"
            variant="outlined"
            className="projects-filter-input"
            value={filterInput}
            onChange={(event) => setFilterInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
                addFilter();
              }
            }}
            fullWidth
          />
          <button
            className="projects-filter-button projects-filter-add"
            type="button"
            onClick={addFilter}
            disabled={!filterInput.trim()}
          >
            Add filter
          </button>

          {filters.length > 0 && (
            <button
              className="projects-filter-button projects-filter-reset"
              type="button"
              onClick={resetFilters}
            >
              Reset filters
            </button>
          )}
        </div>

        {filters.length > 0 && (
          <div className="projects-filter-active" aria-label="Active filters">
            <p className="projects-filter-hint">
              Active filters (click any to remove):
            </p>
            <div className="interests-grid" aria-label="Filters list">
              {filters.map((filter) => (
                <InterestCard
                  key={`filter-${filter}`}
                  label={filter}
                  onClick={() => removeFilter(filter)}
                  title="Click to remove filter"
                />
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="projects-list" aria-label="Projects list">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} activeFilters={normalizedFilters} />
          ))
        ) : (
          <p className="projects-empty" role="status">
            There are no projects that meet the filter criteria
          </p>
        )}
      </section>
    </main>
  );
}

export default Projects;
