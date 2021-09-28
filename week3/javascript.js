

let emailInput = document.querySelector(".email")
let Arrow = document.querySelector(".arrow")


emailInput.addEventListener('click',function(){

    emailInput.classList.add('is-valid');
})

Arrow.addEventListener('click',function(){

    if(emailInput.value == ""){

        emailInput.classList.add('is-invalid')
    }
})


let lastScrollTop = 0 ; 
let navbar = document.getElementById("main-navbar");
window.addEventListener('scroll' , function(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if(scrollTop > lastScrollTop){
        navbar.style.top="-80px";
    }else {
        navbar.style.top="0";
    }

    lastScrollTop = scrollTop ;
})