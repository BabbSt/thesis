const shareModal = document.getElementById("shareModal");
const shareDetailsModal = document.getElementById("shareDetailsModal");
const confirmShare = document.getElementById("confirmShare");

function openModal (modal){
	modal.showModal();
}

function closeModal (modal){
	modal.close();
    //clear values
}

//const account = document.getElementsByClassName("account_btn");

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
doneSharingButton.addEventListener("click",()=>{closeModal(confirmShare);});

let contacts = [
    'Sam',
    'Susan',
    'Sunny',
    'Stu'
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
    if(!results){
        resultsWrapper.classList.add("hidden");
    }else{
        let content = results.map((result)=>{
            return `<li>${result}</li>`
        }).join('');

        resultsWrapper.classList.remove("hidden");
        resultsWrapper.innerHTML = `<ul>${content}</ul>`;
    }
})