// import renderFonts from './fontCard.js';
const fontData = [{
    "id":"serif-1",
    "typeface": "serif",
    "font_name": "merriweather",
    "italic": true,
    "weights": [
        300 ,
        400 ,
        700 ,
        900
    ],
    "font_family": "'Merriweather', serif"
},
{
    "id":"serif-2",
    "typeface": "serif",
    "font_name": "crimson Text",
    "italic": true,
    "weights": [
        400,
        600,
        700
    ],
    "font_family": "'Crimson Text', serif"
},
{
    "id":"serif-3",
    "typeface": "serif",
    "font_name": "prata",
    "italic": false,
    "weights": [
        400
    ],
    "font_family": "'Prata', serif"
},
{
    "id":"serif-4",
    "typeface": "serif",
    "font_name": "cinzel",
    "italic": false,
    "weights": [
        400,
        600,
        700,
        800,
        900
    ],
    "font_family": "'Cinzel', serif"
},
{
    "id":"sans-serif-1",
    "typeface": "sans-serif",
    "font_name": "montserrat",
    "italic": true,
    "weights": [
        100,
        200,
        300,
        400,
        500,
        600,
        700,
        800,
        900
    ],
    "font_family": "'Montserrat', sans-serif"
},
{
    "id":"sans-serif-2",
    "typeface": "sans-serif",
    "font_name": "poppins",
    "italic": true,
    "weights": [
        100,
        200,
        300,
        400,
        500,
        600,
        700,
        800,
        900
    ],
    "font_family": "'Poppins', sans-serif"
},
{
    "id":"sans-serif-3",
    "typeface": "sans-serif",
    "font_name": "roboto",
    "italic": true,
    "weights": [
        100,
        300,
        400,
        500,
        700,
        900
    ],
    "font_family": "'Roboto', sans-serif"
},
{
    "id":"sans-serif-4",
    "typeface": "sans-serif",
    "font_name": "raleway",
    "italic": true,
    "weights": [
        100,
        200,
        300,
        400,
        500,
        600,
        700,
        800,
        900
    ],
    "font_family": "'Raleway', sans-serif"
},
{
    "id":"display-1",
    "typeface": "display",
    "font_name": "righteous",
    "italic": false,
    "weights": [
        400
    ],
    "font_family": "'Righteous', cursive"
},
{
    "id":"display-2",
    "typeface": "display",
    "font_name": "lobster",
    "italic": false,
    "weights": [
        400
    ],
    "font_family": "'Lobster', cursive"
},{
    "id":"display-3",
    "typeface": "display",
    "font_name": "comfortaa",
    "italic": false,
    "weights": [
        300,
        400,
        500,
        600,
        700
    ],
    "font_family": "'Comfortaa', cursive"
},{
    "id":"display-4",
    "typeface": "display",
    "font_name": "abril fatface",
    "italic": false,
    "weights": [
        400
    ],
    "font_family": "'Abril Fatface', cursive"
},{
    "id":"handwriting-1",
    "typeface": "handwriting",
    "font_name": "explora",
    "italic": false,
    "weights": [
        400
    ],
    "font_family": "'Explora', cursive"
},{
    "id":"handwriting-2",
    "typeface": "handwriting",
    "font_name": "dancing script",
    "italic": false,
    "weights": [
        400,
        500,
        600,
        700
    ],
    "font_family": "'Dancing Script', cursive"
},{
    "id":"handwriting-3",
    "typeface": "handwriting",
    "font_name": "shadows into light",
    "italic": false,
    "weights": [
        400
    ],
    "font_family": "'Shadows Into Light', cursive"
},{
    "id":"handwriting-4",
    "typeface": "handwriting",
    "font_name": "moon dance",
    "italic": false,
    "weights": [
        400
    ],
    "font_family": "'Moon Dance', cursive"
},{
    "id":"monospace-1",
    "typeface": "monospace",
    "font_name": "space mono",
    "italic": false,
    "weights": [
        400,
        700
    ],
    "font_family": "'Space Mono', monospace"
},{
    "id":"monospace-2",
    "typeface": "monospace",
    "font_name": "nova mono",
    "italic": false,
    "weights": [
        400
    ],
    "font_family": "'Nova Mono', monospace"
},{
    "id":"monospace-3",
    "typeface": "monospace",
    "font_name": "vt323",
    "italic": false,
    "weights": [
        400
    ],
    "font_family": "'VT323', monospace"
},{
    "id":"monospace-4",
    "typeface": "monospace",
    "font_name": "major mono display",
    "italic": false,
    "weights": [
        400
    ],
    "font_family": "'Major Mono Display', monospace"
}
]

