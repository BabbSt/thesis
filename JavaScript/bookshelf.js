const myShelf = document.getElementById('myShelfList');

let books = localStorage.getItem("booksArray");

if(books){
    let booksArray=JSON.parse(books);
    //console.log(booksArray);
    for(let i=0; i<booksArray.length; i++){
        let newBook = document.createElement("li");
        //add subtitle and author with ? :
        let button = document.createElement("button");
        button.classList.add("book");
        let buttonHTML = `<span aria-hidden="true" class="spine"></span>
        <span>${booksArray[i].title}</span>`
        if(booksArray[i].subtitle){
            buttonHTML +=  `<span>${booksArray[i].subtitle}</span>`
        }
        if(booksArray[i].author){
            buttonHTML +=  `<span>By: ${booksArray[i].subtitle}</span>`
        }
        button.innerHTML=buttonHTML;
        button.addEventListener("click",()=>{
            localStorage.setItem("currentBook",JSON.stringify(booksArray[i]));
            document.location='./currentTOC.html'
        });
        //console.log(button);
        myShelf.appendChild(newBook).appendChild(button);
    }
}