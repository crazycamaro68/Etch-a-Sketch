let gridBox = document.querySelector('#gridBox');
let gridSize = 6;




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
genGrid(6);
const colorChange = function(){
const hoverBox = document.getElementsByClassName(".boxCol");


hoverBox.addEventListener("mouseover", hoverChangeColor(), false);
function hoverChangeColor(){
    alert('test');
}; 
}
colorChange();


