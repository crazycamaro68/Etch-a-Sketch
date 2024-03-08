let gridBox = document.querySelector('#gridBox');
let gridSize = 6;
let buttonStart = document.querySelector('#start');



const genGrid = function(gridSize){
for(i = 0; i < gridSize; i++){
    let boxRow = document.createElement('div');
    boxRow.setAttribute('id', 'boxRow'+i);
    boxRow.setAttribute('class', 'boxFlex');
    gridBox.appendChild(boxRow);
}
for(int = 0; int < gridSize; int++){
    let boxRow = document.querySelector('#boxRow'+int);
    rowCreate(boxRow, gridSize);
}
}
const rowCreate = function(boxRow, gridSize){
    for(i = 0; i < gridSize; i++){
    let boxCol = document.createElement('div');
    boxCol.setAttribute('id', "boxCol"+ i);
    boxCol.setAttribute('class', 'boxCol')
    boxRow.appendChild(boxCol);
    }
}

let deleteGrid = function(){
    let deleteBox = document.querySelectorAll('.boxFlex');
    if(deleteBox.length == 0){
    console.log("empty");
    }else{
        for(i = 0; i < deleteBox.length; i++){
            deleteBox[i].remove();
            }
    }

}


buttonStart.addEventListener('click', (event) =>{
    deleteGrid();
    let intrySize = prompt("Enter a number for grid size");
    if(intrySize > 0 && intrySize <= 100){
    genGrid(intrySize);
    startEtch();
    }else{
        alert("invaild input. Try Again.");
    }

})

const startEtch = function(){
let hoverBox = document.getElementsByClassName("boxCol");

for(i = 0; i < hoverBox.length; i++){
    hoverBox[i].addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = "rgb(0, 225, 255)";
    });
}
}


