const main = document.getElementsByTagName('main')[0];
const h1 = document.getElementById("recipeTitle");
const bookTitle = document.getElementById('bookTitle');

let book = localStorage.getItem("currentBook");

if(book){
    let currentBook = JSON.parse(book);
    let sectionIndex = localStorage.getItem('currSectionIndex');
    let recipe;
    let recipeIndex = localStorage.getItem('currRecipeIndex');

    if(sectionIndex){
        recipe = currentBook.sections[sectionIndex].recipes[recipeIndex];
    }else{
        recipe = currentBook.recipes[recipeIndex];
    }
    //console.log(recipe);
    h1.textContent=`${recipe.title}`;
    if(recipe.imgPath){
        let fig = document.createElement('figure');
        fig.innerHTML=`<img src="${recipe.imgPath}" alt="image of completed recipe">`
        main.appendChild(fig);
    }
    if(recipe.description){
        let description = document.createElement("section");
        description.innerHTML = `<h2>Description</h2>
            <p>${recipe.description}</p>`;
        main.appendChild(description);
    }
    if(recipe.ingredients){
        let ingredients = document.createElement("section");
        let innerList = recipe.ingredients.map((ingredient)=>{
            let ingredientString = ingredient.amount+' '+ ingredient.unit+' '+ingredient.ingredient;
            if(ingredient.note){
                ingredientString += (' - '+ingredient.note);
            }
            return `<li>${ingredientString}</li>`
        }).join('');
        ingredients.innerHTML = `<h2>Ingredients</h2><ul>${innerList}</ul>`;
        main.appendChild(ingredients);
    }
    if(recipe.steps){
        let directions = document.createElement("section");
        let innerList = recipe.steps.map((step)=>{
            return `<li>${step}</li>`
        }).join('');
        directions.innerHTML = `<h2>Directions</h2><ol>${innerList}</ol>`;
        main.appendChild(directions);
    }
    if(recipe.comments){
        let comments = document.createElement("section");
        comments.innerHTML = `<h2>Closing Comments</h2>
            <p>${recipe.comments}</p>`;
        main.appendChild(comments);
    }

    bookTitle.textContent = currentBook.title;

    //copy pasted
    let container = document.getElementById("navContent");
    let navList = document.createElement("ul");
    container.appendChild(navList);
    currentBook.sections.forEach((section, sIndex)=>{
        let navItem = document.createElement("li");
        let sectionHTML = document.createElement('details');
        sectionHTML.innerHTML=`<summary>${section.title}</summary>`

        let recipes = document.createElement("ul");
        section.recipes.forEach((recipe, rIndex)=>{
            let listItem = document.createElement("li");
            listItem.innerHTML = `<a href="./currentRecipe.html" class="iconLink">${recipe.title}<span aria-hidden="true" class="material-symbols-outlined">chevron_forward</span></a>`
            listItem.addEventListener("click",()=>{
                localStorage.setItem("currSectionIndex", sIndex);
                localStorage.setItem("currRecipeIndex", rIndex);
            });
            recipes.appendChild(listItem);
        })


        navList.appendChild(navItem).appendChild(sectionHTML).appendChild(recipes);
    })
}
/*
<ul>
                <li>
                    <details>
                        <summary>Mom's Recipes</summary>
                        <ul>
                            <li><a>Noodle Kugel</a></li>
                            <li><a>Blintz Loaf</a></li>
                            <li><a>Nanaimo Bars</a></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Grandma Rose's Recipes</summary>
                        <ul>
                            <li><a>Friendship Salad</a></li>
                            <li><a>Sweet and Sour Chicken</a></li>
                            <li><a>Sour Cream Blueberry Coffee Cake</a></li>
                            <li><a>Lemon Glazed Cake</a></li>
                        </ul>
                    </details>
                </li>
            </ul>
*/