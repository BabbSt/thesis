const addIngredient=document.getElementById('addIngredientBtn');
const ingredientSection=document.getElementById('newIngredients');
const addDirectionStep=document.getElementById('addDirectionBtn');
const DirectionsSection=document.getElementById('newDirections');

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
})