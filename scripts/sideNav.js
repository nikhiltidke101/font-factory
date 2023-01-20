import renderFonts from './fontCard.js';
import fontData from '../fonts.json' assert {type: 'json'};

const typefaceList = document.getElementsByClassName("typeface-list-hover");


renderFonts(fontData);
typefaceList[0].classList.add("active");
for(let i=0; i<typefaceList.length; i++){
    typefaceList[i].addEventListener("click", ()=>{
        // console.log(i);
        for(let j=0; j<typefaceList.length; j++){
            typefaceList[j].classList.remove("active");
        }
        typefaceList[i].classList.add("active");
        console.log(typefaceList[i]);
        const fontTypeface = typefaceList[i].getAttribute("data-font");
        if(fontTypeface == "all"){
            renderFonts(fontData);
        }else{
            let filteredData = fontData.filter((obj) => {
                return obj.typeface === fontTypeface;
            });
            // console.log(filteredData);
            renderFonts(filteredData);
        }
    })
}

const sideNav = document.querySelector("#side-nav")
const arrowMenuOpen = document.querySelector("#arrow-menu");
const arrowMenuCollapse = document.querySelector("#arrow-menu-collapse");
const overlay = document.querySelector("#overlay");
arrowMenuOpen.addEventListener("click", ()=>{
    sideNav.classList.toggle("side-nav-open");
    overlay.classList.toggle("overlay-open");
});

arrowMenuCollapse.addEventListener("click", ()=>{
    sideNav.classList.toggle("side-nav-open");
    overlay.classList.toggle("overlay-open");

});