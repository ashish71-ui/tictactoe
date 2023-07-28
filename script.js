console.log("welcome to tic tac toe")
let music = new Audio("bg.mp3")
let audioturn = new Audio("ting.mp3")
let gameover  = new Audio("gameover.mp3")
let turn ="x"
let isgameover = false
//function to change the turn
const changeturn = ()=>{
    return turn ==="x"?"0":"x"
}
//function to check for a win
const checkwin= ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let winis =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]

    ]
    winis.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&(boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&(boxtext[e[0]].innerText !== '') ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + 'won';
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px'
        }
        


    })

}

// game logic
music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
   element.addEventListener('click',()=>{
    if(boxtext.innerText === ''){
        boxtext.innerText=turn;
        turn = changeturn();
        audioturn.play();
        checkwin();
      

    }




    })

})
//add onclick for reset 
reset.addEventListener('click', () =>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText=""
    })
    turn = "x";
isgameover = false
        document.getElementsByClassName("info")[0].innerText ="turn for" + turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px'

})