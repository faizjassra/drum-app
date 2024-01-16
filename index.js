

window.addEventListener('keydown', function (e) {
    let key = e.key.toUpperCase()
    playSound(key)


})

function show(key) {
    let obj = document.querySelector(`.${key}`)
    obj.classList.add("play")

    setTimeout(() => {
        obj.classList.remove("play")
    }, 100);


}
function playSound(key) {
    switch (key) {
        case 'A':
            let audio1 = new Audio("./sounds/crash.mp3")
            audio1.currentTime = 0
            audio1.play()
            show('a')
            return

        case 'S':
            let audio2 = new Audio("./sounds/kick-bass.mp3")
            audio2.currentTime = 0
            audio2.play()
            show('s')
            return

        case 'D':
            let audio3 = new Audio("./sounds/snare.mp3")
            audio3.currentTime = 0
            audio3.play()
            show('d')
            return

        case 'F':
            let audio4 = new Audio("./sounds/tom-1.mp3")
            audio4.currentTime = 0
            audio4.play()
            show('f')
            return

        case 'G':
            let audio5 = new Audio("./sounds/tom-2.mp3")
            audio5.currentTime = 0
            audio5.play()
            show('g')
            return

        case 'H':
            let audio6 = new Audio("./sounds/tom-3.mp3")
            audio6.currentTime = 0
            audio6.play()
            show('h')
            return

        case 'J':
            let audio7 = new Audio("./sounds/tom-4.mp3")
            audio7.currentTime = 0
            audio7.play()
            show('j')
            return


        default:
            console.log("wrong key")
            return
    }
}

