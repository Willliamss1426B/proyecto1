const music= new Audio('./audio/1.mp3');
//music.play();

const songs=[
    {
    id:1,
    songName:`La Sin Sentimientos<br>
                    <div class="subtitle">Alex Pance, BIAKO</div>`,
    poster:"img/1.png"
    },
    {
        id:'2',
        songName:`Por que Sera<br>
                    <div class="subtitle">Grupo Frontera, Maluma</div>`,
        poster:"img/2.png"
    },
    {
        id:"3",
        songName:` Ojitos Rojos<br>
                    <div class="subtitle">Grupo Frontera, Ke Personajes</div>`,
        poster:"img/3.png"
    },
    {
        id:'4',
        songName:`Ya No vuelvas<br>
                    <div class="subtitle">Luck Ra, La K'onga, Ke Personajes</div>`,
        poster:"img/4.png"
    },
    {
        id:'5',
        songName:`Mercho<br>
                    <div class="subtitle">Lil Cake Migrantes, Nico Voldi</div>`,
        poster:"img/5.png"
    },
    {
        id:'6',
        songName:`Luck RA Mission
                    <div class="subtitle">Alan Gomez, Luck Ra</div>`,
        poster:"img/6.png"
    },
    {
        id:'7',
        songName:`Luck RA Mission
                    <div class="subtitle">Alan Gomez, Luck Ra`,
        poster:"img/7.png"
    },
    {
        id:'8',
        songName:`Hola Perdida
                    <div class="subtitle">Luck Ra, Maluma, KHEA</div>`,
        poster:"img/8.png"
    },{
        id:'9',
        songName:`Devuelveme-Corazon
                    <div class="subtitle">Sebastian Yatra</div>`,
        poster:"img/9.png"
    },{
        id:'10',
        songName:`Melancolicos
                    <div class="subtitle">Sebastian Yatra</div>`,
        poster:"img/10.png"
    },





    {
        id:'11',
        songName:`Shivres<br>
                        <div class="subtitle">Ed Sheeran</div>`,
        poster:"/img/11.png"
    },
    {
        id:'12',
        songName:`Enemy<br>
                    <div class="subtitle">Image Drogons x JID</div>`,
        poster:"/img/12.png"
    },
    {
        id:'13',
        songName:`Pepas<br>
                    <div class="subtitle">Farruko</div>`,
        poster:"/img/13.png"
    },
    {
        id:'14',
        songName:`Astronout<br>
                        <div class="subtitle">Masked Wolf</div>`,
        poster:"/img/14.png"
    },
    {
        id:'15',
        songName:`Todo de Ti<br>
                        <div class="subtitle">Rauw Alejandro</div>`,
        poster:"/img/15.png"
    },
    {
        id:'16',
        songName:`Blinding Ligths<br>
                        <div class="subtitle">The Weelknd</div>`,
        poster:"/img/16.png"
    },
    {
        id:'17',
        songName:`Eazy On Me<br>
                        <div class="subtitle">Adele</div>`,
        poster:"/img/17.png"
    },
    {
        id:'18',
        songName:`Happier<br>
                        <div class="subtitle">Marshmello, Bastille</div>`,
        poster:"/img/18.png"
    },
    {
        id:'19',
        songName:`Memories<br>
                        <div class="subtitle">Moroons</div>`,
        poster:"/img/19.png"
    },
    {
        id:'20',
        songName:`Señorita<br>
                        <div class="subtitle">Shows Mendes, Camila Cabello</div>`,
        poster:"/img/20.png"
    }
]
    Array.from(document.getElementsByClassName('songItem')).forEach((e, i)=> {
        e.getElementsByTagName('img')[0].src= songs[i].poster;
        e.getElementsByTagName('h5')[0].innerHTML= songs[i].songName;
    });


    let masterPlay = document.getElementById('masterPlay');
    let wave = document.getElementById('wave');

    masterPlay.addEventListener('click', ()=>{
        if (music.paused || music.currentTime <=0) {
            music.play();
            masterPlay.classList.remove('bi-play-fill');
            masterPlay.classList.add('bi-pause-fill');
            wave.classList.add('active1');
        } else {
            music.pause();
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active1');
         }
    });
   




















    


    const makeAllPlays = ()=>{
        Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
            el.classList.add('bi-play-circle-fill');
            el.classList.remove('bi-pause-circle-fill');

        })
    }
