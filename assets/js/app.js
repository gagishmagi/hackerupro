// Tabs Functionality
function setupTabs() {

  $('.slider').slick({
    accessibility: true,
    arrows: false,
    mobileFirst: true,
    waitForAnimate: false,
  });

  const tabBtns = document.querySelectorAll('.tabs__btn');
  tabBtns.forEach(tabBtn => {
    tabBtn.addEventListener('click', () => {
      const tab         = tabBtn.dataset.forTeam;
      const tabContent  = document.querySelectorAll('.tabs__content');
      const selectedTab = document.querySelector(`.tabs__content[data-team="${tab}"]`);

      tabBtns.forEach(tabBtn => {
        tabBtn.classList.remove('tabs__btn--active');
      });

      tabContent.forEach(content => {
        content.classList.remove('tabs__content--active');
      });

      tabBtn.classList.add('tabs__btn--active');
      selectedTab.classList.add('tabs__content--active');

    });
  });
}


// Slider
$(document).ready(function() {
  setupTabs();
});