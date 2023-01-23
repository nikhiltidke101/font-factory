const testHover = document.getElementsByClassName("typeface-list-hover");

for (var i = 0 ; i < testHover.length; i++) {
    testHover[i].addEventListener('mouseover' , (e) => {
        e.preventDefault();
        const dataId = e.target.getAttribute("data-id");
        const hoverSection = document.getElementById(`list-hover-section-${dataId}`);
        if(dataId == "2"){
            hoverSection.style.fontFamily = "'Merriweather', serif";
        }else if(dataId === "3"){
            hoverSection.style.fontFamily = "'Comfortaa', cursive";
        }else if(dataId === "4"){
            hoverSection.style.fontFamily = "'VT323', monospace";
        }else if(dataId === "5"){   
            hoverSection.style.fontFamily = "'Montserrat', sans-serif";
        }else if(dataId === "6"){
            hoverSection.style.fontFamily = "'Explora', cursive";
        }
        hoverSection.style.opacity = "1";
    });
}

for (var i = 0 ; i < testHover.length; i++) {
    testHover[i].addEventListener('mouseout' , (e) => {
        e.preventDefault();
        const dataId = e.target.getAttribute("data-id")
        const hoverSection = document.getElementById(`list-hover-section-${dataId}`);
        hoverSection.style.opacity = "0";
    });
}

const toolTip = document.getElementById("tooltip");

window.addEventListener("mousemove", (e)=>{
    toolTip.style.left = e.clientX + 10 + "px";
    toolTip.style.top = e.clientY + 10 + "px";
});
