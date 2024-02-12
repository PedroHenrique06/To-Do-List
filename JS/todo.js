let count = 1;

function addElement(){
    let newListElement = document.createElement("li");
    let newInputElement = document.createElement("input");

    newListElement.id = "item" + count;

    newInputElement.type = "checkbox";

    newInputElement.addEventListener("click", TaskDone);

    newListElement.append(newInputElement);

    let spanText = document.createElement("span");
    spanText.textContent = document.getElementById("task").value;

    newListElement.appendChild(spanText);

    document.getElementById("main list").appendChild(newListElement);

    document.getElementById("task").value = "";

    count+=1;
}

function TaskDone(event){
    let parentId = event.target.parentElement.id;

    if(document.getElementById(parentId).style.textDecoration.toString() === "line-through"){
        document.getElementById(parentId).style.backgroundColor = "white";
        document.getElementById(parentId).style.textDecoration = "none";
    }
    else {
        document.getElementById(parentId).style.backgroundColor = "green";
        document.getElementById(parentId).style.textDecoration = "line-through";
    } 
}
