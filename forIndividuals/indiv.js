const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-btn.next');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const dotsNav = document.querySelector('.carousel-nav');
    const dots = Array.from(dotsNav.children);

    const slideWidth = slides[0].getBoundingClientRect().width;

    // Arrange the slides next to one another
    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    };
    // slides.forEach(setSlidePosition); // This isn't needed with the flexbox approach

    const moveToSlide = (currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };

    const updateDots = (currentDot, targetDot) => {
        currentDot.classList.remove('current-slide');
        targetDot.classList.add('current-slide');
    };
    
    const updateArrows = (targetIndex) => {
        if (targetIndex === 0) {
            prevButton.classList.add('is-hidden');
            nextButton.classList.remove('is-hidden');
        } else if (targetIndex === slides.length - 1) {
            prevButton.classList.remove('is-hidden');
            nextButton.classList.add('is-hidden');
        } else {
            prevButton.classList.remove('is-hidden');
            nextButton.classList.remove('is-hidden');
        }
    }
    
    // Set initial state
    slides.forEach((slide, index) => {
        slide.style.left = `${slideWidth * index}px`;
    });
    track.style.transform = 'translateX(0px)';
    slides[0].classList.add('current-slide');
    updateArrows(0);


    // When I click left, move slides to the left
    prevButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;
        const currentDot = dotsNav.querySelector('.current-slide');
        const prevDot = currentDot.previousElementSibling;
        const prevIndex = slides.findIndex(slide => slide === prevSlide);

        moveToSlide(currentSlide, prevSlide);
        updateDots(currentDot, prevDot);
        updateArrows(prevIndex);
    });

    // When I click right, move slides to the right
    nextButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;
        const currentDot = dotsNav.querySelector('.current-slide');
        const nextDot = currentDot.nextElementSibling;
        const nextIndex = slides.findIndex(slide => slide === nextSlide);

        moveToSlide(currentSlide, nextSlide);
        updateDots(currentDot, nextDot);
        updateArrows(nextIndex);
    });

    // When I click the nav indicators, move to that slide
    dotsNav.addEventListener('click', e => {
        const targetDot = e.target.closest('button');

        if (!targetDot) return;

        const currentSlide = track.querySelector('.current-slide');
        const currentDot = dotsNav.querySelector('.current-slide');
        const targetIndex = dots.findIndex(dot => dot === targetDot);
        const targetSlide = slides[targetIndex];

        moveToSlide(currentSlide, targetSlide);
        updateDots(currentDot, targetDot);
        updateArrows(targetIndex);
    });




// nav menu: plant and gift
const plantAndGiftMenu = document.getElementById('plantAndGiftMenu');
const plantAndGiftBtn = document.getElementById('plantAndGiftBtn');

// Keep menu positioned right below the navbar to avoid pointer gaps
const navbar = document.querySelector('.nav_cont');
function updateMenuTop() {
  if (navbar && plantAndGiftMenu) {
    const h = navbar.offsetHeight || 100;
    plantAndGiftMenu.style.top = h + 'px';
  }
}
updateMenuTop();
window.addEventListener('resize', updateMenuTop);

// show/hide with hover flag + small delay to tolerate tiny gaps
let hoverTimer = null;
let isHovering = false;
function showMenu() {
  plantAndGiftMenu.classList.remove('d-none');
}
function hideMenuNow() {
  plantAndGiftMenu.classList.add('d-none');
}

function onEnter() {
  isHovering = true;
  if (hoverTimer) {
    clearTimeout(hoverTimer);
    hoverTimer = null;
  }
  showMenu();
}

function onLeave() {
  isHovering = false;
  if (hoverTimer) clearTimeout(hoverTimer);
  // small delay to allow moving between button and menu
  hoverTimer = setTimeout(() => {
    if (!isHovering) hideMenuNow();
  }, 120);
}

