let container = document.querySelector('.grid-container');

function getGrid(n) {
    for(i = 0; i < n; i++) {
        let div = document.createElement('div');
        // div.dataset.indexNumber = i;
        div.classList.add('grid-item');
        container.appendChild(div);
    }
}

getGrid(256)

let stopDrawing = (e) => e.path[0].style.backgroundColor = "black";


addEventListener('mousedown', function(e){
    if(e.path[0].classList.contains('grid-item')) {
        
        this.addEventListener('mouseup', function(){
            removeEventListener('mouseover', stopDrawing)
        })
    
        this.addEventListener('mouseover', stopDrawing)    
        
        console.log(e.path[0].classList)
    }
}) 

    