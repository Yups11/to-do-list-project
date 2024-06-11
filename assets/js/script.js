const todoValue = document.getElementById("todoText"),
    listItems = document.getElementById("list-items"),
    addUpdateClick = document.getElementById("AddUpdateClick");

function CreateToDoData() {
    if (todoValue.value === "") {
        alert("Your task is empty!");
        todoValue.focus();
    }

    let li = document.createElement("li");
    const todoItems = `<div>${todoValue.value}</div>`;

    li.innerHTML = todoItems;
    listItems.appendChild(li);
    todoValue.value = "";
}