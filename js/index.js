const searchInput = document.querySelector('.input');
const clearButton = document.getElementById('cancel');


function noResults(){
    // create an element for the error; a list item ("li")
    const error = document.createElement('li')
    // adding a class name of "error-message" to our error element
    error.classList.add('error-message')

    // creating text for our element
    const text = document.createTextNode('No results found. Sorry!')
    // appending the text to our element
    error.appendChild(text)
    // appending the error to our list element
    list.appendChild(error)
}

function clearList(){
    // looping through each child of the search results list and remove each child
    while (list.firstChild){
        list.removeChild(list.firstChild);
    }
}

function setList(results){
    clearList();
    for (const person of results){
        const resultOther = document.createElement('h3');
        const resultItem = document.createElement('li');
        const resultSound = document.createElement('audio');
        resultItem.classList.add('result-item');
        resultOther.classList.add('result-item');
        resultSound.classList.add('result-item');
        const text = document.createTextNode(person.name);
        const text1 = document.createTextNode(person.age);
        const text2 = document.createTextNode(person.audioFile);
        resultItem.appendChild(text);
        resultOther.appendChild(text1);
        resultSound.appendChild(text2);
        list.appendChild(resultItem);
        list.appendChild(resultOther);
        list.appendChild(resultSound);
    }
    

    if (results.length === 0 ){
        noResults();
    }
}


searchInput.addEventListener("input", (e) => {
    let value = e.target.value

    if (value && value.trim().length > 0){
         value = value.trim().toLowerCase()

        //returning only the results of setList if the value of the search is included in the person's name
        setList(people.filter(person => {
           
            return  person.name.includes(value);
        }));
    }
});