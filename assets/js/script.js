const todoValue = document.getElementById("todoText"),
listItems = document.getElementById("list-items"),
addUpdateClick = document.getElementById("AddUpdateClick");

function CreateToDoData() {
    if (todoValue.value === "") {
        alert("Please enter your task!");
        todoValue.focus();
    }
}