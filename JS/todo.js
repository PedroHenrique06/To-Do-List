let count = 1;

// Cria um novo elemento a partir da entrada e o adiciona a lista
function addElement(){
    if(document.getElementById("task").value.trim().length > 0) {
        let newListElement = document.createElement("li");

        let newInputElement = document.createElement("input");
        newInputElement.type = "checkbox";
        newInputElement.addEventListener("click", TaskDone);
        newListElement.appendChild(newInputElement);

        let newSpanElement = document.createElement("span");
        // Realiza a formatação
        newSpanElement.textContent = document.getElementById("task").value.trim() + " ";
        newListElement.appendChild(newSpanElement);

        let newButtonElement = document.createElement("button");
        newButtonElement.innerHTML = "X";
        newButtonElement.addEventListener("click", DelElement);
        newListElement.appendChild(newButtonElement);

        newListElement.id = "item" + count;
        newListElement.className = "todo-list";
        document.getElementById("main list").appendChild(newListElement);

        document.getElementById("task").value = "";
        count+=1;
    }
}

// Marca a tarefa como concluida
function TaskDone(event){
    let parentId = event.target.parentElement.id;

    if(document.getElementById(parentId).style.textDecoration.toString() === "line-through"){
        document.getElementById(parentId).style.textDecoration = "none";
    }
    else {
        document.getElementById(parentId).style.textDecoration = "line-through";
    } 
}

// Deleta o elemento
function DelElement(event) {
    let parentId = event.target.parentElement.id;

    document.getElementById(parentId).innerHTML = "";
}
