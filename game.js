let allbutton = document.querySelectorAll(".btn");
let resetbutton = document.querySelector("#reset");

let msgbtn = document.querySelector(".msgbtn");
let msg = document.querySelector("#msg");
let  newgamebtn = document.querySelector("#newgame");

let person0 = true;
const possiblewin = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

allbutton.forEach((button) => {
    button.addEventListener("click",()=>{
        if(person0){
            button.innerText="0";
            person0=false;
        }else{
            button.innerText="X";
            person0=true;
        }
        button.disabled=true;

       winner();
});
});

const winner = () => {
    for(let chance of possiblewin){
        let box1=allbutton[chance[0]].innerText;
        let box2=allbutton[chance[1]].innerText;
        let box3=allbutton[chance[2]].innerText;
        
        if(box1!= "" && box2 != "" && box3!= ""){
            if(box1=== box2 && box2=== box3){
                showwinner(box2)
            }
        }

    }

 };

 const showwinner=(winner)=>{
    msg.innerText=`congrates,winner is ${winner}`;

    msgbtn.classList.remove("hide");
    disablebox();
};
const disablebox=()=>{
    for(let box of allbutton){
        box.disabled=true;
    }
};

const enablebox=()=>{
    for(let box of allbutton){
        box.disabled=false;
        box.innerText=""
    }
};


const resetgame =()=>{
    person0=true;
    enablebox();
    msgbtn.classList.add("hide");
 };

 
 resetbutton.addEventListener("click",resetgame);
  newgamebtn.addEventListener("click",resetgame);