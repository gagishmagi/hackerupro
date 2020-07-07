// Tabs Functionality
const tabsBtns = document.querySelectorAll('.tabs__btn');
tabsBtns.forEach( tabBtn => {
  tabBtn.addEventListener('click', () => {

    const tabsContent = document.querySelectorAll('.tabs__content');
    tabsContent.forEach(tabContent => {
      tabContent.classList.remove('tabs__content--active');
    });

    const activeSliders = document.querySelectorAll('.slider');


    if( tabBtn.id === 'blueTeam' ) {
      document.querySelector('#blueTeamContent').classList.add('tabs__content--active');
      const activeateSlider =  document.querySelector('#inBetweenContent .slider');
        activeateSlider.id = 'currentSlider';
    }
    if( tabBtn.id === 'inBetween' ) {
      document.querySelector('#inBetweenContent').classList.add('tabs__content--active');
      const activeateSlider =  document.querySelector('#inBetweenContent .slider');
      activeateSlider.id = 'currentSlider';
      
    }
    if( tabBtn.id === 'redTeam' ) {
      document.querySelector('#redTeamContent').classList.add('tabs__content--active');
      const activeateSlider =  document.querySelector('#inBetweenContent .slider');
      activeateSlider.id = 'currentSlider';
    }
  });
});

// Slider
$(document).ready(function() {
    $('#currentSlider').slick({
        accessibility: true,
        arrows: false,
        mobileFirst: true,
        waitForAnimate: false,
      });
});