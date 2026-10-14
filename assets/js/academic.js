(() => {
  const toggle = document.querySelector('.nav-toggle');
  const navigation = document.querySelector('#main-navigation');
  if (toggle && navigation) {
    toggle.hidden = false;
    document.documentElement.classList.add('has-navigation-js');
    const closeMenu = () => toggle.setAttribute('aria-expanded', 'false');
    toggle.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', String(toggle.getAttribute('aria-expanded') !== 'true'));
    });
    navigation.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        toggle.focus();
      }
    });
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.site-header')) closeMenu();
    });
    window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
  }

  const filters = [...document.querySelectorAll('[data-publication-filter]')];
  const publications = [...document.querySelectorAll('[data-publication-topic]')];
  const count = document.querySelector('#publication-count');
  if (filters.length && publications.length) {
    const filterControls = document.querySelector('.publication-filters');
    if (filterControls) filterControls.hidden = false;
    const updateCount = () => {
      const visible = publications.filter((publication) => !publication.hidden).length;
      if (count) count.textContent = `${visible} selected publication${visible === 1 ? '' : 's'}`;
    };
    filters.forEach((filter) => filter.addEventListener('click', () => {
      const topic = filter.dataset.publicationFilter;
      filters.forEach((button) => button.setAttribute('aria-pressed', String(button === filter)));
      publications.forEach((publication) => {
        publication.hidden = topic !== 'all' && publication.dataset.publicationTopic !== topic;
      });
      updateCount();
    }));
    updateCount();
  }
})();
