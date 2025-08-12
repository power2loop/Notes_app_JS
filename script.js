const notescontainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

function loadNotes() {
    notescontainer.innerHTML = localStorage.getItem("notes");
}
loadNotes();

function updateStorage() {
    localStorage.setItem("notes", notescontainer.innerHTML);
}



createBtn.addEventListener('click', () => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.classList.add('input-box');
    inputBox.setAttribute('contenteditable', 'true');
    img.src = 'images/delete.png';
    notescontainer.appendChild(inputBox);
    inputBox.appendChild(img);
    updateStorage();

});

notescontainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }
        })
    }

});