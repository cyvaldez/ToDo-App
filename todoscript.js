//Variablen
let input = document.querySelector('input');
let Liste = document.querySelector('.Liste');
let ol = document.querySelector('ol');

const add = document.querySelector('.add');
const clear = document.querySelector('.clear');
const resetLast = document.querySelector('.resetLast')
let table = [];


document.addEventListener("keypress", (event) => {
    if (event.key == 'Enter') {
        if (input.value != '' && input.value != ' ') {
            table.push(input.value);
            ol.innerHTML = '';
            showElement();
            input.value = '';
        }
    }
});

add.addEventListener('click', () => {
    if (input.value != '' && input.value != ' ') {
        table.push(input.value)
        ol.innerHTML = '';
        showElement();
        input.value = '';
    }
});

clear.addEventListener("click", () => {
    ol.textContent = '';
    table = [];
});

resetLast.addEventListener("click", () => {
    table.pop();
    ol.innerHTML = '';
    showElement();
});

function showElement() {
    for (let i = 0; i < table.length; i++) {
        ol.innerHTML += `<li class="elem" onclick = 'change()'>${table[i]} </li>`
    }
}
function change() {
    let elemente = document.querySelectorAll('.elem')

    elemente.forEach(element => {
        element.onclick = () => {
            element.classList.add('element');
        }
    });
}