// Use mouseenter/mouseleave to avoid event bubbling complexities
if (plantAndGiftBtn && plantAndGiftMenu) {
  plantAndGiftBtn.addEventListener('mouseenter', onEnter);
  plantAndGiftMenu.addEventListener('mouseenter', onEnter);
  plantAndGiftBtn.addEventListener('mouseleave', onLeave);
  plantAndGiftMenu.addEventListener('mouseleave', onLeave);
}
//---------------------------------------------------------------------------------------------------------------
//about us menu
const aboutusBtn = document.getElementById('aboutusBtn');
const aboutusMenu = document.getElementById('aboutusMenu');

// Keep menu positioned right below the navbar to avoid pointer gaps
const abtnavbar = document.querySelector('.nav_cont');
function abtupdateMenuTop() {
  if (abtnavbar && aboutusMenu) {
    const h = abtnavbar.offsetHeight || 100;
    aboutusMenu.style.top = h + 'px';
  }
}
abtupdateMenuTop();
window.addEventListener('resize', abtupdateMenuTop);

// show/hide with hover flag + small delay to tolerate tiny gaps
let abthoverTimer = null;
let abtisHovering = false;
function showMenuAbt() {
  aboutusMenu.classList.remove('d-none');
}
function hideMenuNowAbt() {
  aboutusMenu.classList.add('d-none');
}

function onEnterAbt() {
  abtisHovering = true;
  if (abthoverTimer) {
    clearTimeout(abthoverTimer);
    abthoverTimer = null;
  }
  showMenuAbt();
}

function onLeaveAbt() {
  abtisHovering = false;
  if (abthoverTimer) clearTimeout(abthoverTimer);
  // small delay to allow moving between button and menu
  abthoverTimer = setTimeout(() => {
    if (!abtisHovering) hideMenuNowAbt();
  }, 120);
}

// Use mouseenter/mouseleave to avoid event bubbling complexities
if (aboutusBtn && aboutusMenu) {
  aboutusBtn.addEventListener('mouseenter', onEnterAbt);
  aboutusMenu.addEventListener('mouseenter', onEnterAbt);
  aboutusBtn.addEventListener('mouseleave', onLeaveAbt);
  aboutusMenu.addEventListener('mouseleave', onLeaveAbt);
}
//----------------------------------------------------------------------------------------------------------------
// company menu
const companyMenu = document.getElementById('companyMenu');
const companyBtn = document.getElementById('companyBtn'); 

// Keep menu positioned right below the navbar to avoid pointer gaps
const compnavbar = document.querySelector('.nav_cont');
function compupdateMenuTop() {
  if (compnavbar && companyMenu) {
    const h = compnavbar.offsetHeight || 100;
    companyMenu.style.top = h + 'px';
  }
}
compupdateMenuTop();
window.addEventListener('resize', compupdateMenuTop);

// show/hide with hover flag + small delay to tolerate tiny gaps
let comphoverTimer = null;
let compisHovering = false;
function showMenuComp() {
  companyMenu.classList.remove('d-none');
}
function hideMenuNowComp() {
  companyMenu.classList.add('d-none');
}

function onEnterComp() {
  compisHovering = true;
  if (comphoverTimer) {
    clearTimeout(hoverTimer);
    comphoverTimer = null;
  }
  showMenuComp();
}

function onLeaveComp() {
  compisHovering = false;
  if (comphoverTimer) clearTimeout(comphoverTimer);
  // small delay to allow moving between button and menu
  comphoverTimer = setTimeout(() => {
    if (!compisHovering) hideMenuNowComp();
  }, 120);
}

// Use mouseenter/mouseleave to avoid event bubbling complexities
if (companyBtn && companyMenu) {
  companyBtn.addEventListener('mouseenter', onEnterComp);
  companyMenu.addEventListener('mouseenter', onEnterComp);
  companyBtn.addEventListener('mouseleave', onLeaveComp);
  companyMenu.addEventListener('mouseleave', onLeaveComp);
}