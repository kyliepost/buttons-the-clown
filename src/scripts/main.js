import { ButtonsTheClown } from "./ButtonsTheClown.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    mainContainer.innerHTML = ButtonsTheClown()
}

render()