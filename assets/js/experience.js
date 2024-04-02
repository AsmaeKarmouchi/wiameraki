AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Stage en Business Intelligence",
    cardImage: "assets/images/experience-page/csefrss.png",
    place: "Conseil Supérieur de l’Education de la Formation et de la Recherche scientifique, Rabat",
    time: "(Juin - Aout , 2023)",
    desp: "Visualisation de disparité du genre au système éducatif marocain en utilisant R et RStudio ",
  },
  
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Responsable formation",
    cardImage: "assets/images/experience-page/IEEE ENSIAS SB - LIGHT.svg",
    description:
      "Assurer des formations dans les différents domaine de l'IT pour les membres du club.",
    time: "Juin, 2023 - Présent"
  },
  {
    title: "Responsable Content Creation",
    cardImage: "assets/images/experience-page/ENACTUS ENSIAS SQUARE DARK.svg",
    description:
      "Assurer la médiatisation des événements du club et les designs nécessaires",
    time: "Juin, 2023 - Présent"
  },
  {
    title: "Membre cellule conférence",
    cardImage: "assets/images/experience-page/forum.png",
    description:
      "Contacter les invités et organiser des conférences.",
    time: "Octobre, 2022-2023"
  },

];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description,time }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
          <span class="author">${time}</span>
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Mega Hackathon Panafricain de Orange",
    subtitle: "Participante",
    image: "assets/images/experience-page/mega.png",
    desp: "J'ai fait partie d'une équipe dynamique. Grâce à notre concept de start-up Fast Blood, nous avons réussi à faire partie des finalistes.",
    href: "https://www.linkedin.com/posts/orange-maroc_tech-odcmaroc-orangedigitalcenter-activity-7003660262369067011-jrCW/",
  },
  {
    title: "Hackathon Finetech",
    subtitle: "Participante",
    image: "assets/images/experience-page/1.jpeg",
    desp: "On était parmi les 8 finalistes et on a proposé un jeu vidéo.",
    href: "https://www.linkedin.com/posts/fintech-ensias-93132b202_fintechhackathon-innovationfinanciaeyre-ensias-activity-7170816835553058817-ZX2c/?utm_source=share&utm_medium=member_desktop",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Voir plus</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);

/* Badges*/
const badgesContainer = document.querySelector(".badges");

const badgesection = [
  {
    title: "Esprit critique",
    image: "assets/images/experience-page/1.png",
  },
  {
    title: "Communication",
    image: "assets/images/experience-page/2.png",
  },
  {
    title: "Teamwork",
    image: "assets/images/experience-page/3.png",
  },
  {
    title: "Leadership",
    image: "assets/images/experience-page/4.png",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image}) =>
      (output += `       
      <div class="badge">
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Badge image" width="200">
        <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
      </div>`)
  );
  badgesContainer.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCards1);

//EVENT

const eventswiper = document.querySelector(".swiper-wrapper");
  const event = [
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
  // Filling the details from the object array event
  function fillData() {
    let output = "";
    for (let x = 0; x < event.length; x++) {
      output += `
        <div class="swiper-slide">
          <div class="img-container">
            <img src="${event[x].image}" alt="" class="img-fluid" style="width: auto; height: auto;" />
          </div>
          <div class="container arrow_contain">
            <div class="row justify-content-center">
              <div class="col-md-8">
                <div class="wrapper">
                  <div class="content">
                    <div class="title">
                      <div class="text-wrapper">
                        <div class="text-inner">
                          ${event[x].title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
              <!-- wrapper free -->
            </div>
          </div>
        </div>`;
    }
    // Assuming you want to inject the generated HTML into some container with class "swiper-wrapper"
    document.querySelector(".swiper-wrapper").innerHTML = output;
  
  
    
    eventswiper.innerHTML = output;
  }
  document.addEventListener("DOMContentLoaded", fillData());
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



