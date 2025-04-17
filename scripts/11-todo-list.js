const todoList = [];

renderTodoList();
// Function to render the todo list

function renderTodoList() {

  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;

    const html = `
      <div class="name">${name}</div>
      <div class="due-date">${dueDate}</div>
      <button class="delete-button" onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      ">Delete</button>
    `;

    todoListHTML += html;
  }

  console.log(todoListHTML);

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const nameElement = document.querySelector('.js-name');
  const name = nameElement.value;

  const dueDateElement = document.querySelector('.js-duedate');
  const dueDate = dueDateElement.value;

  todoList.push({
    name,
    dueDate
  });

  nameElement.value = '';
  dueDateElement.value = '';

  renderTodoList();
}