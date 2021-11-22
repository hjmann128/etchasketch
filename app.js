const container = document.querySelector('.container');
const square = document.createElement('div');

const button = document.querySelector('.reset')
const buttonNew = document.querySelector(".new")

//Each box created must be 960px / number of boxes ( taking into account the 1px border) = 58px wide per box

// need to add css rules to each created box: width, border: solid, black, 1px height 
//width & height will always equal 960 - 32( borders) / number of boxes
size = 16; 

//function to select a random RGB Value 

function color () {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function buildEtch (size) {
    for(i = 0; i<size*size; i++){
        const square = document.createElement('div');
        container.appendChild(square)
        square.classList.add('square')
        square.setAttribute('style', `width: ${958/(size)}px; height: ${958/(size)}px;`)
        square.addEventListener('mouseover', () => {
            square.classList.add('square__black')
        })
    }
}

//clear button

button.addEventListener('click', () => {
    document.querySelectorAll(".square__black").forEach(function(element) {
        element.classList.remove("square__black");
        document.querySelectorAll(".square").forEach(function(element) {
            element.classList.remove("square__black")
        })
    });
})

//new grid button
buttonNew.addEventListener('click', () => {
    size = prompt("Enter a size for the new box ( max 100 )");
    if(size>100){
        size = prompt("Please pick a number between 1 and 100")
    }
    container.innerHTML = ''
    buildEtch(size)
})





buildEtch(size);    