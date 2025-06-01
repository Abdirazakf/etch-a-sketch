const container = document.querySelector("#container")

for (let i = 1; i <= 256; i++){
    const item = document.createElement("div")
    item.classList.add("item", "item-" + i)
    container.appendChild(item)
}

const buttons = document.querySelectorAll("button")

