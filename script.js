let container = document.querySelector('.grid-container');
let clearButton = document.querySelector('.clear');
let colorButton = document.querySelector('.color');
let eraseButton = document.querySelector('.erase');
let currentColor = 'black';

function getGrid(n) {
    for(i = 0; i < n; i++) {
        let div = document.createElement('div');
        // div.dataset.indexNumber = i;
        div.classList.add('grid-item');
        container.appendChild(div);
    }
}

//grid number is a number thats equal height * weight. Ex: (32 * 32 = 1024) (16 * 16 = 256)...
getGrid(1024);

let startDrawing = (e) => {
    if(e.path[0].classList.contains('grid-item')) {e.path[0].style.backgroundColor = currentColor;};
};

addEventListener('mousedown', function(e){
    if(e.path[0].classList.contains('grid-item')) {
        addEventListener('mouseup', function(){
            removeEventListener('mouseover', startDrawing);
        });
        addEventListener('mouseover', startDrawing);   
    }
}) 

clearButton.addEventListener('click',
function() {
        let allGridItems = document.querySelectorAll('.grid-item');
        allGridItems.forEach(div => {
            div.style.backgroundColor = "white";
        });
    }
);
colorButton.addEventListener('click', 
function() {
    currentColor = colorPicker.value;
    colorButton.setAttribute('id','selected');
    eraseButton.removeAttribute('id','selected');
    }
);

eraseButton.addEventListener('click',
function() {
        currentColor = 'white';
        eraseButton.setAttribute('id','selected');
        colorButton.removeAttribute('id','selected');
    }
);

// Color picker
let colorPicker;
const defaultColor = "#383737";

window.addEventListener("load", startup, false);

function startup() {
    colorPicker = document.querySelector('.colorPicker');
    colorPicker.value = defaultColor;
    colorPicker.addEventListener("input", updateFirst, false);
  }

function updateFirst(event) {
    currentColor = event.target.value;
    currentColor = colorPicker.value;
};