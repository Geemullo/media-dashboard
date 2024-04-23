// seleção de elementos
const toggle = document.querySelector(".toggle")
const cardMedias = document.querySelectorAll(".medias")
const cardInfos = document.querySelectorAll(".medias-statistic")
const background = document.querySelector("body")
const titulo = document.querySelector("h1")
const overwier = document.querySelector("#overview")

// funções

function lightTheme() {
   
    for (i=0; i<4 ;i++) {
        cardMedias[i].classList.remove("dark")
        cardMedias[i].classList.add("light")
    }

    for (i=0; i<8; i++) {
        cardInfos[i].classList.remove("dark")
        cardInfos[i].classList.remove("light")
    }
 
    background.style.backgroundColor = "hsl(0, 0%, 100%)"
    titulo.style.color = "hsl(230, 17%, 14%)"
    overwier.style.color = "hsl(230, 17%, 14%)"
 
}

function darkTheme() {
    
    for (i=0; i<4 ;i++) {
        cardMedias[i].classList.remove("light")
        cardMedias[i].classList.add("dark")
    }

    for (i=0; i<8; i++) {
        cardInfos[i].classList.remove("light")
        cardInfos[i].classList.add("dark")
    }
    
    background.style.backgroundColor = "hsl(225, 17%, 14%)"
    titulo.style.color = "hsl(0, 0%, 100%)"
    overwier.style.color = "hsl(0, 0%, 100%)"

}

// eventos

toggle.addEventListener("click", () => {
    toggle.classList.toggle("on");

    if (toggle.classList == "toggle") {
        lightTheme()
    }

    if (toggle.classList == "toggle on") {
        darkTheme()
    }

});