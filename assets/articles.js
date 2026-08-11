document.querySelectorAll('[data-filter]').forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach((item) => item.classList.toggle('is-active', item === button));
    document.querySelectorAll('.material-card').forEach((card) => card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.category !== filter));
  });
});
