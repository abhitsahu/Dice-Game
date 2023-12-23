import './style.css'


const player0le = document.querySelector('.player--0')
const player1le = document.querySelector('.player--1')

const totalscore0ele = document.querySelector('#score__0');

const totalscore1ele = document.querySelector('#score__1');

const currentscore0ele = document.querySelector('#current_score-0');
const currentscore1ele = document.querySelector('#current_score-1');

const newgameele = document.querySelector('.newgame');
const rolldiceele = document.querySelector('.roll_dice');

const holdele = document.querySelector('.hold');

const diceele = document.querySelector('.dice');

let scores,currentscore,activeplayer,playing;

const init = function(){

    

    currentscore = 0;
    scores = [0,0];

    activeplayer = 0;
    playing = true;

    totalscore0ele.textContent=0;
    totalscore1ele.textContent=0;
    
    currentscore0ele.textContent =0;
    currentscore1ele.textContent =0;
    
    diceele.classList.add('hidden');
    player0le.classList.remove('player--winner');
    player1le.classList.remove('player--winner');

    player0le.classList.add('player--active');
    player1le.classList.remove('player--active');



}
init();

////rolling dice functionality
const switchplayer = function(){

    //assign the current score to 0
    document.getElementById(`current_score-${activeplayer}`).textContent= 0;
        
    //switching player

    activeplayer = activeplayer === 0 ? 1 : 0;
    currentscore = 0;

    //switching the active player colour

    player0le.classList.toggle('player--active');
    player1le.classList.toggle('player--active');


}



rolldiceele.addEventListener('click',function(){

    if(playing){
    //1.generated a random dice roll

    const diceroll = Math.trunc(Math.random()*6)+1;
    console.log(diceroll)

    //2.display dice

    diceele.classList.remove('hidden');

    diceele.src = `dice_${diceroll}.png`;

    //3.check for rolled 1:if true,switch to next player

    if(diceroll!==1){
        
        currentscore += diceroll;
        // console.log(currentscore)
        document.getElementById(`current_score-${activeplayer}`).textContent= currentscore;
        // currentscore0ele.textContent=currentscore;
    }
    else{

        switchplayer();

    }
            }

})

holdele.addEventListener('click',function(){

    if(playing){
    //1.add currentscore to active player score

    scores[activeplayer] +=currentscore;

    document.getElementById(`score__${activeplayer}`).textContent = scores[activeplayer];

   //2. check if player's score is >=100
        //finish the game
    if(scores[activeplayer]>=50){
        playing = false;

        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
        diceele.classList.add('hidden');


    }
    else{

        //3.switch to the next player
    
            switchplayer();
        
    }

            }
    
    
})

////resetting the game

newgameele.addEventListener('click',function(){

    init();


})





