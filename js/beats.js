const beats = [
    { 
        category: 'afrobeat',
        name:'adri',
        age: 17,
        audioFile: 'audio1.mp3',
        background: './images/onebg.jpg'
    },

    { 
        category: 'afrobeat',
        name:'zack',
        age: 23,
        audioFile: 'audio.mp3',
    },

    { 
        category: 'afrobeat',
        name:'adri',
        age: 17,
        audioFile: 'audio.mp3',
    },

    { 
        category: 'afrofusion',
        name:'adri',
        age: 17,
        audioFile: 'audio.mp3',
    },

    { 
        category: 'rock',
        name:'adri',
        age: 17,
        audioFile: 'audio.mp3',
    },

    { 
        category: 'afrobeat',
        name:'mary',
        age: 22,
        audioFile: 'audio.mp3',
    },

    { 
        category: 'afrobeat',
        name:'damian',
        age: 20,
        audioFile: 'audio.mp3',
    },
    
];

const searchResult = document.getElementById('search');


searchResult.addEventListener('input', function(){
    const search = document.getElementById('search');

   const searchValue = search.value;

   const searchId = searchValue.toLowerCase();

   const searchResult = beats.map((beat, index) => {
        if(beat.category === searchId){
            return `<div key=${index} class="searchResult">
                <div class="category-details">
                    <div class="category-placeholder" style="background-image: url('${beat.background}'); background-size: cover; ">

                    </div>

                    <div class="beat-details">
                        <h3>${beat.category}</h3>
                        <h2>${beat.name}</h2>
                    </div>
                </div>

                <div class="sound">
                    <audio src=${beat.audioFile} controls download></audio>
                </div>
                
            </div>`
        } else {
            console.log('No result found');
        }

   });
    
   document.getElementById('searchResult').innerHTML = searchResult.join(' ');
})
     
    



