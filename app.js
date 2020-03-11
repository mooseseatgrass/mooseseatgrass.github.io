const navSlide = () => {
    const burger = document.querySelector(`.burger`);
    const nav = document.querySelector(`.navLinks`);
    const navLinks = document.querySelectorAll(`.navLinks li`);
    //toggle nave

    burger.addEventListener(`click`, () =>{
        nav.classList.toggle('nav-active');

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