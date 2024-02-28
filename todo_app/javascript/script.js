document.addEventListener("DOMContentLoaded", function() {
    const newTodoInput = document.getElementById('new-todo');
    const notStartedTodos = document.getElementById('not-started-todos');
    const inProgressTodos = document.getElementById('in-progress-todos');
    const doneTodos = document.getElementById('done-todos');

    function createTodoElement(todoText) {
        const li = document.createElement('li');
        li.textContent = todoText;
        li.className = 'border p-2 rounded';

        return li;
    }

    function addTodoToList(todoText, list) {
        const todoElement = createTodoElement(todoText);
        list.appendChild(todoElement);
    }

    function clearInput() {
        newTodoInput.value = '';
    }

    function handleAddTodo() {
        const todoText = newTodoInput.value.trim();
        if (todoText !== '') {
            addTodoToList(todoText, notStartedTodos);
            clearInput();
        }
    }

    // Event listener for adding todo
    newTodoInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            handleAddTodo();
        }
    });

    // Event listener for button click
    const addTodoButton = document.getElementById('add-todo-button');
    addTodoButton.addEventListener('click', handleAddTodo);
});
