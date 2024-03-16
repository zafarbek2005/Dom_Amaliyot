const form = document.querySelector('.form');
const input_name = document.querySelector('.input-name');
const input_emil = document.querySelector('.input-emil');
const int_url = document.querySelector('.int-url');
const int_txt = document.querySelector('.int_txt');
const trt = document.querySelector('.trt card');

const Data = [
    {
        name: 'ZAFARBEK',
        emil: 'Zafarbekkarimboyev47@gmail.com',
        url: 'https://github.com/',
        text: 'Hi world'
    },
    {
        name: 'John',
        emil: 'John7@gmail.com',
        url: 'https://github.com/',
        text: 'Hi world'
    }
]

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let newUser = {
        name: input_name.value,
        emil: input_emil.value,
        url: int_url.value,
        text: int_txt.value
    }
Data.push(newUser)
creteElement(Data)
    input_name.value = '';
    input_emil.value = '';
    url.value = '' ;
    text.value = '' ; 
});

function creteElement(data,index) {
    while(trt.firstChild){
        trt.firstChild.remove()
    }
    data.forEach(item => {
        let div = document.createElement('div')
        div.innerHTML = `
        <div class="card">
        <img src="./img/user.png" alt="Jon Watson">
        <h2>${item.name}</h2>
        <p>${item.emil}</p>
        <p>${item.url}</p>
        <p>${item.text}</p>
        <button onclick = "deleteuser(${index})">Delete</button>
      </div>
        `
        trt.appendChild(div)
    })
}
creteElement(Data)
function deleteuser (index) {
    Data.splice(index,1)
    creteElement(Data)
}
