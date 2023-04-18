const log = console.log;

// USER INPUT 
const userInput = document.getElementById('input');
// ADD BUTTON
const addBtn = document.querySelector('.add-btn');
// TODO WRAPPER
const todoWrapper = document.querySelector('.todos');

todoWrapper.addEventListener('click', deleteCheck);

// ADD EVENT LISTENER TO ADD BUTTON
addBtn.addEventListener('click', addTodo);

// ADD TODO WHEN ADD BUTTON IS CLICKED
function addTodo(event) {

    if (userInput.value === '') {
        alert('Please enter a task...');
        return;
    } else {
        /*
    TO ITEM STRUCTURE: Top to Bottom
   * Parent Container      :     .todos
   * Individual To Do item :     .todo-item
   * Button Container      :     .button-container
   * Icon Container, <button>
   *  <i class="fas fa-check todo-icon" id="check"></i>
   * Icon Container, <button>
   *  <i class="fas fa-trash-alt todo-icon" id="trash"></i>
   */

        // CREATE INDIVIDUAL TO DO ITEM
        const todoItem = document.createElement('li');
        todoItem.classList.toggle('todo-item');
        todoItem.innerText = userInput.value;
        // APPEND TODO ITEM TO TODO WRAPPER
        todoWrapper.appendChild(todoItem);


        // CREATE BUTTON CONTAINER
        const todoButtonContainer = document.createElement('div');
        todoButtonContainer.classList.toggle('button-container');
        todoItem.appendChild(todoButtonContainer);


        // CREATE CHECK BUTTON
        const checkBtn = document.createElement('button');
        checkBtn.innerHTML = `
            <i class="fas fa-check todo-icon"></i>
        `;
        checkBtn.classList.toggle('check');
        checkBtn.setAttribute('id', 'check');
        todoButtonContainer.appendChild(checkBtn);


        // CREATE TRASH BUTTON
        const trashBtn = document.createElement('button');
        trashBtn.innerHTML = `
            <i class="fas fa-trash-alt todo-icon"></i>
        `;
        trashBtn.classList.toggle('trash');
        trashBtn.setAttribute('id', 'trash');
        todoButtonContainer.appendChild(trashBtn);

        userInput.value = '';
        // event.stopPropagation();
    }
}


function deleteCheck(event) {
    alert("You're about to delete a task!");
    const item = event.target;

    if (item.classList[0] === 'trash') {
        log('click!')
        const todo = item.parentElement.parentElement;
        todo.remove();
    }
}







    // this.parentNode.parentNode.removeChild(this.parentNode)



