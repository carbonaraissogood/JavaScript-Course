const todoList = JSON.parse(localStorage.getItem('todoList')) || [
  {
    name: 'Learn JavaScript',
    dueDate: '2023-10-01'
  },
  {
    name: 'Learn CSS',
    dueDate: '2023-10-02'
  },
  {
    name: 'Learn HTML',
    dueDate: '2023-10-03'
  }
];

console.log('Initial todoList:', todoList);

renderTodoList();
// Function to render the todo list

function renderTodoList() {

  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    console.log('Todo Object:', todoObject);

    const { name, dueDate } = todoObject;
    console.log(`Item ${i}:`, name, dueDate);

    const html = `
      <div class="name">${name}</div>
      <div class="due-date">${dueDate}</div>
      <button class="delete-button" onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
        saveToLocalStorage();
      ">Delete</button>
    `;

    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  saveToLocalStorage();
}

function addTodo() {
  const nameElement = document.querySelector('.js-name');
  const name = nameElement.value.trim();

  const dueDateElement = document.querySelector('.js-duedate');
  const dueDate = dueDateElement.value.trim();

  if (!name || !dueDate) {
    alert('Please enter both a name and a due date.');
    return; // Stop execution if validation fails
  }

  todoList.push({
    name,
    dueDate
  });

  nameElement.value = '';
  dueDateElement.value = '';

  renderTodoList();
}

function saveToLocalStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}