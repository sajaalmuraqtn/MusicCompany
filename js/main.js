var navbar=document.getElementById("navbar");
var change=document.getElementById("change");
var loading=document.getElementById("loading");

window.addEventListener("scroll",function(){
    if (window.scrollY>=change.offsetTop) {
        navbar.style.backgroundColor='rgba(0, 0, 0, 0.596)';
        navbar.style.boxShadow= "0  0 10px #222"; 
        navbar.style.color= "black"; 
       }
       else{
        navbar.style.background='none';
        navbar.style.boxShadow= "none"; 
       }
    
});

document.body.style.overflow="hidden";
window.addEventListener('load',function () {
    this.setTimeout(function(){
            loading.style.opacity='0';
            loading.style.visibility='hidden';
            loading.style.transition='1s';
            document.body.style.overflow="auto";
 }
        ,3000);
});