const icon = document.querySelector("#icon")
const label = document.querySelector(".form-check-label")
const count=document.querySelector("#count")

icon.addEventListener("click",(e)=>{
  
       if (e.target.parentElement.classList.contains("checked")) {
        e.target.parentElement.classList.remove("checked")
        icon.classList.remove("fa-solid", "fa-check")
            icon.classList.add("fa-regular", "fa-square")


       }else{
        e.target.parentElement.classList.add("checked")
        icon.classList.remove("fa-regular" , "fa-square")
        icon.classList.add("fa-solid", "fa-check")
       }
      })