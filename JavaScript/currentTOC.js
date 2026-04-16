const titleElements = document.querySelectorAll(".title");
const container = document.getElementById("container");

let book = localStorage.getItem("currentBook");
localStorage.removeItem("currSectionIndex");
if(book){
    let currentBook = JSON.parse(book);

    document.getElementsByTagName('h1')[0].setAttribute('style',`font-family: ${currentBook.fonts[0]};`);
    document.getElementsByTagName('h2')[0].setAttribute('style',`font-family: ${currentBook.fonts[1]};`);
    container.setAttribute('style',`font-family: ${currentBook.fonts[2]};`);

    titleElements.forEach((element)=>{
        element.textContent = currentBook.title;
    });

    let noSectionRecipes = document.createElement("ul");
    currentBook.recipes.forEach((recipe, index)=>{
         let listItem = document.createElement("li");
            listItem.innerHTML = `<a href="./currentRecipe.html" class="iconLink">${recipe.title}<span aria-hidden="true" class="material-symbols-outlined">chevron_forward</span></a>`
            listItem.addEventListener("click",()=>{
                localStorage.setItem("currRecipeIndex", index);
            });
            noSectionRecipes.appendChild(listItem);
    })
    container.appendChild(noSectionRecipes);

    currentBook.sections.forEach((section, sIndex)=>{
        let sectionHTML = document.createElement('section');
        sectionHTML.innerHTML=`<h3 style='font-family: ${currentBook.fonts[1]}'>${section.title}</h3>`

        let recipes = document.createElement("ul");
		/*let innerList = section.recipes.map((recipe)=>{
            return `<li><a href="#" class="iconLink">${recipe.title}<span aria-hidden="true" class="material-symbols-outlined">chevron_forward</span></a></li>`
        }).join('');
		recipes.innerHTML=innerList;*/
        section.recipes.forEach((recipe, rIndex)=>{
            let listItem = document.createElement("li");
            listItem.innerHTML = `<a href="./currentRecipe.html" class="iconLink">${recipe.title}<span aria-hidden="true" class="material-symbols-outlined">chevron_forward</span></a>`
            listItem.addEventListener("click",()=>{
                localStorage.setItem("currSectionIndex", sIndex);
                localStorage.setItem("currRecipeIndex", rIndex);
            });
            recipes.appendChild(listItem);
        })


        container.appendChild(sectionHTML).appendChild(recipes);
    })
    //add logic for non section recipes

}