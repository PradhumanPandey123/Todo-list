// {/* <li class="list-group-item">1.&nbsp An item <img  id="wrong"src="close.png" alt="" 
// height="15px">&nbsp&nbsp&nbsp<img src="notepad.png" 
// alt="" height="20px">&nbsp &nbsp<input type="checkbox" id="checkbox" ></li> */}

// let tasks = [{done:false , text:"gym" , id:1}];
// const tasklist = document.getElementById("list");

// // for pushing task
// function addtodo(task){
//     tasks.push(task);
// }

// //deltodo
// function deletetodo(taskid){
//     const newtask = tasks.filter(function(task){
//         return task.id==taskid;
//     });
//     tasks = newtask;
// }
// // rendering the list//
// function renderlist(){
//     for(let i=0;i<tasks.length;i++){
//         const li = document.createElement('li');
//         const task = tasks[i];
//         li.innerHTML = `<input type="checkbox"id="${task.id}">&nbsp<label for="${task.id}">&nbsp&nbsp${task.text}</label>&nbsp&nbsp<button data-taskid="${task.id}"class="delete">Delete</button>`;
//         tasklist.appendChild(li);
//     }
// }
// // checktask//
// function checktask(taskid){
//     const taskind = tasks.findIndex(function (task){
//         return task.id== taskid;
//     });
//     tasks[taskind].done = !tasks[taskind].done;
// }

// // learning data-name,data-id is used to give all the attribute in the element and transform it
// // event.target it is used to target the delete button
// function handleclick(event){
//     if(event.target.className=='delete'){
//        const taskid = Number(event.target.dataset.taskid);
//        deletetodo(taskid);
//     }
// }
// function initialize(){
//      document.addEventListener('click', handleclick);
//      renderlist();
// }
// initialize();

let count=0;
function initialize(){
    count++;
    const obj = new Object();
    obj.text = document.getElementById("value").value;
    obj.id = count;
    additems(obj,count);
}

function additems(obj,count){
    const li = document.createElement('li');
    li.style.backgroundColor = "skyblue";
    li.setAttribute("id",count);
    const spanel = document.createElement('span');
    spanel.innerText = obj.text;
    
    const btn = document.createElement('button');
    btn.innerText="DONE";
    btn.style.float = "right";
    btn.addEventListener('click',function deletetodo(){
        document.getElementById(count).remove();
    });

    li.append(spanel);
    li.append(btn);
    document.getElementById("list").appendChild(li);

}
