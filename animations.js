
const navb = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navb.classList.add('nav-active');
    } else {
        navb.classList.remove('nav-active');
    }
};

