const mediaQuery = window.matchMedia('(max-width: 425px)');
const mainNav = document.getElementById('mainNav');
const mainNavLi = mainNav.children;
const mobileNav = document.getElementById('mobileNav');
const mobileNavLi = mobileNav.children;

window.addEventListener('resize', () => {
  if ( window.innerWidth < 425 ) {
    for (let i = 0; i < mainNavLi.length; i++) {
      mainNavLi[i].style.display = 'none';
    }
    for (let i = 0; i < mobileNavLi.length; i++) {
      mobileNavLi[i].style.display = 'none';
    }
  };
})
