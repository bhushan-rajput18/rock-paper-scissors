let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");



const drawGame = () => {

    msg.innerText = " Game was draw ! you both selected the same ";
     msg.style.backgroundColor =  "#081b31";
}

const showWinner = (userWin , userChoice , compChoice) => {
    // if userWin value is true then  following this block logic applieses beacuse if blcock exicuted true value in the first block
    if(userWin) 
    {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win your ${userChoice} beats compuetr's ${compChoice}` 
        msg.style.backgroundColor =  "green";
    }
    else
    {
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You Lose ! computer's ${compChoice} beats your ${userChoice}` 
         msg.style.backgroundColor =  "red";
    }
}

const genCompChoice = () => {
    const options = ["Rock" , "Paper" , "Scissors"];
    const randIdx = Math.floor(Math.random() * 3 );
    return options[randIdx];
}

const playGame = (userChoice) => {

    //generate computerchoice 
    const compChoice = genCompChoice();


    // implementing logic for draw win and lose condtions 

    if(userChoice === compChoice)
    {
        //draw Game 
        drawGame();
    } 
    else 
    {
        let userWin = true;
        if (userChoice === "Rock")
        {
            // then computer choice would be paper or scissors beacuse if it would be rock then it is draGame 

            userWin = compChoice === "Paper" ? false : true 
        }
        else if(userChoice === "Paper")
        {
            //then comp choice should be rock or scissors

            userWin = compChoice === "Scissors" ? false : true 
        }
        else 
        {
            // now only one condtion remaing for user and that is scissors
            //therefore for computer there are two options are available and that are : rock or paper

            userWin = compChoice === "Rock" ? false : true;

        }
        showWinner(userWin , userChoice , compChoice);

    }
}

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("Id")
        playGame(userChoice);
    })
})


