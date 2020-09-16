var userscore = 0;
const userscore_span = document.getElementById("score");
const scoreboard_div = document.querySelector("scoreboard");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
var modal = document.getElementById("simplemodal");
var modbtn = document.getElementById("modelbtn");
var closebtn = document.getElementById("closebtn");
var game = document.getElementById("game");
const restext_span = document.getElementById("restext");
var first = document.getElementById("first");
var second = document.getElementById("second");
var tryagain = document.getElementById("try");
var res = document.getElementById("game-res");
var reshead = document.getElementById("reshead");
var gameover = false;


main();



function getcomputerchoice(){
    const choice = ['r','p','s'];
    const randomnumber = Math.floor(Math.random()*3);
    return choice[randomnumber];
}


function main(){
    
        res.style.display = "none";
        reshead.style.display = "none";

        rock_div.addEventListener('click', function(){
            Game("r");
        })
        paper_div.addEventListener('click', function(){
            Game("p");
        })
        scissor_div.addEventListener('click', function(){
            Game("s");
        })
        modbtn.addEventListener('click',function(){
            modal.style.display = "block";
        });
        closebtn.addEventListener('click',close)
        
        window.addEventListener('click',closebyout)
        
    
    
   
}

function close(){
    modal.style.display = "none";
}


function closebyout(e){
    if(e.target == modal){
        modal.style.display = "none";
    }
}


function Game(userchoice){
    const computerchoice = getcomputerchoice();
    switch(userchoice+computerchoice){
        case "rs" :
            case "sp" :
                case "pr" :
                    userscore++;
                    userscore_span.innerHTML =userscore;
                    win(userchoice,computerchoice);
                    break;
        
        case "sr" :
            case "ps" :
                case "rp" :
                    userscore = 0;
                    userscore_span.innerHTML = userscore;
                    loss(userchoice,computerchoice);
                    break;
        case "rr" :
            case "ss" :
                case "pp" :
                    draw(userchoice,computerchoice);
                    break;
    }
    game.style.display = "none";
    res.style.display = "flex";
    reshead.style.display = "flex";
}


function win(user,computer){
    tryagain.style.color = "rgb(48, 41, 148)"
    restext_span.innerHTML = "YOU WIN";
    if(user == "s"){
    document.getElementById("fi").src = "icon-scissors.svg";
    first.style.borderColor = "rgb(194, 165, 3)";
    }
    else if(user == "r"){
        document.getElementById("fi").src = "icon-rock.svg";
        first.style.borderColor = "rgba(255, 0, 0, 0.705)";
    }
    else{
        document.getElementById("fi").src = "icon-paper.svg";
        first.style.borderColor = "rgba(5, 5, 252, 0.671)";
    }
    if(computer == "s"){
        document.getElementById("si").src = "icon-scissors.svg";
        second.style.borderColor = "rgb(194, 165, 3)";
        }
    else if(computer == "r"){
        document.getElementById("si").src = "icon-rock.svg";
        second.style.borderColor = "rgba(255, 0, 0, 0.705)";
    }
    else{
        document.getElementById("si").src = "icon-paper.svg";
        second.style.borderColor = "rgba(5, 5, 252, 0.671)";
    }
    tryagain.addEventListener("click",function(){
        game.style.display = "flex";
        res.style.display = "none";
        reshead.style.display = "none";
        userscore_span.innerHTML = userscore;
    })
}



function loss(user,computer){
    restext_span.innerHTML = "YOU LOST";
    tryagain.style.color = "rgb(255, 0, 0)"
    if(user == "s"){
        document.getElementById("fi").src = "icon-scissors.svg";
        first.style.borderColor = "rgb(194, 165, 3)";
    }
    else if(user == "r"){
            document.getElementById("fi").src = "icon-rock.svg";
            first.style.borderColor = "rgba(255, 0, 0, 0.705)";
    }
    else{
            document.getElementById("fi").src = "icon-paper.svg";
            first.style.borderColor = "rgba(5, 5, 252, 0.671)";
    }
    if(computer == "s"){
            document.getElementById("si").src = "icon-scissors.svg";
            second.style.borderColor = "rgb(194, 165, 3)";
    }
    else if(computer == "r"){
            document.getElementById("si").src = "icon-rock.svg";
            second.style.borderColor = "rgba(255, 0, 0, 0.705)";
    }
    else{
            document.getElementById("si").src = "icon-paper.svg";
            second.style.borderColor = "rgba(5, 5, 252, 0.671)";
        }
    tryagain.addEventListener("click",function(){
    game.style.display = "flex";
    res.style.display = "none";
    reshead.style.display = "none";
    userscore = 0;
    userscore_span.innerHTML = userscore;
    location.reload();
    })
}



function draw(user,computer){
    tryagain.style.color = "rgb(48, 41, 148)"
    restext_span.innerHTML = "DRAW";
    restext_span.style.paddingRight = "200px"
    restext_span.style.paddingLeft = "200px"
    if(user == "s"){
        document.getElementById("fi").src = "icon-scissors.svg";
        first.style.borderColor = "rgb(194, 165, 3)";
    }
    else if(user == "r"){
            document.getElementById("fi").src = "icon-rock.svg";
            first.style.borderColor = "rgba(255, 0, 0, 0.705)";
    }
    else{
            document.getElementById("fi").src = "icon-paper.svg";
            first.style.borderColor = "rgba(5, 5, 252, 0.671)";
    }
    if(computer == "s"){
            document.getElementById("si").src = "icon-scissors.svg";
            second.style.borderColor = "rgb(194, 165, 3)";
    }
    else if(computer == "r"){
            document.getElementById("si").src = "icon-rock.svg";
            second.style.borderColor = "rgba(255, 0, 0, 0.705)";
    }
    else{
            document.getElementById("si").src = "icon-paper.svg";
            second.style.borderColor = "rgba(5, 5, 252, 0.671)";
        }
        tryagain.addEventListener("click",function(){
        game.style.display = "flex";
        res.style.display = "none";
        reshead.style.display = "none";
        
    })
}