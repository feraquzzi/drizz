const beats = [
  {
    category: 'afrofusion',
    name: 'wizkid',
    age: 33
  },

  {
    category: 'afrobeats',
    name: 'Davido',
    age: 32
  },

  {
    category: 'afrofusion',
    name: 'burnaboy',
    age: 34
  }

];

const userInput = document.getElementById('filterBtn');
const inputValue = userInput.value;

const result = userInput.addEventListener('click', function(){
  console.log(typeof(inputValue));
  beats.map((beat) => {
    if(inputValue === beat.category){
      document.getElementById('result').innerHTML = 'your input matches';
      /*return `<div key=${index}>
        <div>
          <h2>${beat.name}</h2>
          <p>${beat.age}</p>
        </div>
        </div>`*/
    } else{
      document.getElementById('result').innerHTML = 'Sorry no match found';
    }
    
  });
});

document.getElementById('result').innerHTML = result;
