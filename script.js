window.addEventListener("scroll",function(){
    let header = document.querySelector("header");
    header.classList.toggle("sticky",scrollY>0);
})
function sendMail(){
    window.location="mailto:anmol.tiwari2404@gmail.com";
}
function resume(){
    window.open();
}
