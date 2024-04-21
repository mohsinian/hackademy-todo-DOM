let body = document.querySelector('body');
//let's seed some initial data
let toDo = [{task: "Go to School", taskStatus: "pending"}, {task: "Wake Up", taskStatus: "done"}];
viewToDo(toDo);
function viewToDo(list) {
    const divBox = document.createElement('div');
    body.append(divBox);
    list.forEach(element => {
        const task = document.createElement('div');
        task.style.display="flex";
        task.style.gap="15px";
        task.append(element.task);
        if(element.taskStatus=="pending") task.style.color="red";
        else task.style.color="green";
        const btn = document.createElement('button');
        btn.textContent = "Done";
        task.append(btn);
        divBox.append(task);
        btn.addEventListener('click',()=>{
            if(element.taskStatus=="pending") 
            {
                element.taskStatus=="done";
                task.style.color="green";
            }
        })
    });

let taskInputDiv = document.createElement('div');
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
    divBox.innerHTML="";
    taskInputDiv.innerHTML="";
    viewToDo(toDo);
})
}

function addToDo(value) {
    toDo.push({task: value, taskStatus: "pending"});
}


