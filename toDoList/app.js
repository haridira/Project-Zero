// == MODEL SECTION ==

// === Model Section: Initial Data ===

// declare and initialize our todos list

let todos;

const savedTodos = JSON.parse(localStorage.getItem('todos'));

if (Array.isArray(savedTodos)) {
    todos = savedTodos;
} else {
    todos = [{
        title: 'Get groceries',
        dueDate: '2022-10-03',
        id: 'id001'
    }, {
        title: 'Wash car',
        dueDate: '2022-01-24',
        id: 'id002'
    }, {
        title: 'Make dinner',
        dueDate: '2022-06-03',
        id: 'id003'
    }];
}


// === Model Section: Create Data ===

function createTodo(title, dueDate) {
    const id = '' + new Date().getTime();            // create and fill the id field for this new entry (for now assign it to a temporary variable called id, and THEN we assign that to todos.id)

    // push those values we fetched to the todos object
    todos.push({
        title: title,
        dueDate: dueDate,
        id: id
    });

    saveTodos();
}


// === Model Section: Delete Data ===

function removeTodo(idToDelete) {
    /*
    // done the suggested way
        todos = todos.filter(function(todo) {
            // if the of the todo item maches the id of the HTML elemenet ..
            if (todo.id === idToDelete) {
                return false;
            } else {
                return true;
            }
        });
    */

    // below is how I opted to do it
    todos = todos.filter(item => {
        return item.id !== idToDelete;
    });

    saveTodos();
}

// === The Save and Retreive Data Section ===

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// == VIEW SECTION ==

render();                                                           // render at the start


// the add-button
const addButton = document.getElementById('add-button');
const BUTTON_TEXT = 'Add ToDo';                                     // create a JS variable for the button text and fill the button with it
addButton.innerText = BUTTON_TEXT;

// the status bar
const statusBar = document.getElementById('status-bar');
const STATUS_TEXT = '-- updates --';
statusBar.innerText = STATUS_TEXT;

// === The Render function, which includes creating new divs ===
// create the divs and fill them (this function is for display purposes and not actually updating any variables)
function render() {
    document.getElementById('todo-list').innerHTML = '';            // reset the list content div

    todos.forEach(todo => {                                         // traverse through the list to create and fill the divs
        const element = document.createElement('div');
        element.innerText = todo.title + '......' + todo.dueDate;   // add the todo title + some padding (dots) + the due date to the line div
        
        const deleteButton = document.createElement('button');      // create the delete button
        deleteButton.innerText = 'Delete';                          // .. and fill it with text
        deleteButton.style = 'margin-left: 12px';                   // .. give it some padding (left margin)
        deleteButton.onclick = deleteToDo;                          // call the deleteToDo function
        deleteButton.id = todo.id;                                  // assign the delete button its id (we have already added an id in the database - now time to assign the same to the button HTML id so the two can be linked together this way)
        element.appendChild(deleteButton);                          // add the button to the line div

        const todoList = document.getElementById('todo-list');
        todoList.appendChild(element);                              // actually add the line div to the bigger todoList div
    })
}



// == CONTROLLER SECTION ==

// the add function
function addToDo() {
    const textbox = document.getElementById('todo-title');
    const title = textbox.value;                // get the item name from the input text box
    
    const datePicker = document.getElementById('date-picker');
    const dueDate = datePicker.value;           // get the date from the date input field

    createTodo(title, dueDate);

    statusBar.innerText = `${title} added!`;    // status-bar, update
    render();                                   // after we have already applied all the changes we want to the database, we "render" to update the view
    console.log(`${title} added!`);             // update in console
    setTimeout(function(){                      // status-bar, reset
        statusBar.innerText = STATUS_TEXT;
    }, 3000);
}

// delete button function
function deleteToDo(event) {
    const deleteButton = event.target;
    const idToDelete = deleteButton.id;

    console.log(`Entry with ID # ${idToDelete} deleted!`);                           // for testing only and can be safely deleted any time

    removeTodo(idToDelete);

    // after we have assigned the true and false values, we render the list again
    render();
}
