//change to black 
function toBlack(e) {
    e.target.style.backgroundColor = 'rgba(20,31,27)';
}

//erase cell 
function erase(e) {
    e.target.style.backgroundColor = '#ffffff';
}

//change to random color 
function random(e) {
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
    e.target.style.backgroundColor = randomColor;
}

//does the drawing function
function draw() {
    const cells = document.querySelectorAll('cell');
    cells.forEach(cell => cell.addEventListener('click', function(e) {
        if (action == 'blackAndWhite') {
            toBlack(e);
        }
        else if (action == 'erase') {
            erase(e);
        }
        else if (action == 'rainbow') {
            random(e);
        }
    }));
}

// Creating a div grid 
function createGrid(userDiv) {    
    const gridContainer = document.getElementById('grid-container');
    
    //deletes existing grid
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    
    //edits number of columns
    let htmlStyles = window.getComputedStyle(document.querySelector("html"));
    let colNum = parseInt(htmlStyles.getPropertyValue("--colNum"));
    document.documentElement.style.setProperty("--colNum", userDiv);

    //creates grid
    for (let i = 0; i < userDiv; i++) {
        for (let j = 0; j < userDiv; j++) {
            let cell = document.createElement('cell');
            gridContainer.appendChild(cell);
        }
    }

    draw();
}

// create a default 16x16 grid
createGrid(16);
let action = 'blackAndWhite';

//event listeners for modes
const blackmode = document.getElementById('blackmode');
blackmode.addEventListener('click', function(e) {
    console.log(e);
    action = 'blackAndWhite';
})

const rainbowmode = document.getElementById('rainbowmode');
rainbowmode.addEventListener('click', function(e) {
    console.log(e);
    action = 'rainbow';
})

const erasemode = document.getElementById('erasemode');
erasemode.addEventListener('click', function(e) {
    console.log(e);
    action = 'erase';
})

// Changing dimensions
let range = document.getElementById("input-range");
let value = 16;
value.innerHTML = range.value;
    
range.oninput = function() {
    value = this.value;
    createGrid(value);
}

