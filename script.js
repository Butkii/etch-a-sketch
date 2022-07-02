// Changing dimensions

createGrid(16);
const sizeButton = document.getElementById('change-size');
sizeButton.addEventListener('click', function(e) {
    console.log(e);
    let userDiv = prompt('Enter dimensions (maximum 100)');
    createGrid(userDiv);
})


// Creating a div grid 
function createGrid(userDiv) {    
    const gridContainer = document.getElementById('grid-container');
    gridContainer.gridTemplateColumns = 'repeat(userDiv, 1fr)';
    
    for (let i = 0; i < userDiv; i++) {
        for (let j = 0; j < userDiv; j++) {
            let cell = document.createElement('cell');
            gridContainer.appendChild(cell);
        }
    }

    const cells = document.querySelectorAll('cell');
    cells.forEach(cell => cell.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'rgba(20,31,27)';
    }));
}


