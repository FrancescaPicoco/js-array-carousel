
let picsPath = ["img/01.webp" , "img/02.webp" , "img/03.webp" , "img/04.webp" , "img/05.webp"];
let sidePath =["img/01.webp" , "img/02.webp" , "img/03.webp" , "img/04.webp" , "img/05.webp"];
//let picsHtml = ""
for (let i = 0; i < picsPath.length; i++) {
    const picPath = picsPath[i];
    console.log(picPath);
    document.getElementById("picsHere").innerHTML += `<img src="${picPath}">`;
    document.getElementById("right").innerHTML += `<img src="${picPath}">`;
     
}
//document.getElementById("wrapper").innerHTML = picsHtml;
 
let current = 0;
//let currentSide = 0;
const pics = document.querySelectorAll("#picsHere img");
pics[current].classList.add("visible");
const sidePics = document.querySelectorAll("#right img");
sidePics[current].classList.remove("opacity");

document.getElementById("next").addEventListener("click" , function(params) {
    if (current < pics.length-1) {
        pics[current].classList.remove("visible");
        sidePics[current].classList.add("opacity");
        current++;
        //currentSide++;
        console.log(current)
        pics[current].classList.add("visible");
        sidePics[current].classList.remove("opacity");
        }else if (current == pics.length -1) {         
        pics[current].classList.remove("visible");       
        current = 0;                         
        pics[current].classList.add("visible");      
    }    
})

document.getElementById("previous").addEventListener("click" , function(params) {
    if (current > 0 ) {
        pics[current].classList.remove("visible");
        sidePics[current].classList.add("opacity");
        current--;
        //currentSide--;
        console.log(current)
        pics[current].classList.add("visible");
        sidePics[current].classList.remove("opacity");
    }else if (current == 0) {             
        pics[current].classList.remove("visible");       
        current = pics.length -1;              
        pics[current].classList.add("visible"); 
    }    
    
})
