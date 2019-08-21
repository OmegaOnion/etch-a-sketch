function createGrid(gridSize){
    var GRID_HEIGHT = gridSize;
    var GRID_WIDTH = GRID_HEIGHT;

    const container = document.createElement('div');
    container.id = 'container';
    container.style.cssText= "width:500px;height:500px;border-style:solid;" +
"margin-left:auto;margin-right:auto;";
    document.body.appendChild(container);

    var HEIGHT_RATIO = 1; // height multiplier

    for (i=0;i<GRID_HEIGHT;i++){
        for (j=0;j<GRID_WIDTH;j++){
            //single grid element
            const gridElement = document.createElement('div');
            gridElement.className = 'cell';
            gridElement.style.cssText = "width:" + (100/GRID_HEIGHT) + "%;" + 
"height:" + ((100/GRID_HEIGHT)*HEIGHT_RATIO) + "%;float:left;";
            gridElement.addEventListener("mouseenter",fillColor);
            container.appendChild(gridElement);
        }
    }
    return container;
}

function onLoad(){
    createElements();
}

function fillColor(e){
    e.preventDefault();
    if (e.buttons == 1){
        e.target.style.cssText+="background-color:" + randomColor() + ";";
    }    
}

function createElements(){
    var DEFAULT_SIZE = 32;

    const container = createGrid(DEFAULT_SIZE);
    createButtons(container);
}

function randomColor(){
    var MAX_HEX_LENGTH = 6; // max hex value is 16
    var hexString = '#';
    for (i=0;i<MAX_HEX_LENGTH;i++){
        var value = getRandomInt(16);
        if (value >9){
            var hex = (value==10)? 'a'
            : (value==11)? 'b'
            : (value==12)? 'c'
            : (value==13)? 'd'
            : (value==14)? 'e'
            : 'f';
        } else var hex = value;
        hexString+=hex;
    }
    return hexString;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function createButtons(container){
    const resetButton = document.createElement('button');
    resetButton.innerHTML = "Reset";
    resetButton.style.cssText = "margin:5px;";

    resetButton.addEventListener("click",resetGrid);

    const sizeButton = document.createElement('button');
    sizeButton.innerHTML = "Set grid size";
    sizeButton.style.cssText = "margin:5px;";

    sizeButton.addEventListener("click",setGridSize);

    container.appendChild(resetButton);
    container.appendChild(sizeButton);
}

function resetGrid(){
    var elements = document.getElementsByClassName('cell');
    for(i=0;i<elements.length;i++){
        elements[i].style.cssText+="background-color:white;";
    }
}

function setGridSize(){
    var gridSize = prompt("Grid height/length?");
    removeChildren();
    const container = createGrid(gridSize);
    createButtons(container);
}

function removeChildren(){
    while (document.body.hasChildNodes()){
        document.body.removeChild(document.body.firstChild);
    }
}