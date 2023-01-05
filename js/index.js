// Description: This file contains the JavaScript code for the index.html page.
const sideNav = document.querySelector('.side-nav');

window.addEventListener('scroll', () => {
 if (window.scrollY > 0) {
  sideNav.classList.add('side-nav--scrolled');
 } else {
  sideNav.classList.remove('side-nav--scrolled');
 }
}
);

const footer = document.querySelector('.footer');
const footerHeight = footer?.offsetHeight;
const footerTop = footer?.offsetTop;
const sideNavHeight = sideNav?.offsetHeight;



const collapseBtn = document.getElementById('collapse');
const mainSection = document.getElementById('main-section');

const collapseBtnSrc = collapseBtn.getAttribute('src');
const iconClose = './assets/close.svg';
const iconOpen = './assets/open.svg';
const sideNavContent = document.getElementById('side-nav-content');

const isMobile = window.matchMedia('(max-width: 768px)').matches;



if (isMobile) {
 collapseBtn.src = iconOpen;
 sideNav.classList.add('hidden');
 collapseBtn.style.opacity = '0.5';
 // collapseBtn.style.border = 'none';
} else {
 collapseBtn.src = iconClose;

}
const collapseAction = () => {
 collapseBtn.style.backgroundColor = 'white';
 console.log('clicked')
 mainSection.classList.toggle('main-section--expanded');
 sideNavContent.classList.toggle('side-nav-content--hidden');
 const sideNavExpanded = sideNav.classList.toggle('hidden')
 if (sideNavExpanded) {
  collapseBtn.src = iconOpen
  collapseBtn.style.opacity = '0.5';
  // collapseBtn.style.backgroundColor = '#E4013A';
  // collapseBtn.style.border = 'none';
 } else {
  collapseBtn.src = iconClose
  collapseBtn.style.opacity = '1';
  // collapseBtn.style.backgroundColor = 'white';
  // collapseBtn.style.border = '1px solid #8B8888';
 }
}

collapseBtn.addEventListener('click', collapseAction);

window.addEventListener('scroll', () => {
 if (window.scrollY + sideNavHeight > footerTop - footerHeight) {
  sideNav.classList.add('side-nav--hidden');
 } else {
  sideNav.classList.remove('side-nav--hidden');
 }
});