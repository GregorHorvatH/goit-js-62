import './style.css';

const getItemtemplate = ({ objectID, title, story_title, url }) => {
  return `<li class="news-item" data-id=${objectID}>
    <a href=${url} target="_blank">${title || story_title}</a>
  </li>`;
};

// https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/pagination/js/
const URL = 'https://hn.algolia.com/api/v1/search';

const refs = {
  form: document.querySelector('.news-form'),
  list: document.querySelector('.news-list'),
  submitButton: document.querySelector('.news-submit'),
  loader: document.querySelector('.news-loader'),
  pagination: document.querySelector('.pagination'),
  line: document.querySelector('.line'),
  error: document.querySelector('.error'),
};

let items = [];
let pages = 0;
let page = 0;
let query = '';

const render = () => {
  const list = items.map(getItemtemplate);

  // refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('beforeend', list.join(''));
};

const renderPagination = () => {
  const buttons = Array(pages)
    .fill()
    .map((_, idx) => {
      return idx === page
        ? `<button class="active" data-page-number=${idx}>${idx}</button>`
        : `<button data-page-number=${idx}>${idx}</button>`;
    });

  refs.pagination.innerHTML = '';
  refs.pagination.insertAdjacentHTML('beforeend', buttons.join(''));
};

const showLoader = () => {
  refs.loader.classList.add('show');
};

const hideLoader = () => {
  refs.loader.classList.remove('show');
};

const lockForm = () => {
  refs.submitButton.setAttribute('disabled', true);
};

const unlockForm = () => {
  refs.submitButton.removeAttribute('disabled');
};

const loadNews = () => {
  refs.error.textContent = '';

  fetch(`${URL}?query=${query}&hitsPerPage=5&page=${page}`)
    .then(resp => {
      if (resp.ok) {
        return resp.json();
      }

      throw new Error('error happened');
    })
    .then(({ hits, nbPages }) => {
      items = hits;
      pages = nbPages;

      render();
      renderPagination();
    })
    .catch(error => {
      refs.error.textContent = error.message;
    })
    .finally(() => {
      hideLoader();
      unlockForm();
    });
};

const handleSubmit = e => {
  const { value } = e.target.elements.query;

  if (value !== query) {
    refs.list.innerHTML = '';
    query = value;
    page = 0;
  }

  e.preventDefault();
  showLoader();
  lockForm();
  loadNews();
};

const handlePageClick = e => {
  refs.list.innerHTML = '';
  page = Number(e.target.dataset.pageNumber);
  loadNews();
};

const options = {
  // root: document.querySelector('.news-list-wrapper'),
  // rootMargin: '0px',
  threshold: 1.0,
};

const handleIntersect = e => {
  const line = e[0];

  if (line.isIntersecting) {
    page += 1;
    loadNews();
  }
};

const observer = new IntersectionObserver(handleIntersect, options);

observer.observe(refs.line);

refs.form.addEventListener('submit', handleSubmit);
refs.pagination.addEventListener('click', handlePageClick);
