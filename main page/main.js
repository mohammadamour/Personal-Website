  // containers.classList.add("something");


const projectImg1 = document.querySelectorAll(".project-img")[0];

const scaled1 = document.querySelectorAll(".scaled")[0];

const container = document.querySelectorAll(".container")[0];

function projectDetailesOn1() {
  scaled1.classList.remove("translated");

  // container.style.transform.scale = "21.3";

  // container.style.transform.scale = "1.3";

  // projectImg1.style.transform.scale = "1.3";

  // projectImg1.style.transform.scale = "1.3";


}

function projectDetailesOut1() {
  scaled1.classList.add("translated");
}

// another project



const projectImg2 = document.querySelectorAll(".project-img")[1];

const scaled2 = document.querySelectorAll(".scaled")[1];

function projectDetailesOn2() {
  scaled2.classList.remove("translated");
}

function projectDetailesOut2() {
  scaled2.classList.add("translated");
}

// another project


const projectImg3 = document.querySelectorAll(".project-img")[2];

const scaled3 = document.querySelectorAll(".scaled")[2];

function projectDetailesOn3() {
  scaled3.classList.remove("translated");
}

function projectDetailesOut3() {
  scaled3.classList.add("translated");
}

// another project



const projectImg4 = document.querySelectorAll(".project-img")[3];

const scaled4 = document.querySelectorAll(".scaled")[3];

function projectDetailesOn4() {
  scaled4.classList.remove("translated");
}

function projectDetailesOut4() {
  scaled4.classList.add("translated");
}

// another project

const projectImg5 = document.querySelectorAll(".project-img")[4];

const scaled5 = document.querySelectorAll(".scaled")[4];

function projectDetailesOn5() {
  scaled5.classList.remove("translated");
}

function projectDetailesOut5() {
  scaled5.classList.add("translated");
}


// another project


const projectImg6 = document.querySelectorAll(".project-img")[5];

const scaled6 = document.querySelectorAll(".scaled")[5];

function projectDetailesOn6() {
  scaled6.classList.remove("translated");
}

function projectDetailesOut6() {
  scaled6.classList.add("translated");
}


// another project



const projectImg7 = document.querySelectorAll(".project-img")[6];

const scaled7 = document.querySelectorAll(".scaled")[6];

function projectDetailesOn7() {
  scaled7.classList.remove("translated");
}

function projectDetailesOut7() {
  scaled7.classList.add("translated");
}


// another project



const projectImg8 = document.querySelectorAll(".project-img")[7];

const scaled8 = document.querySelectorAll(".scaled")[7];

function projectDetailesOn8() {
  scaled8.classList.remove("translated");
}

function projectDetailesOut8() {
  scaled8.classList.add("translated");
}



// another project




const projectImg9 = document.querySelectorAll(".project-img")[8];

const scaled9 = document.querySelectorAll(".scaled")[8];

function projectDetailesOn9() {
  scaled9.classList.remove("translated");
}

function projectDetailesOut9() {
  scaled9.classList.add("translated");
}



// another project




const projectImg10 = document.querySelectorAll(".project-img")[9];

const scaled10 = document.querySelectorAll(".scaled")[9];

function projectDetailesOn10() {
  scaled10.classList.remove("translated");
}

function projectDetailesOut10() {
  scaled10.classList.add("translated");
}




// mobile preview ul menu
const ham = document.querySelector(".ham");

const close = document.querySelector(".close");

const ul = document.querySelector(".mob-menu");

ham.addEventListener("click", function(){
    
    ul.classList.remove("tran");

    close.classList.remove("hidden");

    ham.classList.add("hidden");
    
});

close.addEventListener("click", function(){

    ul.classList.add("tran");

    close.classList.add("hidden");

    ham.classList.remove("hidden");

});


const screenWidth = window.screenWidth;

// if (screenWidth > 450){
  // footer hover effects




const contactH2 = document.querySelector(".contact-h2");

const workH2 = document.querySelector(".work-h2");

const PortoH2 = document.querySelector(".porto-a");

const PortoButton = document.querySelector(".show-porto");

const beforeContact = document.querySelector(".before-contact");

const beforeWork = document.querySelector(".before-work");

const beforePorto = document.querySelector(".before-porto");



const contactTop = document.querySelector(".contact .border-top");

const contactRight = document.querySelector(".contact .border-right");

const contactBottom = document.querySelector(".contact .border-bottom");

const contactLeft = document.querySelector(".contact .border-left");



function borderOnContact() {
  contactTop.classList.add("border-scaled");

  contactRight.classList.add("border-scaled");

  contactBottom.classList.add("border-scaled");

  contactLeft.classList.add("border-scaled");

  setTimeout(function () {
    beforeContact.style.width = "100%";

    contactH2.style.color = "var(--clr-black)";

  }, 400);


}


function borderOutContact() {

  beforeContact.style.width = "0%";

  contactH2.style.color = "var(--clr-white)";
  
  setTimeout(function () {
    contactTop.classList.remove("border-scaled");

    contactRight.classList.remove("border-scaled");

    contactBottom.classList.remove("border-scaled");

    contactLeft.classList.remove("border-scaled");

  }, 400);
}





const workTop = document.querySelector(".work .border-top");

const workRight = document.querySelector(".work .border-right");

const workBottom = document.querySelector(".work .border-bottom");

const workLeft = document.querySelector(".work .border-left");

function borderOnWork() {
  workTop.classList.add("border-scaled");

  workRight.classList.add("border-scaled");

  workBottom.classList.add("border-scaled");

  workLeft.classList.add("border-scaled");

  setTimeout(function () {
    beforeWork.style.width = "100%";

    workH2.style.color = "var(--clr-black)";
  }, 600);
}

function borderOutWork() {
  beforeWork.style.width = "0%";

  workH2.style.color = "var(--clr-white)";

  setTimeout(function () {
    workTop.classList.remove("border-scaled");

    workRight.classList.remove("border-scaled");

    workBottom.classList.remove("border-scaled");

    workLeft.classList.remove("border-scaled");
  }, 600);
}





const PortoTop = document.querySelector(".show-porto div .border-top");

const PortoRight = document.querySelector(".show-porto div .border-right");

const PortoBottom = document.querySelector(".show-porto div .border-bottom");

const PortoLeft = document.querySelector(".show-porto div .border-left");



function borderOnPorto() {
  PortoTop.classList.add("border-scaled");

  PortoRight.classList.add("border-scaled");

  PortoBottom.classList.add("border-scaled");

  PortoLeft.classList.add("border-scaled");

    PortoButton.style.marginLeft = "1px";

  setTimeout(function () {
    beforePorto.style.width = "100%";

    PortoH2.style.color = "var(--clr-black)";

  }, 300);
}

function borderOutPorto() {
  beforePorto.style.width = "0%";

  PortoH2.style.color = "var(--clr-white)";

  setTimeout(function () {
    PortoTop.classList.remove("border-scaled");

    PortoRight.classList.remove("border-scaled");

    PortoBottom.classList.remove("border-scaled");

    PortoLeft.classList.remove("border-scaled");

    PortoButton.style.marginLeft = "-20px";
  }, 400);
}




// }

// else{}