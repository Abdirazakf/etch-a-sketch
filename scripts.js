const container = document.querySelector("#container")

for (let i = 1; i <= 256; i++){
    const item = document.createElement("div")
    item.classList.add("item", "item-" + i)
    // item.textContent = i
    container.appendChild(item)

    item.addEventListener("mouseover", () => {
        item.setAttribute("style", "background-color: black; border: 3px solid black")
    })
}

