function getComputerChoice(){
    let computer_choice = ["r","p","s"]
    let choice = computer_choice[Math.floor(Math.random()*computer_choice.length)];
    return choice;
}

function getHumanChoice(){
    while (true)
    {
        console.log("Enter S for Scissor");
        console.log("Enter P for Paper");
        console.log("Enter R for Rock");

        let human_choice = prompt("Enter your move:");
        if (!human_choice)
        {
            console.log("Please enter either r or p or s")
            continue;
        }

        human_choice = human_choice.toLowerCase();
        if(human_choice == "r" || human_choice == "p" || human_choice =="s")
        {
            return human_choice;
        }
        else
        {
            console.log("Please enter either r or p or s")
        }
       
    }
   
}

function playround(human, computer){
    if (human == computer)
    {
        return "draw"
    }
    else{
        if((human == "s" && computer == "p") || (human == "p" && computer == "r")|| (human == "r" && computer == "s"))
        {
            return "human";
        }
        else{
            return "computer";
        }
    }
}

function Playground()
{
    let human_score = 0;
    let computer_score = 0;
    let round = 0;

    while (round != 5)
    {
        let human_ = getHumanChoice()
        let computer_ = getComputerChoice()

        let check_score = playround(human_, computer_)
        if (check_score == "human")
        {
            human_score += 1;
        }
        else if (check_score == "computer")
        {
            computer_score +=1;
        }
        round += 1
    }

    if (human_score > computer_score)
    {
        console.log("Human won the game")
    }
    else if (computer_score > human_score)
    {
        console.log("Computer wins the game")
    }
    else
    {
        console.log("The match score is draw")
    }
}

Playground()