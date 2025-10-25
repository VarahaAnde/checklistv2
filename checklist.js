let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

// Function to render the todo list
function renderTodoList() {
  let todoListHTML = "";
  todoList.forEach((item, i) => {
    todoListHTML += 
      `<div class="todo-item">
        <p>${item}</p>
        <button class="delete-item delete-item-js${i}">X</button>
      </div>`
  });
  document.querySelector('.todo-list').innerHTML = todoListHTML;
  
  // Add event listeners for delete buttons
  todoList.forEach((item, i) => {
    document.querySelector(`.delete-item-js${i}`).addEventListener('click', () => {
      todoList.splice(i, 1);
      localStorage.setItem('todoList', JSON.stringify(todoList));
      renderTodoList(); // Re-render instead of reloading
    });
  });
}

function addtoToDoList() {
  const input = document.querySelector('.add-item-input-js').value.trim();
  if (input) {
    todoList.push(input);
    localStorage.setItem('todoList', JSON.stringify(todoList));
    document.querySelector('.add-item-input-js').value = '';
    renderTodoList(); // Update display
  }
}

// Add item functionality
document.querySelector('.add-item-js').addEventListener('click', addtoToDoList);

// Add enter key functionality
document.querySelector('.add-item-input-js').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addtoToDoList();
  }
});

// Initial render
renderTodoList();