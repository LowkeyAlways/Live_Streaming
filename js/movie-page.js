document.addEventListener("DOMContentLoaded", e => {
        /*========== Scroll Progress Bar ==========*/
    let scrollPrecentage = () =>{
        let scrollProgress = document.getElementById("progress");
        let progressValue = document.getElementById("progress-value");
        let pos = document.documentElement.scrollTop;
        let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrollValue = Math.round(pos * 100 / calcHeight);
        scrollProgress.style.background = `conic-gradient(#e70634 ${scrollValue}%, #2b2f38 ${scrollValue}%)`;
    }
    window.onscroll = scrollPrecentage;
    window.onload = scrollPrecentage;

        /*=========== NAV ==========*/
    let navToggle = document.querySelector(".nav__toggle");
    let navWrapper = document.querySelector(".nav__wrapper");

    navToggle.addEventListener("click", function () {
        if (navWrapper.classList.contains("active")) {
        this.setAttribute("aria-expanded", "false");
        this.setAttribute("aria-label", "menu");
        navWrapper.classList.remove("active");
  } else {
        navWrapper.classList.add("active");
        this.setAttribute("aria-label", "close menu");
        this.setAttribute("aria-expanded", "true");
}})
        /*=========== POPUP OPEN / CLOSE ==========*/
    const btn = document.querySelector('.play_btn');
    const playVideo = document.querySelector('#play');
    const close = document.querySelector('.close_movie')

    btn.addEventListener('click', () =>{
        playVideo.classList.add('active-popup');
        document.getElementById('m_video').play();
    })
    close.addEventListener('click', () => {
        playVideo.classList.remove('active-popup')
        document.getElementById('m_video').pause();
    })



});
