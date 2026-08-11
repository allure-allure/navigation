const faqList = document.querySelector('.faq-list');

if (faqList) {
  const items = [...faqList.querySelectorAll('details')];
  items.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      items.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
}
