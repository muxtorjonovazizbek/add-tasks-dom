const result = document.getElementById("result")
const user__modal = document.getElementById("user__modal")
const close = document.getElementById("close")
const save = document.getElementById("save")
let form = {}

let todos = [
    {status: "open", tasks: []},
    {status: "pending", tasks: []},
    {status: "inproge", tasks: []},
    {status: "complete", tasks: []},
]   


document.addEventListener("DOMContentLoaded", function () {
    save.addEventListener("click", addTask)
   displayTodos()
   
})

close.addEventListener("click", () => {
    toggleModal("none")
})


function displayTodos() {
    result.innerHTML = ""
    todos.forEach(item => {
        let col = document.createElement('div')
        col.classList.add("col-md-3")
        let task__list = item.tasks.map(task => {
            return `<li>${task}</li>`
        }).join("")
        col.innerHTML = `<div class="card">
            <div class="card-header">
                <h3 class="text-center">${item.status.toUpperCase()}</h3>
            </div>

            <div class="card-body">
                <ol>${task__list}</ol>
            </div>

            <div class="card-footer">
                <div class="d-flex justify-content-center">
                    <button onclick="openModal()" class="btn btn-success">Add Task</button>    
                </div>
            </div>
        </div>`
        result.appendChild(col)
    })  
}


function openModal() {
     toggleModal("block")
}

function handleChange(event) {
    const {name, value} = event.target
    form = {...form, [name]: value}    
}

function addTask() {
    console.log(form);
    
    // console.log(form);.
    if (form.task && form.status) {
        todos.forEach(item => {
            if (item.status === form.status) {
                item.tasks.push(form.task)
            }
        })
        displayTodos()
        toggleModal("none")
    }else {
        alert("Ikkala joyni ham tol'ldiring")
    }
    
}

function toggleModal(status) {
    user__modal.style.display = status      
}