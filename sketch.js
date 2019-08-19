function createGrid(container){
    var GRID_HEIGHT = 16;
    var GRID_WIDTH = 16;

    //const container = document.querySelector('#container');   

    for (i=0;i<GRID_HEIGHT;i++){
        for (j=0;j<GRID_WIDTH;j++){
            //single grid element
            const gridElement = document.createElement('div');
            gridElement.style.cssText = "width:" + (100/GRID_HEIGHT) + "%;" + 
"height:" + ((100/GRID_HEIGHT)*2) + "%;float:left;";
            gridElement.addEventListener("mouseenter",fillColor);
            container.appendChild(gridElement);
        }
    }
}

function onLoad(){
    createElements();
}

function fillColor(e){
    //console.log(randomColor());
    e.target.style.cssText+="background-color:" + randomColor() + ";";
}

function createElements(){
    const container = document.createElement('div');
    container.id = '#container';
    document.body.appendChild(container);
    createGrid(container);
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