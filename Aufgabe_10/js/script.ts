interface alltodos {
    text: string;
    checked: boolean;
}

var array: alltodos [] = [];

var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;

window.addEventListener("load", function(): void {

    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");

    addButtonDOMElement.addEventListener("click", addTodo);

    drawListToDOM();
});



function drawListToDOM(): void {
    
    todosDOMElement.innerHTML = "";

    for (let index: number = 0; index < array.length; index++) {


        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");

        todo.innerHTML =  "<span class='check " + array[index].checked + "'><i class='fas fa-check'></i></span>"
                            + array[index].text +
                            "<span class='trash fas fa-trash-alt'></span>";

        todo.querySelector(".check").addEventListener("click", function(): void {
            
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function(): void {
            
            deleteTodo(index);
        });

        todosDOMElement.appendChild(todo);
    }

    updateCounter();
}

function updateCounter(): void {
    counterDOMElement.innerHTML = array.length + " in total";

    var checkedCounter: number = 0;
    var unchecked: number = 0;

    for (let index: number = 0; index < array.length; index++) {

        if (array[index].checked == true) {
            checkedCounter++;
        } else {
            unchecked++;
        }
    }

    document.querySelector("#done").innerHTML = checkedCounter + "done";
    document.querySelector("#undone").innerHTML = unchecked + "undone";
}

function addTodo(): void {

    if (inputDOMElement.value != "") {

        var Todosboth: alltodos =  {
            text: inputDOMElement.value,
            checked: false
            
        };
    
        array.unshift(Todosboth);

        inputDOMElement.value = "";

        drawListToDOM();
    }
}

function toggleCheckState(index: number): void {

    array[index].checked = !array[index].checked;

    drawListToDOM();
}

function deleteTodo(index: number): void {
    
    array.splice(index, 1);

    drawListToDOM();
}