let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

document.querySelector('.add-item').addEventListener('click',() => {
  const input = document.querySelector('.add-item-input').value;
  todoList.push(input);
  localStorage.setItem('todoList', JSON.stringify(todoList));
  console.log(todoList);
  document.querySelector('.add-item-input').value = '';
});
