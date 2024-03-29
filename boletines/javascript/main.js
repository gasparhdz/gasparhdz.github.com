/*
let links = document.querySelectorAll("a");

links.forEach(function(link){
    console.log(link);
});
*/

let links = document.querySelectorAll(".close");

links.forEach(function(link){
    link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content = document.querySelector(".content");
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");

        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        setTimeout(function(){

            location.href = "/boletines";

        },1000);

        return false;
    });
});