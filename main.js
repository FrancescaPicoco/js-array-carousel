let current = 0;

const pics = document.querySelectorAll(".wrapper img");
pics[current].classList.add("visible");

document.getElementById("next").addEventListener("click" , function(params) {
    if (current < pics.length-1) {
        pics[current].classList.remove("visible");
        current++;
        console.log(current)
        pics[current].classList.add("visible");
    }
})

document.getElementById("previous").addEventListener("click" , function(params) {
    if (current > 0 ) {
        pics[current].classList.remove("visible");
        current--;
        pics[current].classList.add("visible");
    }
})