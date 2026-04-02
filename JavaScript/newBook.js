const fontSelectors = document.querySelectorAll(".optionsWrapper");
const titleFont = document.getElementById("titlePrev");
const headerFont = document.getElementById("headerPrev");
const bodyFont = document.getElementById("bodyPrev");
const includeAuthorCheck = document.getElementById("include_author");
const authorInput = document.getElementById("author");
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
    console.log(authorInput);
})

