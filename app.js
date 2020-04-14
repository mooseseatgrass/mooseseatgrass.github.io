var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
}   else {
    document.getElementById("navbar").style.top = "-100%";
}
    prevScrollpos = currentScrollPos;
}

const navSlide = () => {
    const burger = document.querySelector(`.burger`);
    const nav = document.querySelector(`.navLinks`);
    const navLinks = document.querySelectorAll(`.navLinks li`);
    //toggle nave

    burger.addEventListener(`click`, () =>{
        nav.classList.toggle('nav-active');
// need to add off click besides menu x

    //animate links
    navLinks.forEach((link, index)=>{
        if (link.style.animation){
            link.style.animation = ``;
        } else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .7}s`;
        }
    });
    //burger animation
    burger.classList.toggle('toggle');
    });
}

navSlide();

