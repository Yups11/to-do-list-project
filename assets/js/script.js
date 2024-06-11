const todoValue = document.getElementById("todoText"),
    listItems = document.getElementById("list-items"),
    addUpdateClick = document.getElementById("AddUpdateClick");

    todoValue.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addUpdateClick.click();
        }
    });

function CreateToDoData() {
    if (todoValue.value === "") {
        alert("Your task is empty!");
        todoValue.focus();
    }

    let li = document.createElement("li");
    const todoItems = `<div ondblclick="CompleteTodoItem(this)">${todoValue.value}</div><div><img class="delete todo-controls" onclick="DeleteToDoItems(this)" src="assets/images/delete-tasks.png"></div>`;

    li.innerHTML = todoItems;
    listItems.appendChild(li);
    todoValue.value = "";
}

function CompleteTodoItem(e) {
    console.log(e.parentElement);
    if (e.parentElement.querySelector("div").style.textDecoration === "") {
        e.parentElement.querySelector("div").style.textDecoration = "line-through";
    }
}

function DeleteToDoItems(e) {
    let deleteValue = e.parentElement.parentElement.querySelector("div").innerText;
    if(confirm('Do you want to delete this task?')) {
        e.parentElement.parentElement.parentElement.querySelector("li").remove();
    }
}