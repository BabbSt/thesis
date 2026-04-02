const nav = document.getElementById("bookNav");
const toggleButtons = document.querySelectorAll(".toggleNav");

toggleButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
        console.log("clicked");
        console.log(nav.classList);
        nav.classList.toggle("open");
    })
})