function changeColor(squareId){
    var square 
    document.getElementById.squareId
    document.getElementById('square').style.backgroundColor = randomColor
    var randomColor = getRandomColor()
}

function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++)  {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
