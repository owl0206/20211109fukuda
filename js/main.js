const target = document.getElementById("drawer-menu");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById("drawer-menu-nav");
  nav.classList.toggle('in');
});

