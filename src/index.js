document.addEventListener("DOMContentLoaded", () => {
  addingMoreEventListeners();
});

// lecture from Monica Gerard found in Slack on May 3 but dated 4-14
// helped with below code; 
// Monica says Single Purpose Functions used below makes code pretty

// get the form and add an event listener
function addingMoreEventListeners() {
  // you can nest the 2 commands like below
  document.getElementById("create-task-form").addEventListener("submit", handleFormSubmit)
}

function handleFormSubmit(e) {
  e.preventDefault() ;
  // use Event.preventDefault() to 
  // prevent the default action of the "submit" event from occuring
  const task = e.target["new-task-description"].value
  // event.target property can be used to implement event delegation
  displayTask(task) ;
}

// create ul list from the new tasks submitted within form
// return ul of tasks
function displayTask(taskInput) {
  const taskUL = document.getElementById("tasks") ;
  const taskElementIsLi = document.createElement("li") ;
  taskElementIsLi.textContent = taskInput
  // textContent represents text content of the node and its descendants
  taskUL.appendChild(taskElementIsLi) ;
}
