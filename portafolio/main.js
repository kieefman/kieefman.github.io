let header = document.getElementById("header");

window.addEventListener('scroll', function(e) {

    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const header = document.getElementById('header');


    if (Math.ceil(scrolled) > 60) {
        header.classList.add('bg-dark');
        header.classList.remove('top-header');
    } else {
        header.classList.remove('bg-dark');
        header.classList.add('top-header');
    }
});