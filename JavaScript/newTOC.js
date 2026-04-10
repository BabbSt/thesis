const main = document.getElementsByTagName('main')[0];
const saveSectionBtn = document.getElementById('submitSection');
const sectionName = document.getElementById("sectionTitle");
const modal = document.getElementById('addSectionModal');
const title = document.getElementById('bookTitle');
const globalRecipeBtn = document.getElementById('addRecipeGlobal');

//console.log(localStorage.getItem("test"));

let newTitle = localStorage.getItem("title");

if(newTitle){
	title.textContent=newTitle;
}

globalRecipeBtn.addEventListener("click",()=>{
	localStorage.removeItem("section");
	document.location='./newRecipe.html';
});

saveSectionBtn.addEventListener("click",()=>{
	let newSection = document.createElement("section");
	let startCaseSection = sectionName.value.replace(/(^|\s)[a-z]/gi, l => l.toUpperCase());
	newSection.innerHTML = `<h3>${startCaseSection}</h3>`
	//console.log(newSection);
	let addRecipeBtn = document.createElement("button");
	addRecipeBtn.type="button"
	addRecipeBtn.innerHTML = 'Add Recipe <span aria-hidden="true" class="material-symbols-outlined">add</span>'
	addRecipeBtn.classList.add('iconButton');
	//addRecipeBtn.setAttribute("onclick","document.location='./newRecipe.html'");
	addRecipeBtn.addEventListener('click',()=>{
		localStorage.setItem("section",startCaseSection);
		document.location='./newRecipe.html';
	})
	//console.log(addRecipeBtn);
	main.appendChild(newSection).appendChild(addRecipeBtn);
	modal.close();
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