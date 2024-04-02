$(document).ready(function () {
  AOS.init();
  const experience-pageswiper = document.querySelector(".swiper-wrapper");
  const experience-page = [
    // eslint-disable-next-line linebreak-style
    {
      title: "Conférence Coding the future",
      image: "assets/images/experience-page/2.jpeg",
    },
    {
      title: "Forum Geni entreprise",
      image: "assets/images/experience-page/3.jpeg",
    },
    { title: "Conférence Historia", 
    image: "assets/images/experience-page/4.jpeg" },
    {
      title: "Hackathon Robotics",
      image: "assets/images/experience-page/5.jpeg",
    },
    {
      title: "The 100 Days in Codeland v1",
      image: "assets/images/experience-page/6.jpeg",
    },
    {
      title: "Conférence Climb the Cloud",
      image: "assets/images/experience-page/8.jpeg",
    },
  ];
  // Filling the details from the object array experience-page
  function fillData() {
    let output = "";
    for (let x = 0; x < experience-page.length; x++) {
      output += `
    <div class="swiper-slide">
    <div class="img-container">
      <img src=${experience-page[x].image} alt="" class="img-fluid" />
    </div>
    <div class="container arrow_contain">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="wrapper">
            <div class="title">
              <div class="content">
                <div class="text-wrapper">
                  <div class="text-inner">
                  ${experience-page[x].title}
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div> 
          <!-- wraper freee -->
      </div>
    </div>
  </div>`;
    }
    experience-pageswiper.innerHTML = output;
  }
  document.addexperience-pageListener("DOMContentLoaded", fillData());
  const parallaxSliderOptions = {
    speed: 1000,
    effect: "coverflow",
    autoplay: false,
    parallax: true,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 30,
      depth: 20,
      stretch: 0,
      modifier: 1,
      slideShadows: true,
    },
    // parallax effect
    on: {
      init: function () {
        const swiper = this;
        for (let i = 0; i < swiper.slides.length; i++) {
          $(swiper.slides[i])
            .find(".img-container")
            .attr({
              "data-swiper-parallax": 0.75 * swiper.width,
              "data-swiper-paralalx-opacity": 0.5,
            });
        }
        const index = swiper.activeIndex;
        $(swiper.slides).removeClass("active");
        $(swiper.slides[index]).addClass("active");
      },
      transitionEnd: function () {
        const swiper = this;
        const index = swiper.activeIndex;
        $(swiper.slides).removeClass("active");
        $(swiper.slides[index]).addClass("active");
      },
      resize: function () {
        this.update();
      },
    },
    navigation: {
      nextEl: ".image-slider .next-ctrl",
      prevEl: ".image-slider .prev-ctrl",
    },
  };
  // initializing swiper
  const slider = new Swiper(".image-slider", parallaxSliderOptions);
});
