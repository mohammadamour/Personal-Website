const toggle = document.querySelector(".toggle");

const toggleCircle = document.querySelector(".toggle-circle");

toggle.addEventListener("click", function(){

    toggleCircle.classList.toggle("toggle-circle-translated");

});




const filterButton = document.querySelector(".filter-button");

const filterDrop = document.querySelector(".filter-dropdown");


function bigImg() {
    filterDrop.classList.add("menu-scaled");

}

function normalImg() {
      filterDrop.classList.remove("menu-scaled");

}







// dark / light mode toggle



const toggleChange = document.querySelector(".toggle");

toggleChange.addEventListener("click", function(){
   
    const toggle = document.querySelector(".toggle");

    const dark = document.querySelector(".dark");

    const light = document.querySelector(".light");
    
    if (toggle === dark){

        const clrDmCards = "--clr-dm-cards";
        const clrDmBg = "--clr-dm-bg";
        const clrDmText = "--clr-dm-text";
        const clrLang = "--clr-language";

        document.documentElement.style.setProperty(clrDmBg, "hsl(0, 0%, 97%)");

        document.documentElement.style.setProperty(
          clrDmCards,
          "hsl(0, 0%, 100%)"
        );

        document.documentElement.style.setProperty(
          clrDmText,
          "hsl(200, 15%, 8%)"
        );

        document.documentElement.style.setProperty(
          clrLang,
          "hsl(0, 0%, 0%)"
        );

        toggle.classList.add("light");
        toggle.classList.remove("dark");

        console.log("theme changed to light mode");

    }

    if (toggle === light){

        const clrDmCards = "--clr-dm-cards";
        const clrDmBg = "--clr-dm-bg";
        const clrLang = "--clr-language";
        const clrDmText = "--clr-dm-text";


        document.documentElement.style.setProperty(
          clrDmBg,
          "hsl(207, 26%, 17%)"
        );

        document.documentElement.style.setProperty(
          clrDmCards,
          "hsl(209, 23%, 22%)"
        );

        document.documentElement.style.setProperty(
          clrDmText,
          "hsl(0, 0%, 100%)"
        );

        document.documentElement.style.setProperty(
          clrDmText,
          "hsl(0, 0%, 100%)"
        );

        document.documentElement.style.setProperty(
          clrLang,
          "rgb(148 163 184)"
        );


 //    --clr-language
        
        toggle.classList.add("dark");
        toggle.classList.remove("light");

        console.log("theme changed to dark mode");

    }

    else{
        console.log("something went wrong");
    }
});


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














// the scaling borders in a container


const right0 = document.querySelectorAll(".border-right")[0];

const bottom0 = document.querySelectorAll(".border-bottom")[0];

const left0 = document.querySelectorAll(".border-left")[0];

const top0 = document.querySelectorAll(".border-top")[0];

function borderOn0() {
  top0.classList.add("border-scaled");

  right0.classList.add("border-scaled");

  bottom0.classList.add("border-scaled");

  left0.classList.add("border-scaled");

}

  function borderOut0() {
    top0.classList.remove("border-scaled");

    right0.classList.remove("border-scaled");

    bottom0.classList.remove("border-scaled");

    left0.classList.remove("border-scaled");
}






// the scaling borders in a container


const right1 = document.querySelectorAll(".border-right")[1];

const bottom1 = document.querySelectorAll(".border-bottom")[1];

const left1 = document.querySelectorAll(".border-left")[1];

const top1 = document.querySelectorAll(".border-top")[1];

function borderOn1() {
  top1.classList.add("border-scaled");

  right1.classList.add("border-scaled");

  bottom1.classList.add("border-scaled");

  left1.classList.add("border-scaled");

}

  function borderOut1() {
    top1.classList.remove("border-scaled");

    right1.classList.remove("border-scaled");

    bottom1.classList.remove("border-scaled");

    left1.classList.remove("border-scaled");
}






// the scaling borders in a container


const right2 = document.querySelectorAll(".border-right")[2];

const bottom2 = document.querySelectorAll(".border-bottom")[2];

const left2 = document.querySelectorAll(".border-left")[2];

const top2 = document.querySelectorAll(".border-top")[2];

function borderOn2() {
  top2.classList.add("border-scaled");

  right2.classList.add("border-scaled");

  bottom2.classList.add("border-scaled");

  left2.classList.add("border-scaled");

}

  function borderOut2() {
    top2.classList.remove("border-scaled");

    right2.classList.remove("border-scaled");

    bottom2.classList.remove("border-scaled");

    left2.classList.remove("border-scaled");
}






// the scaling borders in a container


const right3 = document.querySelectorAll(".border-right")[3];

