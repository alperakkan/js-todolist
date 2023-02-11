let button = document.getElementById("btn1")
let input1 = document.getElementById("exampleFormControlInput1")
let divToDo = document.getElementById("div1")



button.addEventListener("click", ekle)


function ekle(e) {

    const newTodo = input1.value.trim()
    divToDo.innerHTML += `
    <input class="form-control" type="text" value=${newTodo} aria-label="readonly input example" readonly>
    `

    e.preventDefault()
}












// function ekle() {

//     divToDo.innerHTML += `
//     <input class="form-control" type="text" value=${newTodo} aria-label="readonly input example" readonly>
//     `

// }




