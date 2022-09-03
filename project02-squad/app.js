let data = [
    {
        name: 'Gabby',
        age: '29',

    },
    {
        name: 'Hari',
        age: '39',
        
    },
    {
        name: 'Jona',
        age: '28',
        
    },
    {
        name: 'Amy',
        age: '31',
        
    },
    {
        name: 'Vince',
        age: '30',
        
    },
    {
        name: 'Roe',
        age: '49',
        
    }    
];

const info = document.querySelector('#info');

/*
// commented out because I prefer the more modern syntax below (supposedly same outcome)
let details = data.map(function(item) {
    return '<div>' + item.name + '</div>'
});
*/

let details = data.map(item => '<div>' + item.name
+ ' is ' + item.age
+ ' years old' + '</div>');


info.innerHTML = details.join('\n')
