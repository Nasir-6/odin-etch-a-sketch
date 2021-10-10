// Slider stuff
let slider = document.getElementById("myRange");
let output = document.getElementById("sliderOutput");


let gridContainer = document.getElementById("grid-container")



output.innerHTML = slider.value; // Display the default slider value
console.log(slider.value)

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = `${this.value} x ${this.value}`;
  //Make grid column and rows repeat using this.value!!
  gridContainer.style.gridTemplateColumns = `repeat(${this.value},1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${this.value},1fr)`;

  //Now make as many divs and append it 
  gridContainer.innerHTML = ''; // First clear all HTML to prevent acculmulation
  for (let i = 0;i < this.value**2;++i)
  {
    var div = document.createElement('div');
    gridContainer.appendChild(div);
  }

}