/* MENU HAM */
let menu = document.getElementById("menu-ham");
let btn = document.getElementById("btn-menu");
$(document).ready(()=>{
  $(btn).click(()=>{
    $(btn).toggleClass('active'),
    $(menu).slideToggle(700)
  })
})

/*SCROLL*/
const scrollUp = (section) => {
  $('html, body').animate({
      scrollTop: $(`#${section}`).offset().top
  },1800)
}
$('#btn-about').click(()=>{scrollUp("about")})
$('#btn-cabin').click(()=>{scrollUp("cabins")})
$('#btn-activities').click(()=>{scrollUp("activities")})
$('#btn-contact').click(()=>{scrollUp("contact")})

/*CAROUSEL*/
let index = 0;
carousel();

function carousel() {
  let i;
  let slide = document.getElementsByClassName("slides");
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";  
  }
  index++;
  if (index > slide.length) {index = 1}    
  slide[index-1].style.display = "block";  
  setTimeout(carousel, 5000);
}