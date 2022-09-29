
// the list area
const todoList = document.getElementById('todo-list');

// initialize and declare our todos list
const todos = ['Get groceries', 'Wash car', 'Make dinner'];

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
    const title = textbox.value;
    todos.push(title);
    statusBar.innerText = `${title} added!`;
    render();
    console.log(`${title} added!`);
    setTimeout(function(){
        statusBar.innerText = STATUS_TEXT;
    }, 3000);
}

// traverse over the list to create the divs
function render() {
    document.getElementById('todo-list').innerHTML = '';

    todos.forEach(todoTitle => {
        const element = document.createElement('div');
        element.innerText = todoTitle;
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