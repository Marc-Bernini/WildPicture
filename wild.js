'use strict'

//Code js to zoom img when clicked

let switchModal = false
const onClickImg = param => {
    //let truc = this.id //document.getElementById("'" + truc + "'")
        let selectedImg = param
        if (switchModal === false){
            selectedImg.className = "imageBackground"
            divBackground.className = 'backgroundFilter'
            let imgBlur = selectedImg.src
            divBackground.style.backgroundImage = "url('" + imgBlur+ "')"
            switchModal = true
        }else{
            selectedImg.classList.remove("imageBackground")
            divBackground.classList.remove("backgroundFilter")
            divBackground.style.backgroundImage = ""
            switchModal = false
        }
    
}
