let container = document.querySelector('.grid-container');
let clearButton = document.querySelector('.clear');
let colorButton = document.querySelector('.color');
let eraseButton = document.querySelector('.erase');
let currentColor = 'black';

function getGrid(n) {
    for (let i = 0; i < n; i++) {
        let div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);
    }
}

getGrid(1024);

function startDrawing(e) {
    if (e.target.classList.contains('grid-item')) {
        e.target.style.backgroundColor = currentColor;
    }
}

function handleMouseUp() {
    removeEventListener('mouseover', startDrawing);
}

function handleMouseDown(e) {
    if (e.target.classList.contains('grid-item')) {
        addEventListener('mouseup', handleMouseUp);
        addEventListener('mouseover', startDrawing);
    }
}

addEventListener('mousedown', handleMouseDown);

clearButton.addEventListener('click', function () {
    let allGridItems = document.querySelectorAll('.grid-item');
    allGridItems.forEach((div) => {
        div.style.backgroundColor = 'white';
    });
});

colorButton.addEventListener('click', function () {
    currentColor = colorPicker.value;
    colorButton.setAttribute('id', 'selected');
    eraseButton.removeAttribute('id', 'selected');
});

eraseButton.addEventListener('click', function () {
    currentColor = 'white';
    eraseButton.setAttribute('id', 'selected');
    colorButton.removeAttribute('id', 'selected');
});

// Color picker
let colorPicker;
const defaultColor = '#383737';

window.addEventListener('load', startup, false);

function startup() {
    colorPicker = document.querySelector('.colorPicker');
    colorPicker.value = defaultColor;
    colorPicker.addEventListener('input', updateFirst, false);
}

function updateFirst(event) {
    currentColor = event.target.value;
    currentColor = colorPicker.value;
}
