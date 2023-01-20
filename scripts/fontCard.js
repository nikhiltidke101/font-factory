import renderAnimation from "./cssScreen.js";

export default function renderFonts(fontData) {
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
            Font Factory
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
        fontTransform.querySelector("#normalize").style.color = "orange";
    
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
                    fontItalic.style.color = "orange";
                }
            })
        }
    
        fontTransform.querySelector("#capitalize").addEventListener("click", ()=>{
            // console.log("clicked");
            fontTransform.querySelector("#normalize").style.color = "white";
            fontTransform.querySelector("#capitalize").style.color = "orange";
            fontContainer.style.textTransform = "uppercase";
        })
    
        fontTransform.querySelector("#normalize").addEventListener("click", ()=>{
            // console.log("clicked");
            fontTransform.querySelector("#normalize").style.color = "orange";
            fontTransform.querySelector("#capitalize").style.color = "white";
            fontContainer.style.textTransform = "capitalize";
        })
    
        cardContainer.appendChild(fontCard);
    });
    
    renderAnimation();
}
