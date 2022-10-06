// TESTING 6 PM
// the list area
const todoList = document.getElementById('todo-list');

// the date variable
const datePicker = document.getElementById('date-picker');

// declare and initialize our todos list
const todos = [{
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

render();

// the add-button
const addButton = document.getElementById('add-button');
const BUTTON_TEXT = 'Add ToDo';
addButton.innerText = BUTTON_TEXT;

// the todo text-box
const textbox = document.getElementById('todo-title');

// the status bar
const statusBar = document.getElementById('status-bar');
const STATUS_TEXT = '-- updates --';
statusBar.innerText = STATUS_TEXT;

// the adding function
function addToDo() {
    const title = textbox.value;                // get the item name from the input text box
    const dueDate = datePicker.value;           // get the date from the date input field

    const id = new Date().getTime();            // create and fill the id field for this new entry (for now assign it to a temporary variable called id, and THEN we assign that to todos.id)

    // push those values we fetched to the todos object
    todos.push({
        title: title,
        dueDate: dueDate,
        id: id
    });

    statusBar.innerText = `${title} added!`;    // status-bar, update
    render();                                   // after we have already applied all the changes we want to the database, we "render" to update the view
    console.log(`${title} added!`);             // update in console
    setTimeout(function(){                      // status-bar, reset
        statusBar.innerText = STATUS_TEXT;
    }, 3000);
}

// delete button function
function deleteToDo(event) {
    console.log('delete me!');                                      // for testing only and can be safely deleted any time
    const deleteButton = event.target;
    const idToDelete = deleteButton.id;

    todos.filter();
}

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
        deleteButton.id = todo.id;                                  // assign the delete button its id (we have already added an id in the database - now time to assign the same to the button HTML id so the two are linked together this way)
        element.appendChild(deleteButton);                          // add the button to the line div
        
        todoList.appendChild(element);                              // actually add the line div to the bigger todoList div
    })
}
