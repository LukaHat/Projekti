window.onload = () => {
  let addBtn = document.querySelector("#addTodo");
addBtn.addEventListener("click", function adding(){
    let todoList = document.querySelector('ul');
    let input = document.querySelector("#input");
    let newLi = document.createElement('li');
    newLi.innerHTML = input.value;
    todoList.appendChild(newLi);
})

let removeBtn = document.querySelector("#removeTodo");
removeBtn.addEventListener("click", function removing(){
    let todoList = document.querySelector('ul');
    let listEl = document.querySelector("li");
    todoList.removeChild(listEl)
})

let solvedBtn = document.querySelector("#solvedTodo");
solvedBtn.addEventListener("click", function cross(){
    let listEl = document.querySelector("li");
    listEl.style.textDecoration = "line-through"
})
}



