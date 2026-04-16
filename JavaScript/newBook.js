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

let fonts= ['DM Serif Display', 'Inter', 'Plus Jakarta Sans', 'Times New Roman',];

let fontsdropdown = fonts.map((font)=>{
    return `<option style="font-family: ${font};">${font}</option>`
}).join('');

let selectedFonts = ['DM Serif Display','Plus Jakarta Sans','Inter'];
fontSelectors.forEach((selector)=>{
    selector.innerHTML= fontsdropdown;
    switch(selector.id){
        case "title_font":
            titleFont.setAttribute('style',"font-family:'DM Serif Display'");
            selector.value= 'DM Serif Display';
            selector.setAttribute('style',"font-family:'DM Serif Display'");
            break;
        case "heading_font":
            headerFont.setAttribute('style',"font-family:'Plus Jakarta Sans'");
            selector.value= 'Plus Jakarta Sans';
            selector.setAttribute('style',"font-family:'Plus Jakarta Sans'");
            break;
        case "body_font":
            selector.value= 'Inter';
            break;
    }
    selector.addEventListener("input",()=>{
        //console.log(selector.value);
        selector.setAttribute('style',`font-family: ${selector.value};`);
        switch(selector.id){
            case "title_font":
                titleFont.setAttribute('style',`font-family: ${selector.value};`);
                selectedFonts[0] = selector.value;
                break;
            case "heading_font":
                headerFont.setAttribute('style',`font-family: ${selector.value};`);
                selectedFonts[1] = selector.value;
                break;
            case "body_font":
                bodyFont.setAttribute('style',`font-family: ${selector.value};`);
                selectedFonts[2] = selector.value;
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
        fonts:selectedFonts,
        sections: [],
        recipes: []
    }
    localStorage.setItem("newBook",JSON.stringify(newBook));
})