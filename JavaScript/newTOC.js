const modal=document.getElementById('addSectionModal');

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
submitSectionButton.addEventListener('click', closeModal);