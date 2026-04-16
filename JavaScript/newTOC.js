const main = document.getElementsByTagName('main')[0];
const saveSectionBtn = document.getElementById('submitSection');
const sectionName = document.getElementById("sectionTitle");
const modal = document.getElementById('addSectionModal');
const title = document.getElementById('bookTitle');
const globalRecipeBtn = document.getElementById('addRecipeGlobal');
const saveBookBtn = document.getElementById('saveBtn');

//console.log(localStorage.getItem("test"));

let newBook = localStorage.getItem("newBook");
let book = "";

if(newBook){
	book = JSON.parse(newBook);
	//console.log(book.title);

	title.setAttribute('style',`font-family: ${book.fonts[0]};`);
	title.textContent=book.title;

	document.getElementsByTagName('h2')[0].setAttribute('style',`font-family: ${book.fonts[1]};`);
	
	main.setAttribute('style',`font-family: ${book.fonts[2]};`);

	let noSectionRecipes = document.createElement("ul");
    let recipeList = book.recipes.map((recipe)=>{
            return `<li class="iconLink">${recipe.title}
			<div class="editClose">
			<a href="#"><span aria-hidden="true" class="material-symbols-outlined">edit</span></a>
			<button aria-label="Delete" class="menuButton"><span aria-hidden="true" class="material-symbols-outlined">close</span></button>
			</div>
			</li>`
        }).join('');
	noSectionRecipes.innerHTML = recipeList;
    main.appendChild(noSectionRecipes);

	book.sections.forEach((section)=>{
		let newSection = document.createElement("section");
		newSection.innerHTML = `<h3 style='font-family: ${book.fonts[1]}'>${section.title}</h3>`;

		let recipes = document.createElement("ul");
		let innerList = section.recipes.map((recipe)=>{
            return `<li class="iconLink">${recipe.title}
			<div class="editClose">
			<a href="#"><span aria-hidden="true" class="material-symbols-outlined">edit</span></a>
			<button aria-label="Delete" class="menuButton"><span aria-hidden="true" class="material-symbols-outlined">close</span></button>
			</div>
			</li>`
        }).join('');
		recipes.innerHTML=innerList;
		//console.log(recipes);
		
		let addRecipeBtn = document.createElement("button");
		addRecipeBtn.type="button"
		addRecipeBtn.innerHTML = 'Add Recipe <span aria-hidden="true" class="material-symbols-outlined">add</span>'
		addRecipeBtn.classList.add('iconButton');
		addRecipeBtn.addEventListener('click',()=>{
			localStorage.setItem("section",section.title);
			document.location='./newRecipe.html';
		});
		main.appendChild(newSection).appendChild(recipes);
		newSection.appendChild(addRecipeBtn);
	});

	//add logic for non section recipes
}

globalRecipeBtn.addEventListener("click",()=>{
	localStorage.removeItem("section");
	document.location='./newRecipe.html';
});

saveSectionBtn.addEventListener("click",()=>{
	if(!sectionName.value){
		//sectionName.setCustomValidity("Please fill out this field");
		sectionName.reportValidity();
	}else{
	let newSection = document.createElement("section");
	let startCaseSection = sectionName.value.replace(/(^|\s)[a-z]/gi, l => l.toUpperCase());
	newSection.innerHTML = `<h3 style='font-family: ${book.fonts[1]}'>${startCaseSection}</h3>`
	if(book){
		book.sections.push({
			title: startCaseSection,
			recipes: []});
		let jsonBook = JSON.stringify(book)
		localStorage.setItem("newBook",jsonBook);
	}
	//console.log(newSection);
	let addRecipeBtn = document.createElement("button");
	addRecipeBtn.type="button"
	addRecipeBtn.innerHTML = 'Add Recipe <span aria-hidden="true" class="material-symbols-outlined">add</span>'
	addRecipeBtn.classList.add('iconButton','sectionAddRecipe');
	//addRecipeBtn.setAttribute("onclick","document.location='./newRecipe.html'");
	addRecipeBtn.addEventListener('click',()=>{
		localStorage.setItem("section",startCaseSection);
		document.location='./newRecipe.html';
	})
	//console.log(addRecipeBtn);
	main.appendChild(newSection).appendChild(addRecipeBtn);
	modal.close();}
});

saveBookBtn.addEventListener("click",()=>{
	let books = localStorage.getItem("booksArray");
	let booksArray;
	if(books){
		booksArray = JSON.parse(books);
		booksArray.push(book);
	}else{
		booksArray = [book];
	}
	localStorage.setItem("booksArray",JSON.stringify(booksArray));
	document.location='./bookshelf.html';
});

/*old modal code
const modal = document.getElementById('addSectionModal');
function openModal (event){
	modal.classList.remove("hidden");
	//background.classList.remove('hidden');
}

function closeModal (event){
	modal.classList.add('hidden');
	//background.classList.add('hidden');
    //clear values
	event.stopPropagation;
}

const addSectionButton = document.getElementById('addSectionButton');
addSectionButton.addEventListener('click', openModal);

const cancelSectionButton = document.getElementById('cancelSection');
cancelSectionButton.addEventListener('click', closeModal);

const submitSectionButton = document.getElementById('submitSection');
submitSectionButton.addEventListener('click', closeModal);*/