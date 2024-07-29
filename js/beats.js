const beats = [
    { 
        category: 'afrobeat',
        name:'adri',
        age: 17,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        audioFile: 'audio1.mp3'
    },

    { 
        category: 'afrobeat',
        name:'zack',
        age: 23,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        audioFile: 'yk.mp3',
    },

    { 
        category: 'afrobeats',
        name:'adri',
        age: 17,desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        audioFile: 'yk.mp3',
    },

    { 
        category: 'afrobeats',
        name:'adri',
        age: 17,
        audioFile: 'yk.mp3',
    },

    { 
        category: 'afrobeats',
        name:'adri',
        age: 17,
        audioFile: 'yk.mp3',
    },

    { 
        category: 'afrobeats',
        name:'mary',
        age: 22,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        audioFile: 'yk.mp3',
    },

    { 
        category: 'afrobeats',
        name:'damian',
        age: 20,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        audioFile: 'yk.mp3',
    },
    
];

const searchResult = document.getElementById('search-field');


searchResult.addEventListener('click', function(){
    const search = document.getElementById('search');

   const searchValue = search.value;

   const searchId = searchValue.toLowerCase();

   const searchResult = beats.map((beat, index) => {
        if(beat.category === searchId){
            console.log(beat.audioFile);
            return `<div key=${index} class="container" >
                        
                <div class="card">
                    <div class="box">
                        <div class="content">
                            <h2>dz</h2>
                            <h3>${beat.category}</h3>
                            <p>${beat.desc}</p>
                            <a id="playSound" href="${beat.audioFile}" target=_blank onclick="playSound()" ><i class="bi bi-play-fill" style="font-size: 28px;"></i></a>
                        </div>

                        <a class="downloadBtn" href="${beat.audioFile}" style="color: whitesmoke;" download><i style="font-size:30px;" class="bi bi-download"></i></a>
                    </div>

                   
                </div>
             
            </div>`
        } else {
            console.log('No result found');
            
        }

   });
    
   document.getElementById('searchResult').innerHTML = searchResult.join(' ');
})



/*function audioPlay(){
    let playSound = document.getElementById('playSound');
    let audioFile = document.getElementById('audioFile');
    if(audioFile.paused === true){
        audioFile.play();
        playSound.classList.toggle('bi-pause-fill');
    } else if(audioFile.paused !== true){

        audioFile.pause();
        playSound.classList.toggle('bi-play-fill');
    }
};*/

/*function audioPlay(){

    let audioFile = document.getElementById('audioFile');
    audioFile.play();
};

function audioPause(){
    let audioFile = document.getElementById('audioFile');
    audioFile.pause();
};*/

function playSound(){
    let playSound = document.getElementById('playSound');
    playSound.setAttribute('href', '#');
}