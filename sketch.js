function createGrid(){
    var GRID_HEIGHT = 16;
    var GRID_WIDTH = 16;

    const container = document.querySelector('#container');   

    for (i=0;i<GRID_HEIGHT;i++){
        for (j=0;j<GRID_WIDTH;j++){
            //single grid element
            const gridElement = document.createElement('div');
            gridElement.style.cssText = "width:" + (100/GRID_HEIGHT) + "%;" + 
"height:" + ((100/GRID_HEIGHT)*2) + "%;float:left;";
            container.appendChild(gridElement);
        }
    }
}

function onLoad(){
    createGrid();
}