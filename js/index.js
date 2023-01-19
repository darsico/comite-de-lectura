const sideNav = document.querySelector('.side-nav');

// window.addEventListener('scroll', () => {
//  if (window.scrollY > 0) {
//   sideNav.classList.add('side-nav--scrolled');
//  } else {
//   sideNav.classList.remove('side-nav--scrolled');
//  }
// }
// );

const footer = document.querySelector('.footer');
const footerHeight = footer?.offsetHeight;
const footerTop = footer?.offsetTop;
const sideNavHeight = sideNav?.offsetHeight;

const collapseBtn = document.getElementById('collapse');
const mainSection = document.getElementById('main-section');

// const collapseBtnSrc = collapseBtn.getAttribute('src');
const iconClose = './assets/close.svg';
const iconOpen = './assets/open.svg';
const sideNavContent = document.getElementById('side-nav-content');

// const isMobile = window.matchMedia('(max-width: 768px)').matches;

// if (isMobile) {
//  // collapseBtn.src = iconOpen;
//  sideNav.classList.add('hidden');
//  // collapseBtn.style.opacity = '0.5';
// } else {
//  // collapseBtn.src = iconClose;
// }
const collapseAction = () => {
 collapseBtn.style.backgroundColor = 'white';
 console.log('clicked')
 mainSection.classList.toggle('main-section--expanded');
 sideNavContent.classList.toggle('side-nav-content--hidden');
 const sideNavExpanded = sideNav.classList.toggle('hidden')
 if (sideNavExpanded) {
  collapseBtn.src = iconOpen
  collapseBtn.style.opacity = '0.5';
 } else {
  collapseBtn.src = iconClose
  collapseBtn.style.opacity = '1';
 }
}

// collapseBtn.addEventListener('click', collapseAction);

window.addEventListener('scroll', () => {
 if (window.scrollY + sideNavHeight > footerTop - footerHeight) {
  sideNav.classList.add('side-nav--hidden');
 } else {
  sideNav.classList.remove('side-nav--hidden');
 }
});

const menuBtn = document.getElementById('menu-btn');
const menuCtn = document.getElementById('menu-ctn');
const outLayer = document.getElementById('out-layer');
const menuCloseBtn = document.getElementById('menu-close-btn');

const closeMenu = () => {
 menuCtn.classList.toggle('hidden');
 document.body.style.overflow = 'auto';
}

const openMenu = () => {
 menuCtn.classList.toggle('hidden');
 document.body.style.overflow = 'hidden';
}

menuCloseBtn.addEventListener('click', closeMenu);
menuBtn.addEventListener('click', openMenu);
outLayer.addEventListener('click', closeMenu);


const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
 tab.addEventListener('click', () => {
  const target = document.querySelector(tab.dataset.tabTarget)
  tabContents.forEach(tabContent => {
   tabContent.classList.remove('active')
  })
  tabs.forEach(tab => {
   tab.classList.remove('border-b-2')
  })
  tab.classList.add('border-b-2')
  target.classList.add('active')
 })
})