const typefaceList = document.getElementsByClassName("typeface-list-hover");

function renderFonts(fontData) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    fontData.map((data, _i) => {
        const fontCard = document.createElement("div");
        fontCard.classList.add("font-card");
        fontCard.setAttribute("data-id", _i);
        fontCard.innerHTML = 
        `
        <div class="font-card-header" id="font-card-header">
            <div class="font-styles">
                <div class="font-select">
                    ${data.typeface}
                </div>
            </div>
            <div class="font-styles">
                <div class="font-select">
                    ${data.font_name}
                </div>
            </div>
            <div class="font-weight">
                <div style="display: flex; align-items:center; gap: 5px">
                    <i class="fa-solid fa-angle-down"></i>
                    <div id="font-card-select">
                        ${data.weights[0]}
                    </div>
                </div>
                <div class="font-option" id="font-card-option">
                    ${
                        data.weights.map(weight => {
                            return (
                                `<div class="font-style-o" data-font-value=${weight}>` + weight + '</div>'
                            )
                        }).join('')
                    }
                </div>
            </div>
            ${data.italic ? (
                `<div id="font-italic" style="cursor:pointer">
                    <i class="fa-solid fa-italic"></i>
                </div>`
            ): ("")}
            
            <div class="total-font-weights">
                <span>${data.weights.length} WEIGHTS</span>
            </div>
            <div class="font-transform" id="font-transform">
                <div class="capitalize" id="capitalize">AA</div>
                <div class="normalize" id="normalize">Aa</div>
            </div>
            <div class="font-explore" data-id=${data.id}>
                Explore
            </div>
        </div>
        <div class="font-container resizable" id="font-container" style="font-family:${data.font_family}">
            Fonts Factory
        </div>
        `
        const fontCardSelect = fontCard.querySelector("#font-card-select");
        const fontCardOption = fontCard.querySelector("#font-card-option");
        const fontContainer = fontCard.querySelector("#font-container");
        const fontTransform = fontCard.querySelector("#font-transform");
    
        fontCardSelect.addEventListener("click", ()=> {
            if(fontCardOption.style.display === "none"){
                fontCardOption.style.display = "block";
            }else{
                fontCardOption.style.display = "none";
            }
        })
        fontTransform.querySelector("#normalize").style.color = "#f4511e";
    
        const fontStyleOptions = fontCardOption.querySelectorAll(".font-style-o");
        fontStyleOptions.forEach((style) => {
            style.addEventListener("click", ()=>{
                const fontWeight = style.getAttribute("data-font-value");
                fontContainer.style.fontWeight = fontWeight;
                fontCardSelect.innerText = style.innerText;
                fontCardOption.style.display = "none";
            })
        })
    
        const fontItalic = fontCard.querySelector("#font-italic")
        
        if(fontItalic){
            fontItalic.addEventListener("click", ()=>{
                if(fontContainer.style.fontStyle === "italic"){
                    fontContainer.style.fontStyle = "";
                    fontItalic.style.color = "white";
                }else{
                    fontContainer.style.fontStyle = "italic";
                    fontItalic.style.color = "#f4511e";
                }
            })
        }
    
        fontTransform.querySelector("#capitalize").addEventListener("click", ()=>{
            // console.log("clicked");
            fontTransform.querySelector("#normalize").style.color = "white";
            fontTransform.querySelector("#capitalize").style.color = "#f4511e";
            fontContainer.style.textTransform = "uppercase";
        })
    
        fontTransform.querySelector("#normalize").addEventListener("click", ()=>{
            // console.log("clicked");
            fontTransform.querySelector("#normalize").style.color = "#f4511e";
            fontTransform.querySelector("#capitalize").style.color = "white";
            fontContainer.style.textTransform = "capitalize";
        })
    
        cardContainer.appendChild(fontCard);
    });
    
    // renderAnimation();
}


console.log("Rednderrinnnnn");
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