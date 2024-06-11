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
    const todoItems = `<div ondblclick="CompleteTodoItem(this)">${todoValue.value}</div>`;

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