let inputName = document.getElementById("inputName");
let editName = document.getElementById("editName");
let inputPhone = document.getElementById("inputPhone");
let editPhone = document.getElementById("editPhone");
let inputAge = document.getElementById("inputAge");
let editAge = document.getElementById("editAge");
let inputTelegram = document.getElementById("inputTelegram");
let editTelegram = document.getElementById("editTelegram");
let inputInstagram = document.getElementById("inputInstagram");
let editInstagram = document.getElementById("editInstagram");
let inputFacebook = document.getElementById("inputFacebook");
let editFacebook = document.getElementById("editFacebook");
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

}

class Contacts extends ContactsBook {
    constructor(name, phone, age) {
        super();
        this.name = name;
        this.phone = phone;
        this.age = age;
    }
}

class ContactsAndSocialNеtworks extends Contacts {
    constructor(name, phone, age, nicknameTelegram, nicknameInstagram, nicknameFacebook) {
        super();
        this.name = name;
        this.phone = phone;
        this.age = age;
        this.nicknameTelegram = nicknameTelegram;
        this.nicknameInstagram = nicknameInstagram;
        this.nicknameFacebook = nicknameFacebook;
    }
    getUserContainer() {
        return `<div class="outputContent" id="outContent${counterContact}">
        <button id="delete" onclick="deleteContact()">X</button>
        <button id="edit" onclick="editContact()">Edit</button>
            <p id="pName">Имя: ${this.name}</p>
            <p id="pPhone">Телефон: ${this.phone}</p>
            <p id="pAge">Возраст: ${this.age}</p>
            <p id="pAge">Telegram: ${this.nicknameTelegram}</p>
            <p id="pAge">Instagram: ${this.nicknameInstagram}</p>
            <p id="pAge">Facebook: ${this.nicknameFacebook}</p>
         </div>`;
    }
}

function CreateObject() {
    let user = new ContactsAndSocialNеtworks(inputName.value, inputPhone.value, inputAge.value, inputTelegram.value, inputInstagram.value, inputFacebook.value);
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