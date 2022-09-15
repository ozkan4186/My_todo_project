const icon = document.querySelector("#icon")
const label = document.querySelector(".form-check-label")
const count=document.querySelector("#count")
const card=document.querySelector(".card")
const zero=document.querySelector(".zero")
let score=0;
card.addEventListener("click",(e)=>{
    console.log(e.target);
    if(e.target.classList.contains("icon")){
        


    
       if (e.target.parentElement.classList.contains("check")) {
        console.log(e.target.childElement);
        e.target.parentElement.classList.remove("check")
        e.target.classList.remove("fa-solid", "fa-check")
        e.target.classList.add("fa-regular", "fa-square")
        score --;
        zero.innerHTML = `${score}`


       }else{
        e.target.parentElement.classList.add("check")
    e.target.classList.remove("fa-regular" , "fa-square")
     e.target.classList.add("fa-solid", "fa-check")
      score++;
      zero.innerHTML = `${score} `
       }
       
       }
      })