///
    const makeAllBackground = ()=>{
        Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
            el.style.background= 'rgb(105, 105, 105, 0)';
        })
    }
    






    let index = 0;
    let poster_master_play =document.getElementById('poster_master_play');
    let title =document.getElementById('title');
    Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
        e.addEventListener('click', (el)=>{
            index = el.target.id;
            //console.log(index);
            music.src =`audio/${index}.mp3`;
            poster_master_play.src=`img/${index}.png`;
            music.play();
            ///     
            masterPlay.classList.remove('bi-play-fill');
            masterPlay.classList.add('bi-pause-fill');
            /// 
            let songTitles = songs.filter((els)=>{
                return els.id == index;

            });
                ///
            songTitles.forEach(elss =>{
                let { songName } = elss;
                title.innerHTML= songName;
                
            });

            makeAllBackground();
            Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background="rgb(105, 105, 105, 1)";
            makeAllPlays();///
            el.target.classList.remove('bi-play-circle-fill');
            el.target.classList.add('bi-pause-circle-fill');
            wave.classList.add('active1')
        });
    })

    let currentStart= document.getElementById('currentStart');
    let currentEnd= document.getElementById('currentEnd');
    let seek = document.getElementById('seek');
    let bar2 = document.getElementById('bar2');
    let dot = document.getElementsByClassName('dot')[0];

    music.addEventListener('timeupdate',()=>{
        let music_crr = music.currentTime;
        let music_dur = music.duration;

        let min1 = Math.floor(music_dur / 60);
        let sec1 = Math.floor(music_dur % 60);

        //console.log(mini);
        if (sec1 < 10) {
            sec1 = `0${sec1}` ;
        }
        currentEnd.innerText = `${min1}:${sec1}`;

        let min2 = Math.floor(music_curr / 60);
        let sec2 = Math.floor(music_curr % 60);
        if (sec2 < 10) {
            sec2 = ` 0${sec2}` ;
        }

        currentStart.innerText = `${min2}:${sec2}`;
///////////////
        let progressBar = parseInt((music_curr / music_dur) * 100);
        seek.value = progressBar;
        //console.log(seek.value);
        let  seekbar = seek.value;
        bar2.style.width = `${seekbar}%`;
        dot.style.left = `${seekbar}%`;

    });
    seek.addEventListener('change', ()=>{
        music.currentTime=seek.value * music.duration /100;
    });
    let vol_icon = document.getElementById('vol_icon');
    let vol = document.getElementById('vol');
    let vol_bar = document.getElementsByClassName('vol_bar');
    let vol_dot = document.getElementById('vol_dot');

    vol.addEventListener('change',()=>{
        if (vol.value == 0) {
            vol_icon.classList.remove('bi-volume-up-fill');
            vol_icon.classList.remove('bi-volume-down-fill');
            vol_icon.classList.add('bi-volume-off-fill');
        }
        if(vol.value > 0){
            vol_icon.classList.remove('bi-volume-up-fill');
            vol_icon.classList.add('bi-volume-down-fill');
            vol_icon.classList.remove('bi-volume-off-fill');
        }
        if (vol.value > 50) {
            vol_icon.classList.add('bi-volume-up-fill');
            vol_icon.classList.remove('bi-volume-down-fill');
            vol_icon.classList.remove('bi-volume-off-fill');
        }
        let vol_a = vol.value;
        vol_bar.style.with= `${vol_a}%`;
        vol_dot.style.left= `${vol_a}%`;
        music.volume= vol_a / 100;
    });
//////////
    let back = document.getElementById('back');
    let next = document.getElementById('next');
    back.addEventListener('click',()=>{
    
        index -= 1;
        if(index < 1){
            index = Array.from(document.getElementsByClassName('songItem')).length;
        }
        music.src = `audio/${index}.mp3`;
            poster_master_play.src=`img/${index}.png`;
            music.play();
            masterPlay.classList.remove('bi-play-fill');
            masterPlay.classList.add('bi-pause-fill');
            
            let songTiles = songs.filter((els)=>{
                return els.id == index;

            });
            songTiles.forEach(elss=>{
                let {songName} = elss;
                title.innerHTML= songName;
                //poster_master_play.src= poster;
            });

            makeAllBackground();
            Array.from(document.getElementsByClassName('sogItles'))[index - 1].style.background="rgb(105, 105, 105, 0.1)";
            makeAllPlays();
            el.target.classList.remove('bi-pause-circle-fill');
            el.target.classList.add('bi-play-circle-fill');
            wave.classList.add('active2')
    })
    next.addEventListener('click',()=>{
        index++;
        if (index>Array.from(document.getElementsByClassName('sogItles')).length ) {
            index=1;
        }

    })



    
  
      
      
      



        







 







let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementById('pop_song')[0];

pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft +=330;
});

pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -=330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click', ()=>{
    item.scrollLeft +=330;
});
pop_art_left.addEventListener('click', ()=>{
    item.scrollLeft -=330;
});




