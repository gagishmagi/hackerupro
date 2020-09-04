// Tabs Functionality
function setupTabs() {
  const tabBtns = document.querySelectorAll('.tabs__btn');
  tabBtns.forEach(tabBtn => {
    tabBtn.addEventListener('click', () => {
      const tab         = tabBtn.dataset.forTeam;
      const tabContent  = document.querySelectorAll('.tabs__content');
      const selectedTab = document.querySelector(`.tabs__content[data-team="${tab}"]`);
      const rootStyle = document.documentElement.style;


      // $('.slider').slick('unslick').slick('init');


    if( tab === 'blue' ) {
      rootStyle.setProperty(`--color-teams`, '#01adf9');
    } else if( tab === 'between' ) {
      rootStyle.setProperty(`--color-teams`, '#606060');
    } else if( tab === 'red' ) {
      rootStyle.setProperty(`--color-teams`, '#FE4164');
    }

      tabBtns.forEach(tabBtn => {
        tabBtn.classList.remove('tabs__btn--active');
        tabBtn.classList.remove(`tabs__btn--${tab}`);
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

  // $('.slider').slick({
  //   accessibility: true,
  //   arrows: true,
  //   mobileFirst: true,
  //   waitForAnimate: false,
  //   easing: 'ease-in-out'
  // });

  // $('.slider2').slick({
  //   accessibility: true,
  //   arrows: false,
  //   mobileFirst: true,
  //   slidesToShow: 3.2,
  //   autoplay: true,
  //   autoplaySpeed: 2000
  // });

  $('.slider-experts').slick({
    accessibility: true,
    arrows: true,
    mobileFirst: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
      }
    }

  ]

  });
  setupTabs();

});





const expertsSlides = document.querySelectorAll('.expert-card');
expertsSlides.forEach(expertSlide => {
  expertSlide.addEventListener('click', () => {
    expertsSlides.forEach(expertSlide => {
      if( expertSlide.classList.contains('expert-card--active') ) {
        expertSlide.classList.remove('expert-card--active')}
      })
    expertSlide.classList.add('expert-card--active');
  })
})


function DropDown(el) {
  this.dd = el;
  this.placeholder = this.dd.children('span');
  this.opts = this.dd.find('ul.dropdown > li');
  this.val = '';
  this.index = -1;
  this.initEvents();
}
DropDown.prototype = {
  initEvents: function () {
    var obj = this;

    obj.dd.on('click', function (event) {
      $(this).toggleClass('active');
      return false;
    });

    obj.opts.on('click', function () {
      var opt = $(this);
      obj.val = opt.text();
      obj.index = opt.index();
      obj.placeholder.text(obj.val);
    });
  },
  getValue: function () {
    return this.val;
  },
  getIndex: function () {
    return this.index;
  }
}



	$(function() {

		var dd = new DropDown( $('#dd') );

		$(document).click(function() {
			// all dropdowns
			$('.wrapper-dropdown-3').removeClass('active');
		});

	});

  $(document).on('change','#menuToggle input',function(){
    if($('#menu').css('display') == 'none'){
      $('#menu').css('display','block');
    } else {
      $('#menu').css('display','none');
    }
  })