let inputName = document.getElementById("inputName");
let editName = document.getElementById("editName");
let inputPhone = document.getElementById("inputPhone");
let editPhone = document.getElementById("editPhone");
let inputAge = document.getElementById("inputAge");
let editAge = document.getElementById("editAge");
let add = document.getElementById("add");
let submit = document.getElementById("submit");
let output = document.getElementById('output');
let users = [];
let modal = document.getElementById("myModal");
let closeBtn = document.getElementById("close");
let closeEdit = document.getElementById("closeEdit");
let editModal = document.getElementById("editModal");
let editBtn = document.getElementById("editBtn");
let counterContact = 0;

class ContactsBook {
    constructor(name, phone, age) {
        this.name = name;
        this.phone = phone;
        this.age = age;
    }

    getUserContainer() {
        return `<div class="outputContent" id="outContent${counterContact}">
        <button id="delete" onclick="deleteContact()">X</button>
        <button id="edit" onclick="editContact()">Edit</button>
            <p id="pName">${this.name}</p>
            <p id="pPhone">${this.phone}</p>
            <p id="pAge">${this.age}</p>
         </div>`;
    }
}

function CreateObject() {
    let user = new ContactsBook(inputName.value, inputPhone.value, inputAge.value);
    counterContact++;
    output.insertAdjacentHTML('beforeend', user.getUserContainer());

    users.push(user);
    console.log(users);
}

function CheckInput() {
    if (inputName.value == "" || inputPhone.value == "" || inputAge.value == "") {
        alert("Пожалуйста, введите данные");
    }
}

function deleteContact() {
    let contactLine = event.target.closest('div');
    let deleteElement = document.getElementById("output")
    deleteElement.removeChild(contactLine);
    counterContact--;
}

function editContact() {
    let editLine = event.target.closest('div');
    console.log(editLine);
    let editElemName = editLine.querySelector("#pName");
    let editElemPhone = editLine.querySelector("#pPhone");
    let editElemAge = editLine.querySelector("#pAge");
    editModal.style.display = "block";
    editBtn.addEventListener("click", function() {
        editElemName.textContent = editName.value;
        editElemPhone.textContent = editPhone.value;
        editElemAge.textContent = editAge.value;
        editModal.style.display = "none";
    })
    closeEdit.addEventListener("click", function() {
        editModal.style.display = "none";
    })
}

submit.addEventListener("click", function() {
    CheckInput();
    CreateObject();
    modal.style.display = "none";
})

add.onclick = function() {
    modal.style.display = "block";
}

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
})



// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}