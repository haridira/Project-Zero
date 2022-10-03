// TESTING 6 PM
// the list area
const todoList = document.getElementById('todo-list');

// the date variable
const datePicker = document.getElementById('date-picker');

// initialize and declare our todos list
const todos = [{
    'title': 'Get groceries',
    'dueDate': '2022-10-03',
}, {
    'title': 'Wash car',
    'dueDate': '2022-01-24',
}, {
    'title': 'Make dinner',
    'dueDate': '2022-06-03'
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

                                                // push those values we fetched to the todos object
    todos.push({
        title: title,
        dueDate: dueDate,
    });

    statusBar.innerText = `${title} added!`;    // status-bar, update
    render();
    console.log(`${title} added!`);             // update in console
    setTimeout(function(){                      // status-bar, reset
        statusBar.innerText = STATUS_TEXT;
    }, 3000);
}

                                                // traverse over the list to create the divs
function render() {
    document.getElementById('todo-list').innerHTML = '';    // reset the list content div

    todos.forEach(todo => {
        const element = document.createElement('div');
        element.innerText = todo.title;
        todoList.appendChild(element);
    })
}

/*
// this section was for an exercise and is not needed anymore (27.09.2022)

let smalls = ['hello', 'mY', 'Lovely', 'world']

function toUpper(smallLetters) {
    let bigs = [...smallLetters];
    bigs.forEach(word => {
        word = word.toUpperCase();
        console.log(word);
    })
    return bigs;
}


function toUpper(smallLetters) {
    let bigs = [...smallLetters];
    for (let i = 0; i < bigs.length; i++) {
        bigs[i] = bigs[i].toUpperCase();
        console.log(bigs[i]);
    }
    return bigs;
}

bigs = toUpper(smalls);
console.log(bigs);
// */