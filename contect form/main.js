function sendEmail(){

    const naming = document.getElementById("name").value;

    const emailing = document.getElementById("email").value;

    const messaging = document.getElementById("message").value;


   const params = {
     name: naming,
     email: emailing,
     message: messaging,
   };


    const service = "service_e8rs2qt";

    const templete = "template_2lx6m0v";

    emailjs
      .send(service, templete, params)
        alert("your message was sent successfully");

}


const lefted = document.querySelector(".lefted");

const righted = document.querySelector(".righted");

const rightRow = document.querySelector(".righted-row");

const leftRow = document.querySelector(".lefted-row");



function lefting(){

    leftRow.classList.remove("hidden");

    rightRow.classList.add("hidden")

}

function righting(){


    rightRow.classList.remove("hidden");

    leftRow.classList.add("hidden");
}


function unlefting(){

    leftRow.classList.add("hidden");
    
}

function unrighting(){

    rightRow.classList.add("hidden");

}



// mobile preview ul menu
const ham = document.querySelector(".ham");

const close = document.querySelector(".close");

const ul = document.querySelector(".mob-menu");

ham.addEventListener("click", function(){
    
    ul.classList.remove("tran");

    close.style.display = "block";

    ham.style.display = "none";
    
});

close.addEventListener("click", function(){

    ul.classList.add("tran");

    close.style.display = "none";

    ham.style.display = "block";

});