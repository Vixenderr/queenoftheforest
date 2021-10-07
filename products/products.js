let ourForm = document.getElementById("ourForm")
let ourField = document.getElementById("ourField")
ourList = document.getElementById("ourList")

ourForm.addEventListener("submit", (e) => {
    e.preventDefault()
    createItem(ourField.value)
    ourField.value=""
    ourField.focus()
})

function createItem(x) {
    ourHTML = `<li>${x}<button onclick="deleteItem(this)"> Delete</button></li>`
    ourList.insertAdjacentHTML("beforeend", ourHTML)
}

function deleteItem(elementToDelete){
    elementToDelete.parentElement.remove()
}