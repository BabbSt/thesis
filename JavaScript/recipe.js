const nav = document.getElementById("bookNav");
const toggleButtons = document.querySelectorAll(".toggleNav");
const details = document.querySelectorAll('details');
const background=document.getElementById('navBackdrop');

let scrollLocked = false;

toggleButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
        console.log("clicked");
        console.log(nav.classList);
        nav.classList.toggle("open");
        background.classList.toggle("hidden");
        if(scrollLocked){
            document.body.style.overflowY = '';
            details.forEach(detail=>{
                detail.open = false;
            })
        }else{
            document.body.style.overflowY = 'clip';
        }
        scrollLocked=!scrollLocked;
    })
})

//add js to close details when nave is closed