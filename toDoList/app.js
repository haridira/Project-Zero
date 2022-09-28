
// initialize and declare our todos list
let todos = ['Get groceries', 'Wash car', 'Make dinner'];

// the adding function
function addToDo() {
    let textbox = document.getElementById('todo-title');
    let title = textbox.value;
    todos.push(title);
    console.log(`${title} added!!`);
}

// traverse over the list to create the divs
todos.forEach(todoTitle => {
    let element = document.createElement('div');
    element.innerText = todoTitle;
    document.body.appendChild(element);
})


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