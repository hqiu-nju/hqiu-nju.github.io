# Hao (Harry) Qiu’s homepage

Academic portfolio at [hqiu-nju.github.io](https://hqiu-nju.github.io), built with Jekyll for GitHub Pages.

## Edit the site

- `_pages/about.md`: homepage, research overview, SCEPTer feature, and personal background.
- `_pages/research.md`: research details and project links.
- `_pages/cv.md`: experience, education, and awards.
- `_data/selected_publications.yml`: selected papers, newest first. Each entry has a title, authors, year, venue, topic (`frb` or `xray`), first-author flag, ADS link, verification source, and summary.
- `_pages/publications.html`: the publication archive. Topic filtering is optional; all papers remain readable without JavaScript.
- `_layouts/academic.html`: shared navigation, metadata, and footer.
- `assets/css/academic.css` and `assets/js/academic.js`: responsive design, mobile menu, and publication filters.
- `_config.yml`: site URL, profile and project links, timezone, and output exclusions.

The About aliases (`/about/`, `/about.html`), CV alias (`/resume`), and original `/year-archive/` address are preserved. `/publications/` is a selected list; the NASA ADS library and Google Scholar links provide the full publication record.

## Preview locally

With Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll serve --config _config.yml,_config.dev.yml
```

Open the local URL printed by Jekyll. For a production check:

```sh
bundle exec jekyll build --safe
```

GitHub Pages builds the site from the configured publishing branch. Review and merge the homepage pull request to publish the changes through the existing Pages setup.

The previous AcademicPages / Minimal Mistakes theme and demonstration files remain in the repository. Sample posts, teaching, talks, portfolios, and demonstration pages are excluded from the published output in `_config.yml`. The main pages use the independent `academic` layout and have no external JavaScript or font dependencies.

Original theme code is retained under its [MIT license](LICENSE).
