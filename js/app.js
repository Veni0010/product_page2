// document.addEventListener('mousemove', e => {
// 	document.body.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;`
// })
const header = document.getElementById('mainHeader');
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    if (scrollTop > header.offsetHeight) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
  const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});