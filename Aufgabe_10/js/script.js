var array = [];
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index) {
        var todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + array[index].checked + "'><i class='fas fa-check'></i></span>"
            + array[index].text +
            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    };
    for (var index = 0; index < array.length; index++) {
        _loop_1(index);
    }
    updateCounter();
}
function updateCounter() {
    counterDOMElement.innerHTML = array.length + " in total";
    var checkedCounter = 0;
    var unchecked = 0;
    for (var index = 0; index < array.length; index++) {
        if (array[index].checked == true) {
            checkedCounter++;
        }
        else {
            unchecked++;
        }
    }
    document.querySelector("#done").innerHTML = checkedCounter + "done";
    document.querySelector("#undone").innerHTML = unchecked + "undone";
}
function addTodo() {
    if (inputDOMElement.value != "") {
        var Todosboth = {
            text: inputDOMElement.value,
            checked: false
        };
        array.unshift(Todosboth);
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
function toggleCheckState(index) {
    array[index].checked = !array[index].checked;
    drawListToDOM();
}
function deleteTodo(index) {
    array.splice(index, 1);
    drawListToDOM();
}
//# sourceMappingURL=script.js.map