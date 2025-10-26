let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

function renderTodoList() {
  let todoListHTML = "";
  //Keep in mind that the reason you need to delineate both a name for the array element at each index alongside the index, is so that you can easily access the 
  //value at each instance.
  todoList.forEach((item, i) => {
    todoListHTML += 
      `<div class="todo-item">
        <p>${item}</p>
        <button class="delete-item delete-item-js${i}">X</button>
      </div>`
  });
  document.querySelector('.todo-list').innerHTML = todoListHTML;
  
  todoList.forEach((item, i) => {
    document.querySelector(`.delete-item-js${i}`).addEventListener('click', () => {
      todoList.splice(i, 1);
      localStorage.setItem('todoList', JSON.stringify(todoList));
      //it is pivotal to rerun the function where the html is being generated so that we can make sure the html or "snapshot" of our data matches that of 
      //the actual state of the array after the splice and the push. this is why it is run at the end of every change to the array.
      renderTodoList();
    });
  });
}

function addtoToDoList() {
  const input = document.querySelector('.add-item-input-js').value.trim();
  if (input) {
    todoList.push(input);
    localStorage.setItem('todoList', JSON.stringify(todoList));
    document.querySelector('.add-item-input-js').value = '';
    renderTodoList(); 
  }
}

document.querySelector('.add-item-js').addEventListener('click', addtoToDoList);

document.querySelector('.add-item-input-js').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addtoToDoList();
  }
});

renderTodoList();