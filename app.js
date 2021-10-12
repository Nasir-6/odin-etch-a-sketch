//Variables
let currentColour = "blue"
let currentMode = "Rainbow"

//Get all HTML Elements
let resolutionSlider = document.getElementById("myRange");
let resolutionOutput = document.getElementById("sliderOutput");
let gridContainer = document.getElementById("grid-container");
let colourPicker = document.getElementById("colourPicker");
let colourModeBtn = document.getElementById("colourBtn");
let rainbowModeBtn = document.getElementById("rainbowBtn");
let eraserModeBtn = document.getElementById("eraserBtn");


eraserModeBtn.addEventListener("click", changeColourMode);
colourModeBtn.addEventListener("click", changeColourMode);
rainbowModeBtn.addEventListener("click", changeColourMode);

function changeColourMode(event){
  currentMode = event.target.value;
  addColourToGrids();
}




colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  currentColour = event.target.value;
  addColourToGrids();
}


// Display the default slider value

updateResolutionOutput();
reloadGrid();
addColourToGrids();

// Update the current slider value (each time you drag the slider handle)
resolutionSlider.oninput = function () {
  updateResolutionOutput();
  reloadGrid();
  addColourToGrids();
}


function updateResolutionOutput() {
  resolutionOutput.innerHTML = `${resolutionSlider.value} X ${resolutionSlider.value}`;
}

function reloadGrid() {
  gridContainer.style.gridTemplateColumns = `repeat(${resolutionSlider.value},1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${resolutionSlider.value},1fr)`;
  //Now make divs and append it 
  gridContainer.innerHTML = ''; // First clear all HTML to prevent acculmulation
  for (let i = 0; i < resolutionSlider.value ** 2; ++i) {
    var div = document.createElement('div');
    gridContainer.appendChild(div);
  }
}

// Adding event listeners to each of the current divs to allow colouring on hover
function addColourToGrids() {
  var grids = gridContainer.getElementsByTagName('*');
  var gridsList = Array.prototype.slice.call(grids);
  gridsList.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
      if(currentMode=="Colour Picker Mode"){
        grid.style.backgroundColor = currentColour;
      } else if(currentMode=="Rainbow Mode"){
        grid.style.backgroundColor = getRandomColour();
      } else if(currentMode=="Eraser Mode"){
        grid.style.backgroundColor = "#fff";
      }

    });
  });
}



function getRandomColour(){
  const randomR = Math.floor(Math.random() * 256)
  const randomG = Math.floor(Math.random() * 256)
  const randomB = Math.floor(Math.random() * 256)
  return `rgb(${randomR}, ${randomG}, ${randomB})`
}





