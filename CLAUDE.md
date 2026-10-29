# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is an academic portfolio website built with the **al-folio** Jekyll theme. It's designed for academics to showcase their research, publications, projects, and professional information. The site is deployed on GitHub Pages.

## Development Commands

### Docker Setup (Recommended)

```bash
# Pull and run the pre-built Docker image
docker compose pull
docker compose up

# Build and run with custom changes
docker compose up --build

# Use slimmed docker image (<100MB)
docker compose -f docker-compose-slim.yml up
```

The site will be available at `http://localhost:8080`

### Local Setup (Alternative)

```bash
# Install Ruby dependencies
bundle install

# Install Python dependencies for Jupyter notebook support
pip install jupyter

# Serve the site locally
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`

### Code Quality

```bash
# Format code with Prettier (for Liquid templates)
npm run format

# Install npm dependencies
npm install
```

## Architecture & Key Components

### Core Structure

- **Jekyll Static Site Generator**: Converts Markdown/Liquid templates into static HTML
- **Collections**: Organized content types (`_news`, `_projects`, `_posts`, `_pages`)
- **Bibliography Management**: Uses Jekyll Scholar plugin with BibTeX files in `_bibliography/`
- **Theme Customization**: SCSS files in `_sass/` control styling
- **Layouts**: Liquid templates in `_layouts/` define page structures

### Key Files

- `_config.yml`: Main Jekyll configuration - site settings, author info, social links, plugin configuration
- `_bibliography/papers.bib`: BibTeX entries for publications
- `_data/cv.yml`: CV/resume data in YAML format (fallback when JSON not present)
- `assets/json/resume.json`: JSON Resume standard format for CV
- `_pages/*.md`: Main pages (about, publications, projects, etc.)

### Content Management

- **Publications**: Auto-generated from BibTeX entries, supports PDF attachments, code links, abstracts
- **Blog Posts**: Markdown files in `_posts/`, supports Distill-style posts, Jupyter notebooks
- **Projects**: Showcased in grid layout from `_projects/` collection
- **News**: Brief announcements from `_news/` collection displayed on homepage

## Important Configuration

### Deployment Settings

- GitHub Pages deployment requires:
  - Repository name: `<username>.github.io` for user pages
  - Set `url` in `_config.yml` to `https://<username>.github.io`
  - Keep `baseurl` empty for root deployment
  - Enable GitHub Actions with read/write permissions
  - Deploy from `gh-pages` branch

### Theme Features

- Light/Dark mode auto-detection
- Responsive design
- Math rendering (MathJax)
- Code syntax highlighting
- Social media integration
- Google Scholar/ORCID integration
- Search functionality
- Related posts
- RSS feed generation

## Plugin Dependencies

Key Jekyll plugins used:

- `jekyll-scholar`: Bibliography and citation management
- `jekyll-jupyter-notebook`: Jupyter notebook integration
- `jekyll-imagemagick`: Image optimization
- `jekyll-minifier`: Asset minification
- `jekyll-paginate-v2`: Advanced pagination
- `jekyll-sitemap`: Sitemap generation
- `jemoji`: Emoji support

## Asset Management

- Images: `/assets/img/`
- PDFs: `/assets/pdf/`
- JavaScript: `/assets/js/`
- CSS/SCSS: `/assets/css/` and `/_sass/`
- Fonts: `/assets/fonts/` and `/assets/webfonts/`

## Testing & Validation

Before deploying changes:

1. Build site locally to check for Jekyll errors
2. Verify bibliography entries are properly formatted
3. Test responsive design at different screen sizes
4. Check that all internal links work
5. Validate social media preview cards
