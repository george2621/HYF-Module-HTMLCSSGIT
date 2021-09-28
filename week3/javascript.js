

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

