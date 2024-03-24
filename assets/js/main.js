// Aplicando altura al contenedor "#profile__wrapper"
const profileWrapper = document.getElementById("profile__wrapper");
const profileHeight = profileWrapper.offsetHeight;
console.log(profileHeight);
const heightEnd = profileHeight*0.6;
profileWrapper.setAttribute("style", `width:${heightEnd}px`);