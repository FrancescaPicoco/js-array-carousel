
let picsPath = ["img/01.webp" , "img/02.webp" , "img/03.webp" , "img/04.webp" , "img/05.webp"];

//let picsHtml = ""
for (let i = 0; i < picsPath.length; i++) {
    const picPath = picsPath[i];
    console.log(picPath);
    document.getElementById("wrapper").innerHTML += `<img src="${picPath}">`;  
}
//document.getElementById("wrapper").innerHTML = picsHtml;
 
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
/*for (let i = 0; i < picsPath.length; i++) {
    const continuous = picsPath[i];
    console.log(continuous);
    if (current == 4){
        continue;
    }
}*/

document.getElementById("previous").addEventListener("click" , function(params) {
    if (current > 0 ) {
        pics[current].classList.remove("visible");
        current--;
        console.log(current)
        pics[current].classList.add("visible");
    }
})