const click = document.querySelector(".add-note")
// const item = document.querySelector(".list-transition")
click.addEventListener("click", function(){
    const error = document.querySelector(".error")
    const text = document.getElementById("taskInput")


    if(text.value.trim() === ""){
        error.style.display = "block"
        error.textContent = "The input field cannot be empty !"
        setTimeout(() => {
            error.style.display = "none"
            error.textContent = ""
        }, 2000);
        return;
    }
    const ulList = document.getElementById("taskList")
    const list = document.createElement("li")
    const div = document.createElement("div")
    div.classList.add("inner-items")
    const p = document.createElement("p")
    const input = document.createElement("input")
    input.type = "checkbox"
    p.appendChild(input)
    const label = document.createElement("label")
    label.textContent = text.value
    p.appendChild(label)
    const button = document.createElement("button")
    button.classList.add("delete")
    const span = document.createElement("span")
    span.textContent = "Edit"
    const icon = document.createElement("i")
    icon.classList.add("fa-solid")
    icon.classList.add("fa-trash")
    // const icon2 = document.createElement("i")
    // icon2.classList.add("fa-solid")
    // icon2.classList.add("fa-check")
    button.appendChild(icon)
    // button.appendChild(icon2)
    button.appendChild(span)
    div.appendChild(p)
    div.appendChild(button)
    list.appendChild(div)
    ulList.appendChild(list)

    icon.addEventListener("click", function(){
        list.classList.add("delete-slide")
        setTimeout(() => {
        ulList.removeChild(list)
        }, 600);
    })


    text.value = ""

})