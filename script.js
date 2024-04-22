let body = document.getElementById("body-field");
//let's seed some initial data
let toDo = [{task: "Go to School", taskStatus: "pending", id: Date.now()}, {task: "Wake Up", taskStatus: "done"}];
viewToDo(toDo);
function viewToDo(list) {
    body.innerHTML="";
    const divBox = document.createElement('div');
    body.append(divBox);
    let taskInputDiv = document.createElement('div');
    list.forEach(element => {
        const task = document.createElement('div');
        const btn = document.createElement('button');
        const delButton = document.createElement('button');
        task.style.display="flex";
        task.style.gap="15px";
        task.append(element.task);
        if(element.taskStatus=="pending") task.style.color="red";
        else task.style.color="green";
        btn.textContent = "Done";
        task.append(btn);
        delButton.textContent = "Delete";
        task.append(delButton);
        divBox.append(task);
        btn.addEventListener('click',()=>{
            if(element.taskStatus=="pending") 
            {
                element.taskStatus=="done";
                task.style.color="green";
            }
        });
        
        delButton.addEventListener('click',()=>{
            del(element.id);
            viewToDo(toDo);
        });
    });

let taskInput = document.createElement('input');
taskInputDiv.append(taskInput);
const addBtn = document.createElement('button');
addBtn.textContent = "ADD";
taskInputDiv.append(addBtn);
body.append(taskInputDiv);
addBtn.addEventListener('click',()=>{
    console.log(taskInput.value);
    addToDo(taskInput.value);
    console.log(toDo);
    viewToDo(toDo);
})
}



function addToDo(value) {
    toDo.push({task: value, taskStatus: "pending", id: Date.now()});
}

function del(id) {
    toDo = toDo.filter(toDo => toDo.id !== id)
}


