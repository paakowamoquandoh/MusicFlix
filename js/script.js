const swiper = new Swiper('.newMusicSwiper', {
    // Optional parameters
    slidesPreview: 1,
    spaceBetween: 10,
    autoplay: {
       delay: 5500,
       disableOnInteraction: false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      280:{
        slidesPerView: 1,
        spaceBetween: 10,
      },
      320:{
        slidesPerView: 2,
        spaceBetween: 10,
      },
      510:{
        slidesPerView: 2,
        spaceBetween: 10,
      },
      758:{
        slidesPerView: 3,
        spaceBetween: 15,
      },
      900:{
        slidesPerView: 4,
        spaceBetween: 20,
      }
    },
  });

  // 
  const playMusic = document.querySelector(".playTrack");
  const video = document.querySelector(".videoContainer");
  const demoVideo = document.querySelector("#demoMusic");
  const closeVideo = document.querySelector(".closeDemo");

  playMusic.onclick = () => {
    video.classList.add("show");
    demoVideo.play();
  }

  closeVideo.onclick = () => {
    video.classList.remove("show");
    demoVideo.pause();
  }