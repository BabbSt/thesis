const fontSelectors = document.querySelectorAll(".optionsWrapper");
const titleFont = document.getElementById("titlePrev");
const headerFont = document.getElementById("headerPrev");
const bodyFont = document.getElementById("bodyPrev");

const includeAuthorCheck = document.getElementById("include_author");
const authorInput = document.getElementById("author");
const titleInput = document.getElementById("title");
const subtitleInput = document.getElementById("subtitle");
const bookTitle = document.getElementById("bookTitlePrev");
const bookSubtitle = document.getElementById("bookSubtitlePrev");
const bookAuthor = document.getElementById("bookAuthorPrev");

const form = document.getElementById("new_book");

let fonts= ['Arial', 'Times New Roman','Helvetica', 'Impact'];

let fontsdropdown = fonts.map((font)=>{
    return `<option style="font-family: ${font};">${font}</option>`
}).join('');

fontSelectors.forEach((selector)=>{
    selector.innerHTML= fontsdropdown;
    selector.addEventListener("input",()=>{
        //console.log(selector.value);
        selector.setAttribute('style',`font-family: ${selector.value};`);
        switch(selector.id){
            case "title_font":
                titleFont.setAttribute('style',`font-family: ${selector.value};`);
                break;
            case "heading_font":
                headerFont.setAttribute('style',`font-family: ${selector.value};`);
                break;
            case "body_font":
                bodyFont.setAttribute('style',`font-family: ${selector.value};`);
                break;
        }
    })
})

includeAuthorCheck.addEventListener("input",()=>{
    authorInput.toggleAttribute("disabled");
    if(includeAuthorCheck.checked && authorInput.value){
        bookAuthor.textContent=`By: ${authorInput.value.replace(/(^|\s)[a-z]/gi, l => l.toUpperCase())}`;
    }else{
        bookAuthor.textContent="";
    }
})

titleInput.addEventListener("keyup",()=>{
    bookTitle.textContent=titleInput.value.replace(/(^|\s)[a-z]/gi, l => l.toUpperCase());
})

subtitleInput.addEventListener("keyup",()=>{
    bookSubtitle.textContent=subtitleInput.value.replace(/(^|\s)[a-z]/gi, l => l.toUpperCase());
})

authorInput.addEventListener("keyup",()=>{
    bookAuthor.textContent=`By: ${authorInput.value.replace(/(^|\s)[a-z]/gi, l => l.toUpperCase())}`;
})

form.addEventListener("submit",()=>{
    /*localStorage.setItem('title', titleInput.value.replace(/(^|\s)[a-z]/gi, l => l.toUpperCase()));
    localStorage.setItem('subtitle',subtitleInput.value.replace(/(^|\s)[a-z]/gi, l => l.toUpperCase()));
    localStorage.setItem('author',authorInput.value.replace(/(^|\s)[a-z]/gi, l => l.toUpperCase()));*/
    let newBook = {
        title: titleInput.value.replace(/(^|\s)[a-z]/gi, l => l.toUpperCase()),
        subtitle: subtitleInput.value.replace(/(^|\s)[a-z]/gi, l => l.toUpperCase()),
        author: authorInput.value.replace(/(^|\s)[a-z]/gi, l => l.toUpperCase()),
        //fonts:[]
        sections: [],
        recipes: []
    }
    localStorage.setItem("newBook",JSON.stringify(newBook));
})