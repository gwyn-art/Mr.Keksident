var presidents = 
    [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ];



function init(){
    addRandom();
    addRandom();
    render();
    printConsole();
}
document.addEventListener('DOMContentLoaded', function(){
    init();
});
document.onkeydown = function(e){
    console.log(e.keyCode);
    switch(e.keyCode){
        case 38: up(); break;
        case 37: left(); break;
        case 39: right(); break;
        case 40: down();break;
        default: console.log("press arrow key");
    }
}
function render(){
    for(let i = 0; i < presidents.length; i++)
        for(let j = 0; j < presidents[i].length; j++){
            let temp = document.getElementById("block-"+i+j);
            console.log(temp,i,j);
            temp.innerHTML = presidents[i][j];
        }
}
function checkForFreePlace(){
    for(let i = 0; i < presidents.length; i++)
        for(let j = 0; j < presidents[i].length; j++)
            if(presidents[i][j] == 0)
                return true;
    return false;
}
function addRandom(){
    if(!checkForFreePlace()) return;
    var x = getRandomInt(0, 3), y = getRandomInt(0, 3);
    console.log(x, y, presidents[x][y]);
    if(presidents[x][y] == 0){
        presidents[x][y] = 2;
        return;
    }
    addRandom();
}
function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function up(){
    for(let i = 1; i < presidents.length; i++)
        for(let j = 0; j < presidents[i].length; j++){
            var temp = i;
            while(temp > 0){
                if(presidents[temp-1][j] == 0){
                    presidents[temp-1][j] = presidents[temp][j];
                    presidents[temp][j] = 0;
                }
                if(presidents[temp-1][j] == presidents[temp][j]){
                    presidents[temp-1][j] = presidents[temp][j]*2;
                    presidents[temp][j] = 0;
                }
                temp--;
            }
        }
    addRandom();
    render();
    printConsole();
}
function down(){
    for(let i = presidents.length-2; i >= 0; i--)
        for(let j = 0; j < presidents[i].length; j++){
            let temp = i;
            while(temp < presidents.length-1){
                if(presidents[temp+1][j] == 0){
                    presidents[temp+1][j] = presidents[temp][j];
                    presidents[temp][j] = 0;
                }
                else if(presidents[temp+1][j] == presidents[temp][j]){
                    presidents[temp+1][j] = presidents[temp][j]*2;
                    presidents[temp][j] = 0;
                }
                temp++;
            }
        }
    addRandom();
    render();
    printConsole();
}
function right(){
    for(let i = 0; i < presidents.length; i++)
        for(let j = presidents[i].length-1; j >= 0; j--){
            let temp = j;
            //console.log(i, j);
            while(temp < presidents.length-1){
                //console.log(temp);
                if(presidents[i][temp+1] == 0){
                    presidents[i][temp+1] = presidents[i][temp];
                    presidents[i][temp] = 0;
                }
                else if(presidents[i][temp+1] == presidents[i][temp]){
                    presidents[i][temp+1] = presidents[i][temp]*2;
                    presidents[i][temp] = 0;
                }
                temp++;
            }
        }
    addRandom();
    render();
    printConsole();
}
function left(){
    for(let i = 0; i < presidents.length; i++)
        for(let j = 1; j < presidents.length; j++){
            let temp = j;
            while(temp > 0){
                if(presidents[i][temp-1] == 0){
                    presidents[i][temp-1] = presidents[i][temp];
                    presidents[i][temp] = 0;
                }
                else if(presidents[i][temp-1] == presidents[i][temp]){
                    presidents[i][temp-1] = presidents[i][temp]*2;
                    presidents[i][temp] = 0;
                }
                temp--;
            }
        }
    addRandom();
    render();
    printConsole();
}

function printConsole(){
    console.log(
`
______________
|${presidents[0][0]}||${presidents[0][1]}||${presidents[0][2]}||${presidents[0][3]}|
______________
|${presidents[1][0]}||${presidents[1][1]}||${presidents[1][2]}||${presidents[1][3]}|
______________
|${presidents[2][0]}||${presidents[2][1]}||${presidents[2][2]}||${presidents[2][3]}|
______________
|${presidents[3][0]}||${presidents[3][1]}||${presidents[3][2]}||${presidents[3][3]}|
______________
`
    );
}