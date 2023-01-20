import renderFonts from './fontCard.js';
import fontData from '../fonts.json' assert {type: 'json'};

const searchInput = document.getElementById("search-input");
const customInput = document.getElementById("custom-input");
const rangeValue = document.getElementById("range-value");  
const rangeSlider = document.getElementById("range-slider");  
const resetBtn = document.getElementById("reset-btn")
const fontContainers = document.getElementsByClassName("font-container");

customInput.addEventListener("input", (e)=>{
    for(let i=0; i<fontContainers.length; i++){
        fontContainers[i].innerHTML = e.target.value;
    }
})

searchInput.addEventListener("input", (e)=>{
    let filteredData = fontData.filter((obj) => {
        return obj.typeface.includes(e.target.value) || obj.font_name.includes(e.target.value);
    });
    renderFonts(filteredData);
});

rangeSlider.addEventListener("mousemove", (e)=>{
    rangeValue.innerText = e.target.value;
    for(let i=0; i<fontContainers.length; i++){
        fontContainers[i].style.fontSize = e.target.value + 'px';
    }
})

resetBtn.addEventListener("click", ()=>{
    rangeSlider.value = 72;
    rangeValue.innerText = 72;
    for(let i=0; i<fontContainers.length; i++){
        fontContainers[i].style.fontSize = 72 + 'px';
        fontContainers[i].innerHTML = "Font Factory";
    }
})