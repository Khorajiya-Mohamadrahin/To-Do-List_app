const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")

item.addEventListener("keyup", function(event) {
    // console.log(event.key);
    if (event.key == "Enter") {
        // console.log(this.value);
        addToDo(this.value) //this ahiya aa item ne refer kare che 4th line ma
        this.value = ""
    }
    })

const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${item}<i class="ri-close-line"></i>`;
    
    // cross line no code
    listItem.addEventListener("click", function() {
        this.classList.toggle("done");
        }
    )
    
    // cross symbol no code
    listItem.querySelector("i").addEventListener("click", function() {
        listItem.remove()
        })

    toDoBox.appendChild(listItem)
}