let taskIdCounter = 4; // Start task IDs after existing tasks

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  const column = ev.target.closest('.column');
  column.querySelector('.task-container').appendChild(document.getElementById(data));
}

function addTask() {
  const taskDiv = document.createElement('div');
  taskDiv.className = 'task';
  taskDiv.draggable = true;
  taskDiv.contentEditable = true;
  taskDiv.ondragstart = drag;
  taskDiv.id = `task${taskIdCounter++}`;
  taskDiv.textContent = 'New Task';

  document.getElementById('todo-tasks').appendChild(taskDiv);
}
