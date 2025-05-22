const items = document.querySelectorAll('.faq-item');

items.forEach(item => {
  const button = item.querySelector('.faq-question');

  button.addEventListener('click', () => {
    items.forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
        i.querySelector('.icon').textContent = '+';
      }
    });

    const isActive = item.classList.contains('active');
    item.classList.toggle('active');
    item.querySelector('.icon').textContent = isActive ? '+' : '−';
  });
});
