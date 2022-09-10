let images = [
    "11.png",
    "12.png",
    "13.png",
    "21.png",
    "22.png",
    "23.png",
    "31.png",
    "32.png",
    ""

]
let turns = 0
let shuffleGame = []
let grid = document.getElementById("grid")
let div = `
<div class="bts">
        <img class="item" id="p11" draggable="true" src="${images[0]}" alt="">
    </div>
    <div class="bts">
        <img class="item" id="p12" draggable="true" src="${images[1]}" alt="">
    </div>
    <div class="bts" >
        <img class="item" id="p13" draggable="true" src="${images[2]}" alt="">
    </div>
    <div class="bts">
        <img class="item" id="p21" draggable="true" src="${images[3]}" alt="">
    </div>
    <div class="bts" >
        <img class="item" id="p22" draggable="true" src="${images[4]}" alt="">
    </div>
    <div class="bts" id="">
        <img class="item" id="p23" draggable="true" src="${images[5]}" alt="">
    </div>
    <div class="bts" >
        <img class="item" id="p31" draggable="true" src="${images[6]}" alt="">
    </div>
    <div class="bts" >
        <img class="item" id="p32" draggable="true" src="${images[7]}" alt="" ></div>
    <div class="bts" >${images[8]}</div>

`

grid.innerHTML = div







function start_game(e) {
let Launch = document.getElementById("launch")
 Launch.innerText = "Restart Game"
 Launch.style.backgroundColor ="yellowgreen"


 shuffleGame.length = 0
 console.log('uuh')
 while (shuffleGame.length < 8) {
let numero = Math.floor(Math.random() * 8);
if (!shuffleGame.includes(images[numero])) {
    shuffleGame.push(images[numero])
   // let grid = document.getElementById("grid")
    

} 
}
let img1 = `
<div class="bts">
        <img class="item" id="p11" draggable="true" src="${shuffleGame[0]}" alt="">
    </div>
    <div class="bts">
        <img class="item" id="p12" draggable="true" src="${shuffleGame[1]}" alt="">
    </div>
    <div class="bts" >
        <img class="item" id="p13" draggable="true" src="${shuffleGame[2]}" alt="">
    </div>
    <div class="bts">
        <img class="item" id="p21" draggable="true" src="${shuffleGame[3]}" alt="">
    </div>
    <div class="bts" >
        <img class="item" id="p22" draggable="true" src="${shuffleGame[4]}" alt="">
    </div>
    <div class="bts" id="">
        <img class="item" id="p23" draggable="true" src="${shuffleGame[5]}" alt="">
    </div>
    <div class="bts" >
        <img class="item" id="p31" draggable="true" src="${shuffleGame[6]}" alt="">
    </div>
    <div class="bts" >
        <img class="item" id="p32" draggable="true" src="${shuffleGame[7]}" alt="" ></div>
        <div class="bts" >${images[8]}</div>
    

`
grid.innerHTML = img1
 

// console.log(shuffleGame);


let items = document.querySelectorAll("#grid .bts");
 //item.addEventListener("dragstart", dragStart);

 items.forEach(function(item) {
item.addEventListener("dragstart", dragStart)
 item.addEventListener("dragover", dragOver);
 item.addEventListener("dragenter", dragEnter);
 item.addEventListener("dragleave", dragLeave);
 item.addEventListener("dragend", dragEnd)
 item.addEventListener("drop", handleDrop);

    
});
}


function dragStart(e){
  console.log(e);
    dragMe = this;  

   e.dataTransfer.effectAllowed = "move"
   e.dataTransfer.setData("text/html", this.innerHTML)
   //setTimeout(() => this.classList = "invisible", 0) 
    console.log("dragstarts")
    //console.log(e.target.getAttribute("src"))

    shuffleGame.forEach((element, index) => {
        //return e.target.getAttribute("src")
        shuffleGame[index] =  e.target.getAttribute("src");
    })
    console.log(shuffleGame);
        // dragOver(e)

}
function dragOver(e){
    e.preventDefault();
    console.log("dragover");
    return false;
    
}

function dragEnter(e){
    this.classList.add("drag-over")

    console.log("dragenter");


}

function dragLeave(e){
    this.classList.remove("drag-over")



    console.log("dragleave");
    
}

function dragEnd(e){
    
items.forEach(function(item) {
item.classList.remove("drag-over")

//console.log(e.target.src= `${shuffleGame[7]}`)


console.log("dragend");
    })
//     if (isCorrect(images, shuffleGame)) {
//         console.log("Smart You!, You win");
//     }

 }


function  handleDrop(e){
    e.stopPropagation();
    this.classList.remove("drag-over")
    
    if (dragMe !== this){
        dragMe.innerHTML = this.innerHTML;
        this.innerHTML= e.dataTransfer.getData("text/html")
        console.log("drop");
        // turns += 1;
        // document.getElementById("moves").innerHTML = turns;
    }

    turns += 1;
        document.getElementById("turns").innerHTML = turns;
    return false;

    // let sh = document.querySelectorAll(".item")
    // //let b = e.target.getAttribute("src")
    // shuffleGame = []
    // for (let index = 0; index < sh.length; index++) {
    //     shuffleGame.push[sh[index]];
    //     //console.log(sh[index]);
    //     console.log(sh);
        
    //  }
    
    // let b = e.target.getAttribute("src")
    // shuffleGame.push(sh)
    // console.log(b)
 
    // if (this.innerText == this.innerText) {
    //     console.log("false");
        
// }

        //console.log(e.target.getAttribute("src"))
        //console.log(e.target.src)

//         const isCorrect =(solution, shuffleGame) => {
//      if (JSON.stringify(solution) == JSON.stringify(shuffleGame)) return true;
//      return false;
        
    
 
//  shuffleGame.forEach((element, index) => {
//         //return e.target.getAttribute("src")
//         shuffleGame[index] =  e.target.getAttribute("src");
//     })
//     console.log(shuffleGame);

//         if (isCorrect(images, shuffleGame)) {
//         console.log("Smart You!, You win");
//      }
//  }

//     }
//     return false



//  const isCorrect =(solution, shuffleGame) => {
//      if (JSON.stringify(solution) == JSON.stringify(shuffleGame)) return true;
//      return false;
        
    
//  }



//     function GameOver(params) {
//     if (checkIfCompleted == true) {
//         alert("you won"); 
//     }
// }

// function checkIfCompleted() {
//     let finished = true
//     for (let i = 0; i < images.length; i++) {
//         if (images[i] != shuffleGame[i]) {
//             finished = false
        
        
//         }
    
//     }
//     return finished
// }


}


// originalPuzzel variable
// shuffled


// function GameOver(params) {
//     if (checkIfCompleted == true) {
//         console.log("you won"); 
//     }
// }

// function checkIfCompleted() {
//     let finished = true
//     for (let i = 0; i < images.length; i++) {
//         if (images[i] != shuffleGame[i]) {
//             finished = false
//             return finished
        
//         }
    
//     }
//     return finished
// }


// const state = {}
// state.content = shuffleGame
// console.log(state)

// function setUp(params) {
//     state.content = getState(items)
//     state.dimenson = getDimension(state)

//     setDroppable(items)
//     setDraggable(items)
//     console.log("the state dimension", state.dimenson);




// function getState (tj) {
//     const content = []
//     items.forEach(tj, i) => {
//         content.push(item)
//     }
// }