const bottom3 = document.querySelectorAll(".border-bottom")[3];

const left3 = document.querySelectorAll(".border-left")[3];

const top3 = document.querySelectorAll(".border-top")[3];

function borderOn3() {
  top3.classList.add("border-scaled");

  right3.classList.add("border-scaled");

  bottom3.classList.add("border-scaled");

  left3.classList.add("border-scaled");

}

  function borderOut3() {
    top3.classList.remove("border-scaled");

    right3.classList.remove("border-scaled");

    bottom3.classList.remove("border-scaled");

    left3.classList.remove("border-scaled");
}






// the scaling borders in a container


const right4 = document.querySelectorAll(".border-right")[4];

const bottom4 = document.querySelectorAll(".border-bottom")[4];

const left4 = document.querySelectorAll(".border-left")[4];

const top4 = document.querySelectorAll(".border-top")[4];

function borderOn4() {
  top4.classList.add("border-scaled");

  right4.classList.add("border-scaled");

  bottom4.classList.add("border-scaled");

  left4.classList.add("border-scaled");

}

  function borderOut4() {
    top4.classList.remove("border-scaled");

    right4.classList.remove("border-scaled");

    bottom4.classList.remove("border-scaled");

    left4.classList.remove("border-scaled");
}






// the scaling borders in a container


const right5 = document.querySelectorAll(".border-right")[5];

const bottom5 = document.querySelectorAll(".border-bottom")[5];

const left5 = document.querySelectorAll(".border-left")[5];

const top5 = document.querySelectorAll(".border-top")[5];

function borderOn5() {
  top5.classList.add("border-scaled");

  right5.classList.add("border-scaled");

  bottom5.classList.add("border-scaled");

  left5.classList.add("border-scaled");

}

  function borderOut5() {
    top5.classList.remove("border-scaled");

    right5.classList.remove("border-scaled");

    bottom5.classList.remove("border-scaled");

    left5.classList.remove("border-scaled");
}






// the scaling borders in a container


const right6 = document.querySelectorAll(".border-right")[6];

const bottom6 = document.querySelectorAll(".border-bottom")[6];

const left6 = document.querySelectorAll(".border-left")[6];

const top6 = document.querySelectorAll(".border-top")[6];

function borderOn6() {
  top6.classList.add("border-scaled");

  right6.classList.add("border-scaled");

  bottom6.classList.add("border-scaled");

  left6.classList.add("border-scaled");

}

  function borderOut6() {
    top6.classList.remove("border-scaled");

    right6.classList.remove("border-scaled");

    bottom6.classList.remove("border-scaled");

    left6.classList.remove("border-scaled");
}






// the scaling borders in a container


const right7 = document.querySelectorAll(".border-right")[7];

const bottom7 = document.querySelectorAll(".border-bottom")[7];

const left7 = document.querySelectorAll(".border-left")[7];

const top7 = document.querySelectorAll(".border-top")[7];

function borderOn7() {
  top7.classList.add("border-scaled");

  right7.classList.add("border-scaled");

  bottom7.classList.add("border-scaled");

  left7.classList.add("border-scaled");

}

  function borderOut7() {
    top7.classList.remove("border-scaled");

    right7.classList.remove("border-scaled");

    bottom7.classList.remove("border-scaled");

    left7.classList.remove("border-scaled");
}






// the scaling borders in a container


const right8 = document.querySelectorAll(".border-right")[8];

const bottom8 = document.querySelectorAll(".border-bottom")[8];

const left8 = document.querySelectorAll(".border-left")[8];

const top8 = document.querySelectorAll(".border-top")[8];

function borderOn8() {
  top8.classList.add("border-scaled");

  right8.classList.add("border-scaled");

  bottom8.classList.add("border-scaled");

  left8.classList.add("border-scaled");

}

  function borderOut8() {
    top8.classList.remove("border-scaled");

    right8.classList.remove("border-scaled");

    bottom8.classList.remove("border-scaled");

    left8.classList.remove("border-scaled");
}






// the scaling borders in a container


const right10 = document.querySelectorAll(".border-right")[10];

const bottom10 = document.querySelectorAll(".border-bottom")[10];

const left10 = document.querySelectorAll(".border-left")[10];

const top10 = document.querySelectorAll(".border-top")[10];

function borderOn10() {
  top10.classList.add("border-scaled");

  right10.classList.add("border-scaled");

  bottom10.classList.add("border-scaled");

  left10.classList.add("border-scaled");

}

  function borderOut10() {
    top10.classList.remove("border-scaled");

    right10.classList.remove("border-scaled");

    bottom10.classList.remove("border-scaled");

    left10.classList.remove("border-scaled");
}

