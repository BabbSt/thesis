const addIngredient=document.getElementById('addIngredientBtn');
const ingredientSection=document.getElementById('newIngredients');
const addDirectionStep=document.getElementById('addDirectionBtn');
const DirectionsSection=document.getElementById('newDirections');

const form = document.getElementById('new_recipe');
const bookSelect = document.getElementById('book');
const sectionSelect = document.getElementById('section');
const recipeTitle = document.getElementById('title');
const description = document.getElementById('description');
const comments = document.getElementById('comments');
const imageSelector = document.getElementById('image');

//let newTitle = localStorage.getItem("title");

let newBook = localStorage.getItem("newBook");
let book;

if(newBook){
    book = JSON.parse(newBook);
    let newOption = document.createElement("option");
    newOption.text=book.title;
    newOption.setAttribute("selected","");
    //console.log(newOption);
    bookSelect.appendChild(newOption);
}

let newSection = localStorage.getItem("section");
if(newSection){
    let newOption = document.createElement("option");
    newOption.text=newSection;
    newOption.setAttribute("selected","");
    //console.log(newOption);
    sectionSelect.appendChild(newOption);
}

let ingredientCount = 1;

addIngredient.addEventListener("click", ()=>{
    ingredientCount+=1;
    let newIngredient = ` <div>
                        <input type="text" class="shortInput" id="amount${ingredientCount}" name="amount${ingredientCount}">
                        <label for="amount${ingredientCount}">Amount</label>
                    </div>
                    <div>
                        <input type="text" class="shortInput" id="unit${ingredientCount}" name="unit${ingredientCount}">
                        <label for="unit${ingredientCount}">Unit</label>
                    </div>
                    <div>
                        <input type="text" class="medInput" id="ingredient${ingredientCount}" name="ingredient${ingredientCount}">
                        <label for="ingredient${ingredientCount}">Ingredient</label>
                    </div>
                    <div>
                        <input type="text" class="medInput" id="note${ingredientCount}" name="note${ingredientCount}">
                        <label for="note${ingredientCount}">Note</label>
                    </div>`
    let newIngredientElement = document.createElement("fieldset");
    newIngredientElement.classList.add('ingredientInputs');
    newIngredientElement.innerHTML=newIngredient;
    //console.log(newIngredient);
    ingredientSection.appendChild(newIngredientElement);
});

let directionCount = 1;
addDirectionStep.addEventListener("click",()=>{
    directionCount+=1;
    let newStepLabel=document.createElement("label");
    newStepLabel.setAttribute("for",`step${directionCount}`);
    newStepLabel.textContent=`Step ${directionCount}`;
    let newStepInput=document.createElement("input");
    newStepInput.type = "text";
    newStepInput.id = `step${directionCount}`;
    newStepInput.name = `step${directionCount}`;
    newStepInput.classList.add("longInput");

    //console.log(newStepLabel);
    //console.log(newStepInput);

    DirectionsSection.appendChild(newStepLabel);
    DirectionsSection.appendChild(newStepInput);
});

imageSelector.addEventListener("change",getImage);


form.addEventListener("submit",()=>{
    let recipe = {
        title: recipeTitle.value.replace(/(^|\s)[a-z]/gi, l => l.toUpperCase()),
        imgPath: localStorage.getItem("imagePath"),
        description: description.value,
        ingredients: getIngredients(),
        steps: getSteps(),
        comments: comments.value
    }
    if(sectionSelect.value=="Choose a section"){
        book.recipes.push(recipe);
    }else{
        for(let i=0; i<book.sections.length; i++){
            if(book.sections[i].title==sectionSelect.value){
                book.sections[i].recipes.push(recipe);
            }
        }
    }
    //console.log(book);
    localStorage.setItem("newBook",JSON.stringify(book));
    localStorage.removeItem("imagePath");
})

function getIngredients(){
    let ingFieldsets = document.querySelectorAll('.ingredientInputs'); 
    let ingredients = [];
    ingFieldsets.forEach((fieldset)=>{
       let inputs =  fieldset.getElementsByTagName('input');
       let ingredient = {
        amount: inputs[0].value,
        unit: inputs[1].value,
        ingredient: inputs[2].value,
        note: inputs[3].value,
       }
       ingredients.push(ingredient);
    })
    return ingredients;
}

function getSteps(){
    let directions = document.getElementById("directions");
    let steps = [];
    let inputs =  directions.querySelectorAll('input');
    inputs.forEach((input)=>{
        steps.push(input.value);
    })
    return steps;
}

function getImage(){
    let image = imageSelector.files[0];
    const reader = new FileReader();
    let path;
    reader.addEventListener('load', () => {
        localStorage.setItem("imagePath", reader.result);
    });

    if (image) {
        reader.readAsDataURL(image);
    }
}