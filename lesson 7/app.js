const form = document.querySelector('.form');
const inputName = document.querySelector('.input-name');
const inputEmail = document.querySelector('.input-email');
const inputUrl = document.querySelector('.input-url');
const inputText = document.querySelector('.input-text');
const cardContainer = document.querySelector('.trt');

const data = [
    {
        name: 'ZAFARBEK',
        email: 'Zafarbekkarimboyev47@gmail.com',
        url: 'https://github.com/',
        text: 'Hi world'
    },
    {
        name: 'John',
        email: 'John7@gmail.com',
        url: 'https://github.com/',
        text: 'Hi world'
    }
];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let newUser = {
        name: inputName.value,
        email: inputEmail.value,
        url: inputUrl.value,
        text: inputText.value
    };
    data.push(newUser);
    createElement(data);
    inputName.value = '';
    inputEmail.value = '';
    inputUrl.value = '';
    inputText.value = '';
});

function createElement(data) {
    cardContainer.innerHTML = '';
    data.forEach((item, index) => {
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.innerHTML = `
            <img src="./img/user.png" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>${item.email}</p>
            <p>${item.url}</p>
            <p>${item.text}</p>
            <button onclick="deleteUser(${index})">Delete</button>
        `;
        cardContainer.appendChild(cardDiv);
    });
}

createElement(data);

function deleteUser(index) {
    data.splice(index, 1);
    createElement(data);
}
