let container = document.querySelector('.grid-container');
let btnClear = document.querySelector('.clear');
let currentColor = 'black';
let btnErase = document.querySelector('.erase');
let btnColor = document.querySelector('.color');

function getGrid(n) {
    for(i = 0; i < n; i++) {
        let div = document.createElement('div');
        // div.dataset.indexNumber = i;
        div.classList.add('grid-item');
        container.appendChild(div);
    }
}

getGrid(256);

let startDrawing = (e) => {
    if(e.path[0].classList.contains('grid-item')) {e.path[0].style.backgroundColor = currentColor;};
} ;

addEventListener('mousedown', function(e){
    if(e.path[0].classList.contains('grid-item')) {
        addEventListener('mouseup', function(){
            removeEventListener('mouseover', startDrawing);
        });
        addEventListener('mouseover', startDrawing) ;   
    }
}) 

btnClear.addEventListener('click',
function() {
        let allGridItems = document.querySelectorAll('.grid-item');
        allGridItems.forEach(div => {
            div.style.backgroundColor = "white";
        });
    }
);

btnErase.addEventListener('click',
function() {
        currentColor = 'white';
    }
);

btnColor.addEventListener('click',
function() {
        currentColor = 'black';
    }
);