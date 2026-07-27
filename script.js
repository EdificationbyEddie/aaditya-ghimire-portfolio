const glow = document.querySelector('.cursor-glow');
const year = document.querySelector('#year');

year.textContent = new Date().getFullYear();

window.addEventListener('pointermove', (event) => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.service-card').forEach((card) => observer.observe(card));

const filterButtons = document.querySelectorAll('.filter-button');
const serviceCards = document.querySelectorAll('.service-card');
const serviceDialog = document.querySelector('.service-dialog');
const dialogTitle = document.querySelector('#service-dialog-title');
const dialogCategory = document.querySelector('#service-dialog-category');
const dialogDescription = document.querySelector('#service-dialog-description');
const dialogLink = document.querySelector('#service-dialog-link');

filterButtons.forEach((button) => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  filterButtons.forEach((filterButton) => filterButton.classList.toggle('is-active', filterButton === button));
  serviceCards.forEach((card) => { card.hidden = filter !== 'all' && card.dataset.category !== filter; });
}));

document.querySelectorAll('.service-open').forEach((button) => button.addEventListener('click', () => {
  const card = button.closest('.service-card');
  dialogTitle.textContent = card.dataset.title;
  dialogCategory.textContent = `Service / ${card.dataset.category}`;
  dialogDescription.textContent = card.dataset.description;
  const isApplication = Boolean(card.dataset.url);
  dialogLink.href = card.dataset.url || 'mailto:ghimirebijaya96@gmail.com?subject=Project%20enquiry';
  dialogLink.textContent = card.dataset.linkLabel || 'Start a conversation';
  dialogLink.target = isApplication ? '_blank' : '';
  dialogLink.rel = isApplication ? 'noopener noreferrer' : '';
  serviceDialog.showModal();
}));

document.querySelector('.dialog-close').addEventListener('click', () => serviceDialog.close());
serviceDialog.addEventListener('click', (event) => { if (event.target === serviceDialog) serviceDialog.close(); });
