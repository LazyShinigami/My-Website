function createShapes() {
    for (let i = 0; i < 7; i++) {
        const shape = document.createElement("div");
        // (i < 3) ? shape.classList.add("circle") : shape.classList.add("square");
        if (i < 4) {
            shape.classList.add("circle")
            console.log("circle");
            shape.style.border = "2px solid red"
            shape.style.borderRadius = "50%"

        } else {
            console.log("square");
            shape.classList.add("square")
        }
        
        document.body.append(shape)
    }
}

const card = Array.from(document.getElementsByClassName("option"))

card.forEach((e) => {
    const block1 = document.createElement("div")
    const block2 = document.createElement("div")
    block1.classList.add("block1")
    block2.classList.add("block2")
    e.append(block1)
    e.append(block2)
})

// card.forEach((e) => {
//     // e.addEventListener("click", addCardTransition)
//     e.addEventListener("mouseenter", addCardTransition)
//     e.addEventListener("mouseout", removeCardTransition)
// })

// let cardID = 0

// function addCardTransition() {
//     let block1 = this.querySelector(".block1")
//     let block2 = this.querySelector(".block2")
    
//     cardID = this.id
//     console.log(cardID);
//     block1.classList.add("active")
//     block2.classList.add("active")
//     block2.style.backgroundColor = "yellow"
    
// }


// function removeCardTransition() {
//     let currentCard = document.getElementById(cardID)
//     let block1 = currentCard.querySelector(".block1")
//     let block2 = currentCard.querySelector(".block2")
//     block1.classList.remove("active")
//     block2.classList.remove("active")
// }




