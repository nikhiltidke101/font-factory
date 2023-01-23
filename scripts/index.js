const testHover = document.getElementsByClassName("typeface-list-hover");

for (var i = 0 ; i < testHover.length; i++) {
    testHover[i].addEventListener('mouseover' , (e) => {
        e.preventDefault();
        const dataId = e.target.getAttribute("data-id");
        const hoverSection = document.getElementById(`list-hover-section-${dataId}`);
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

// toolTip.style.left = window.