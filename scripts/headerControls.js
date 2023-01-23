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

function renderAnimation () {
    const fontExplore = document.querySelectorAll(".font-explore");
    for(const exploreBtn of fontExplore ){
        exploreBtn.addEventListener("click", ()=>{
            const dataId = exploreBtn.getAttribute("data-id");
            var layers = document.querySelectorAll(".right-layer");
            var animationDiv = document.querySelector("#animation-div"); 
            for (const layer of layers) {
                layer.classList.toggle("active");
            }
            animationDiv.classList.toggle("active");
            // console.log(animationDiv.innerHTML);
    
            let font = fontData.find(object => object.id === dataId);
            // console.log(font);
            animationDiv.innerHTML =`
            <div class="animation-container" id="animation-container">
                <div class="animation-header">
                    <div class="animation-div-collapse" id="font-explore-collapse"><i class="fa-solid fa-xmark"></i></div>
    
                    <div class="animation-header-container" style="font-family:${font.font_family}">
                        <div class="animation-header-card"></div>
                        <div class="font-info-container">
                            <p class="font-header-title">${font.font_name}</p>
                            <p class="font-header-family">${font.typeface}<p>
                        </div>
                    </div>
                    <a href="#animation-card-container">
                        <svg width="30px" style="bottom: 0" viewBox="0 0 14.334 24.75">
                            <circle class="circle-1" fill="white" cx="7.167" cy="6" r="1.2"/>
                            <circle class="circle-2" fill="white" cx="7.167" cy="6" r="1.2"/>
                        <path stroke="white" fill="transparent" d="M7.167,0.5C3.485,0.5,0.5,3.485,0.5,7.167v10.416                   c0,3.682,2.985,6.667,6.667,6.667s6.667-2.985,6.667-6.667V7.167C13.834,3.485,10.849,0.5,7.167,0.5z"/>
                        </svg>
                    </a>
                </div>
    
                <div class="animation-card-container" id="animation-card-container">
                    <div class="animation-custom">
                        <section class="animation-secondary-header">
                            <div class="custom-animation-input">
                                <i class="fa-solid fa-i-cursor"></i>
                                <input type="text" id="custom-animation-input" placeholder="Type Something Here">
                            </div>

                            <div class="font-slider">
                                <span id="animation-range-value">120</span>px
                                <input class="range" id="animation-range-slider" type="range" value="120" min="16" max="180"></input>
                            </div>

                            <div class="reset-section" id="animation-reset-btn">
                                <i class="fa-solid fa-rotate-right"></i>
                            </div>
                        </section>
                    </div>
                    <div class="animation-card" data-id="1">
                        <div class="animation-card-header"">
                            <div class="animation-card-title">Rotator</div>
    
                            <div class="animation-card-header-buttons" id="anim-preview">Preview</div>
                            <div class="animation-card-header-buttons" id="code-preview">Code</div>
                        </div>
                        
                        <div class="animation-preview-container">
                            <div class="animation-preview" id="html" style="font-family:${font.font_family}">
                                <div class="donuts">
                                    <div class="donuts_mask">ROTATOR</div>
                                    <div class="donuts_mask">ROTATOR</div>
                                    <div class="donuts_mask">ROTATOR</div>
                                    <div class="donuts_mask">ROTATOR</div>
                                    <div class="donuts_mask">ROTATOR</div>
                                    <div class="donuts_mask">ROTATOR</div>
                                    <div class="donuts_mask">ROTATOR</div>
                                    <div class="donuts_mask">ROTATOR</div>
                                    <div class="donuts_mask">ROTATOR</div>
                                    <div class="donuts_mask">ROTATOR</div>
                                </div>
                            </div>
                            <div class="animation-code-container" id="animation-code-con">
                                <div class="animation-code-specific-container">
                                    <div class="copy-code">
                                        HTML
                                        <i class="fa-regular fa-copy" id="copy-html"></i>
                                    </div>
                                    <pre><code>
                                        &lt;div class='donuts'&gt;
                                                &lt;div class='donuts_mask'&gt;ROTATOR&lt;/div&gt;
                                                &lt;div class='donuts_mask'&gt;ROTATOR&lt;/div&gt;
                                                &lt;div class='donuts_mask'&gt;ROTATOR&lt;/div&gt;
                                                &lt;div class='donuts_mask'&gt;ROTATOR&lt;/div&gt;
                                                &lt;div class='donuts_mask'&gt;ROTATOR&lt;/div&gt;
                                                &lt;div class='donuts_mask'&gt;ROTATOR&lt;/div&gt;
                                                &lt;div class='donuts_mask'&gt;ROTATOR&lt;/div&gt;
                                                &lt;div class='donuts_mask'&gt;ROTATOR&lt;/div&gt;
                                                &lt;div class='donuts_mask'&gt;ROTATOR&lt;/div&gt;
                                                &lt;div class='donuts_mask'&gt;ROTATOR&lt;/div&gt;
                                        &lt;/div&gt;
                                    </code></pre>
                                </div>
                                <div class="animation-code-specific-container">
                                    <div class="copy-code">
                                        CSS
                                        <i class="fa-regular fa-copy" class="copy-btn" id="copy-css"></i>
                                    </div>
                                    <pre><code id="css">
                                        .donuts{
                                            position: absolute;
                                            left: 50%;
                                            top: 50%;
                                            /* transform: translate(-50%, -50%); */
                                        }
                                        
                                        .donuts_mask {
                                            text-align: center;
                                            display: flex;
                                            justify-content: center;
                                            align-items: center;
                                            width: 700px;
                                            height: 700px;
                                            font-size: 10rem;
                                            position: absolute;
                                            -webkit-transform-origin: 5% 60%;
                                                    transform-origin: 5% 60%;
                                            -webkit-transform: translate(-50%, -50%);
                                                    transform: translate(-50%, -50%);
                                        }
                                        
                                        .donuts_mask::before {
                                            content: '';
                                            position: absolute;
                                            height: 0;
                                            top: 50%;
                                            left: 50%;
                                            -webkit-transform: translate(-50%, -50%) scale(1);
                                                    transform: translate(-50%, -50%) scale(1);
                                            border-radius: 100%;
                                            background: black;
                                        }
                                        
                                        .donuts_mask:nth-child(1) {
                                            z-index: 10;
                                            -webkit-clip-path: circle(5%);
                                                    clip-path: circle(5%);
                                            -webkit-animation: rotate 5000ms 150ms ease-in-out infinite;
                                                    animation: rotate 5000ms 150ms ease-in-out infinite;
                                        }
                                        
                                        .donuts_mask:nth-child(1)::before {
                                            width: 0%;
                                            padding-top: 0%;
                                        }
                                        
                                        .donuts_mask:nth-child(2) {
                                            z-index: 9;
                                            -webkit-clip-path: circle(10%);
                                                    clip-path: circle(10%);
                                            -webkit-animation: rotate 5000ms 300ms ease-in-out infinite;
                                                    animation: rotate 5000ms 300ms ease-in-out infinite;
                                        }
                                        
                                        .donuts_mask:nth-child(2)::before {
                                            width: 10%;
                                            padding-top: 10%;
                                        }
                                        
                                        .donuts_mask:nth-child(3) {
                                            z-index: 8;
                                            -webkit-clip-path: circle(15%);
                                                    clip-path: circle(15%);
                                            -webkit-animation: rotate 5000ms 450ms ease-in-out infinite;
                                                    animation: rotate 5000ms 450ms ease-in-out infinite;
                                        }
                                        
                                        .donuts_mask:nth-child(3)::before {
                                            width: 20%;
                                            padding-top: 20%;
                                        }
                                        
                                        .donuts_mask:nth-child(4) {
                                            z-index: 7;
                                            -webkit-clip-path: circle(20%);
                                                    clip-path: circle(20%);
                                            -webkit-animation: rotate 5000ms 600ms ease-in-out infinite;
                                                    animation: rotate 5000ms 600ms ease-in-out infinite;
                                        }
                                        
                                        .donuts_mask:nth-child(4)::before {
                                            width: 30%;
                                            padding-top: 30%;
                                        }
                                        
                                        .donuts_mask:nth-child(5) {
                                            z-index: 6;
                                            -webkit-clip-path: circle(25%);
                                                    clip-path: circle(25%);
                                            -webkit-animation: rotate 5000ms 750ms ease-in-out infinite;
                                                    animation: rotate 5000ms 750ms ease-in-out infinite;
                                        }
                                        
                                        .donuts_mask:nth-child(5)::before {
                                            width: 40%;
                                            padding-top: 40%;
                                        }
                                        
                                        .donuts_mask:nth-child(6) {
                                            z-index: 5;
                                            -webkit-clip-path: circle(30%);
                                                    clip-path: circle(30%);
                                            -webkit-animation: rotate 5000ms 900ms ease-in-out infinite;
                                                    animation: rotate 5000ms 900ms ease-in-out infinite;
                                        }
                                        
                                        .donuts_mask:nth-child(6)::before {
                                            width: 50%;
                                            padding-top: 50%;
                                        }
                                        
                                        .donuts_mask:nth-child(7) {
                                            z-index: 4;
                                            -webkit-clip-path: circle(35%);
                                                    clip-path: circle(35%);
                                            -webkit-animation: rotate 5000ms 1050ms ease-in-out infinite;
                                                    animation: rotate 5000ms 1050ms ease-in-out infinite;
                                        }
                                        
                                        .donuts_mask:nth-child(7)::before {
                                            width: 60%;
                                            padding-top: 60%;
                                        }
                                        
                                        .donuts_mask:nth-child(8) {
                                            z-index: 3;
                                            -webkit-clip-path: circle(40%);
                                                    clip-path: circle(40%);
                                            -webkit-animation: rotate 5000ms 1200ms ease-in-out infinite;
                                                    animation: rotate 5000ms 1200ms ease-in-out infinite;
                                        }
                                        
                                        .donuts_mask:nth-child(8)::before {
                                            width: 70%;
                                            padding-top: 70%;
                                        }
                                        
                                        .donuts_mask:nth-child(9) {
                                            z-index: 2;
                                            -webkit-clip-path: circle(45%);
                                                    clip-path: circle(45%);
                                            -webkit-animation: rotate 5000ms 1350ms ease-in-out infinite;
                                                    animation: rotate 5000ms 1350ms ease-in-out infinite;
                                        }
                                        
                                        .donuts_mask:nth-child(9)::before {
                                            width: 80%;
                                            padding-top: 80%;
                                        }
                                        
                                        .donuts_mask:nth-child(10) {
                                            z-index: 1;
                                            -webkit-clip-path: circle(50%);
                                                    clip-path: circle(50%);
                                            -webkit-animation: rotate 5000ms 1500ms ease-in-out infinite;
                                                    animation: rotate 5000ms 1500ms ease-in-out infinite;
                                        }
                                        
                                        .donuts_mask:nth-child(10)::before {
                                            width: 90%;
                                            padding-top: 90%;
                                        }
                                        
                                        @-webkit-keyframes rotate {
                                            0% {
                                            -webkit-transform: translate(-50%, -50%) rotateZ(0deg);
                                                    transform: translate(-50%, -50%) rotateZ(0deg);
                                            }
                                            60% {
                                            -webkit-transform: translate(-50%, -50%) rotateZ(360deg);
                                                    transform: translate(-50%, -50%) rotateZ(360deg);
                                            }
                                            100% {
                                            -webkit-transform: translate(-50%, -50%) rotateZ(360deg);
                                                    transform: translate(-50%, -50%) rotateZ(360deg);
                                            }
                                        }
                                        
                                        @keyframes rotate {
                                            0% {
                                            -webkit-transform: translate(-50%, -50%) rotateZ(0deg);
                                                    transform: translate(-50%, -50%) rotateZ(0deg);
                                            }
                                            60% {
                                            -webkit-transform: translate(-50%, -50%) rotateZ(360deg);
                                                    transform: translate(-50%, -50%) rotateZ(360deg);
                                            }
                                            100% {
                                            -webkit-transform: translate(-50%, -50%) rotateZ(360deg);
                                                    transform: translate(-50%, -50%) rotateZ(360deg);
                                            }
                                        }
                                        
                                    </code></pre>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="animation-card" data-id="2">
                        <div class="animation-card-header">
                            <div class="animation-card-title">SHINE</div>
    
                            <div class="animation-card-header-buttons" id="anim-preview">Preview</div>
                            <div class="animation-card-header-buttons" id="code-preview">Code</div>
                        </div>
                        <div class="animation-preview-container">
                            <div class="animation-preview" id="html" style="font-family:${font.font_family}">
                                <p class="shine" id="shine">SHINE</p>
                            </div>
                            <div class="animation-code-container" id="animation-code-con">
                                <div class="animation-code-specific-container">
                                    <div class="copy-code">
                                        HTML <i class="fa-regular fa-copy" id="copy-html"></i>
                                    </div>
                                    <pre><code>
                                    &lt;p class='shine' id="shine" &gt; SHINE &lt;/p&gt;
                                    </code></pre>
                                </div>
                                <div class="animation-code-specific-container">
                                    <div class="copy-code">
                                        CSS <i class="fa-regular fa-copy" id="copy-css"></i>
                                    </div>
                                    <pre><code id="css">
                                        .shine {
                                            text-align: center;
                                            font-size: 11rem;
                                            background: linear-gradient(90deg, #000, #fff, #000);
                                            letter-spacing: 5px;
                                            -webkit-background-clip: text;
                                            background-clip: text;
                                            -webkit-text-fill-color: transparent;
                                            background-repeat: no-repeat;
                                            background-size: 80%;
                                            animation: shine 5s linear infinite;
                                            position: relative;
                                        }
                                        
                                        @keyframes shine {
                                            0% {
                                            background-position-x: -500%;
                                            }
                                            100% {
                                            background-position-x: 500%;
                                            }
                                        }
                                    </code></pre>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
            `;
    
            const fontExploreCollapse = document.querySelector("#font-explore-collapse");
            fontExploreCollapse.addEventListener("click", ()=>{
                console.log("clicked");
                var layers = document.querySelectorAll(".right-layer");
                var animationDiv = document.querySelector("#animation-div"); 
                for (const layer of layers) {
                    layer.classList.toggle("active");
                }
                animationDiv.classList.toggle("active");
            })
    
            const  headerContainer = document.querySelector(".animation-header-container");
            const  headerCard = document.querySelector(".animation-header-card");
            const  fontInfoContainer = document.querySelector(".font-info-container");
            const  fontInfoContainerH1 = document.querySelector(".font-header-title");
            const  fontInfoContainerH3 = document.querySelector(".font-header-family");
    
            headerContainer.addEventListener("mousemove", (e)=>{
                let xAxis = ((window.innerWidth / 2) - e.pageX) / 30;
                let yAxis = ((window.innerHeight / 2) - e.pageY) / 30;  
                
                headerCard.style.transform = `translateX(${xAxis}px) translateY(${yAxis}px) rotateX(${yAxis/2}deg) rotateY(${-xAxis/2}deg)`;
                fontInfoContainer.style.transform = `translateX(calc(-50% + ${xAxis}px)) translateY( calc(-50% + ${yAxis}px)) translateZ(700px) rotateX(${yAxis/3}deg) rotateY(${-xAxis/3}deg)`;
                fontInfoContainerH1.style.transform = `translateZ(100px)`;
                fontInfoContainerH3.style.transform = `translateZ(100px)`;
            });
    
            headerContainer.addEventListener("mouseenter", (e) => {
                headerCard.style.transition = "none";
                headerCard.style.transition = "all 0.1s ease-in-out";
                fontInfoContainer.style.transition = "all 0.1s ease-in"; 
            });
    
            headerContainer.addEventListener("mouseleave", (e) => {
                headerCard.style.transition = "all 1s ease-in";
                fontInfoContainer.style.transition = "all 1s ease-in";
                headerCard.style.transform = `translateX(0px) translateY(0px) rotateY(0deg) rotateX(0deg)`;
                fontInfoContainer.style.transform = `translateX(-50%) translateY(-50%) translateZ(0px) rotateX(0deg) rotateY(0deg)`;
            });
    
    
            const animationCards = document.getElementsByClassName("animation-card");
            for(let i=0; i<animationCards.length; i++){
                console.log(animationCards[i]);
                const codePreviewBtn = animationCards[i].querySelector("#code-preview");
                const animPreviewBtn = animationCards[i].querySelector("#anim-preview");
                
                animPreviewBtn.classList.add("active");
                const animationCodeContainer = animationCards[i].querySelector("#animation-code-con");
                codePreviewBtn.addEventListener("click", ()=>{
                    codePreviewBtn.classList.add("active");
                    animPreviewBtn.classList.remove("active");
                    animationCodeContainer.style.left = "0%";
                })
    
                animPreviewBtn.addEventListener("click", ()=>{
                    codePreviewBtn.classList.remove("active");
                    animPreviewBtn.classList.add("active");
                    animationCodeContainer.style.left = "100%";
                });
    
                const toolTip = document.querySelector("#tooltip");
                const htmlCopyBtn = animationCards[i].querySelector("#copy-html");
                const htmlContainer = animationCards[i].querySelector("#html");
    
                htmlCopyBtn.addEventListener("click", ()=>{
                    console.log(htmlContainer.innerHTML);
                    navigator.clipboard.writeText(htmlContainer.innerHTML);
                    toolTip.style.opacity = "1";
                    setTimeout(()=>{
                        toolTip.style.opacity = "0";
                    }, 500);
                });
    
                const cssCopyBtn = animationCards[i].querySelector("#copy-css");
                const cssContainer = animationCards[i].querySelector("#css");
    
                cssCopyBtn.addEventListener("click", ()=>{
                    console.log(cssContainer.innerHTML);
                    navigator.clipboard.writeText(cssContainer.innerHTML);
                    toolTip.style.opacity = "1";
                    setTimeout(()=>{
                        toolTip.style.opacity = "0";
                    }, 500);
                });


                const customInput = document.getElementById("custom-animation-input");
                customInput.addEventListener("input", ()=>{
                    const donutsMask = animationCards[i].getElementsByClassName("donuts_mask");
                    for(let i=0; i<donutsMask.length; i++){
                        donutsMask[i].innerHTML = customInput.value;
                    }
                    const shine = animationCards[i].querySelector("#shine");
                    shine.innerHTML = customInput.value;
                }) 

                const animationRangeSlider = document.getElementById("animation-range-slider");
                const animationRangeValue = document.getElementById("animation-range-value");
                const animationContainer = document.querySelectorAll(".animation-preview");
                
                animationRangeSlider.addEventListener("mousemove", (e)=>{
                    animationRangeValue.innerText = e.target.value;
                    for(let i=0; i<animationContainer.length; i++){
                        animationContainer[i].style.fontSize = e.target.value + 'px';
                    }
                })

                const animationResetBtn = document.getElementById("animation-reset-btn");
                animationResetBtn.addEventListener("click", ()=>{
                    customInput.value = "";
                    animationRangeValue.innerText = 120;
                    animationRangeSlider.value = 120;
                    for(let i=0; i<animationContainer.length; i++){
                        animationContainer[i].style.fontSize = 120 + 'px';
                    }
                    const donutsMask = animationCards[i].getElementsByClassName("donuts_mask");
                    for(let i=0; i<donutsMask.length; i++){
                        donutsMask[i].innerHTML = "Rotator";
                    }
                    const shine = animationCards[i].querySelector("#shine");
                    shine.innerHTML = "Shine";
                })
            }
        });
    }
}

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
    
    renderAnimation();
}


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