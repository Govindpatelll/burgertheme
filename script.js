const backgroundImages = [
   "linear-gradient(rgba(0,0,0,0.78),rgba(0,0,0,0.78)), url('slider1.jpg')",
   "linear-gradient(rgba(0,0,0,0.78),rgba(0,0,0,0.78)), url('slider2.jpg')",
   "linear-gradient(rgba(0,0,0,0.78),rgba(0,0,0,0.78)), url('slider3.jpg')",
   "linear-gradient(rgba(0,0,0,0.78),rgba(0,0,0,0.78)), url('slider4.jpg')"
];

let currentImageIndex = 0;

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const slider = document.getElementById("slider");

prevButton.addEventListener("click", () => {
   currentImageIndex = (currentImageIndex - 1 + backgroundImages.length) % backgroundImages.length;
   slider.style.backgroundImage = backgroundImages[currentImageIndex];
});

nextButton.addEventListener("click", () => {
   currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
   slider.style.backgroundImage = backgroundImages[currentImageIndex];
});








let sectionAll=document.querySelector(".section-all");

let sectionall=document.querySelector("#sectionall");

sectionall.addEventListener("click",()=>{
   sectionall.classList.remove("sectionAll");
   sectionall.style.border="1.4px solid green";
})




let pr=document.querySelectorAll(".pr");

pr.forEach(p =>{
   p.addEventListener("click",()=>{
     pr.forEach(ppp =>{
      ppp.classList.remove("custom-pr");
     })
      p.classList.add("custom-pr");
   })
})


// gsap.to(".page10-ourteam",{
//     background:"yellow",
//    scrollTrigger:{
//      trigger:".page10-ourteam",
//      start:"top top",
//      bottom:"bottom 250%",
//      markers:true,
//      pin:true,
//      scrub:0.67
//    }
// })




//      translateX:"-100vw",
//      duration:7,
//      delay:1,

//      scrollTrigger:{
//       trigger:".ourteam",
//       scroller:"body",
//       start:"top top",
//       end:"bottom 200%",
//       pin:true,
//       markers:true,
//       scrub:0.3
//      }
  

 


 gsap.to("#ourblogs",{
   transform:"translateX(-100%)",
   fontWeight:100,
   scrollTrigger:{
       trigger:".page12-blog",
       scroller:"body",
       start:"top 0",
       end:"top -200%",
       scrub:9,
       pin:true,
       markers:true
   }

})


