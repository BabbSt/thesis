const shareModal = document.getElementById("shareModal");
const shareDetailsModal = document.getElementById("shareDetailsModal");
const confirmShare = document.getElementById("confirmShare");
const contactNameElements = document.querySelectorAll(".contactName");
const accessRadios = document.getElementById('accessRadios');
const accessSelect = document.getElementById('accessSelect');
const accessText = document.getElementById('accessText');
const viewRadio = document.getElementById('view');
const editRadio = document.getElementById('edit');
const shareMessage = document.getElementById('shareMessage');

function openModal (modal){
	modal.showModal();
}

function closeModal (modal){
	modal.close();
    //clear values
}

accessRadios.addEventListener('change',()=>{
    let access = document.querySelector('input[name=accessRadio]:checked');
    //console.log(access.value);
    accessSelect.value = access.value;
    accessText.textContent = access.value;
});

accessSelect.addEventListener('change', ()=>{
    accessText.textContent = accessSelect.value;
})

const susanButton = document.getElementById("susan");
susanButton.addEventListener("click",()=>{
    closeModal(shareModal);
    openModal(shareDetailsModal);
});

const submitShareButton = document.getElementById("submitShare");
submitShareButton.addEventListener("click",()=>{
    closeModal(shareDetailsModal);
    openModal(confirmShare);
    //figure out how to this properly with submit button type
});

const doneSharingButton = document.getElementById("doneSharing");
doneSharingButton.addEventListener("click",()=>{
    closeModal(confirmShare);
    editRadio.checked = false;
    viewRadio.checked = true;
    accessSelect.value = 'view';
    accessText.textContent = 'view';
    shareMessage.value = '';
});

let contacts = [
    'Sam Smith',
    'Susan Marcus',
    'Sunny Monroe',
    'Stu Pickles'
]

const searchInput=document.getElementById("searchContacts");
const resultsWrapper=document.getElementById("results");

searchInput.addEventListener("keyup",(e)=>{
    //console.log(e.target.value);

    let results = [];
    let input = searchInput.value;

    if(input){
        results = contacts.filter((contact)=>{
            return contact.toLowerCase().includes(input.toLowerCase());
        })
        //console.log(results);
    }
    if(resultsWrapper.firstChild){
            resultsWrapper.removeChild(resultsWrapper.firstChild);
        }
    if(results.length>0){   
        let resultsList = document.createElement("ul");
        results.forEach((result)=>{
            let listItem = document.createElement('li');
            let button = document.createElement('button');
            button.type = "button"
            button.classList.add("linkButton");
            button.textContent = result;
            button.addEventListener('click',()=>{
                    closeModal(shareModal);
                    contactNameElements.forEach((element)=>{
                        element.textContent=result;
                    });
                    openModal(shareDetailsModal);
            });
            resultsList.appendChild(listItem).appendChild(button);
        });
        resultsWrapper.appendChild(resultsList);
    }
})

