function getComputerChoice(){
    let computer_choice = ["rock","paper","scissor"]
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
        if(human == "s" & computer == "p")
        {
            return "human";
        }
        else if (human == "p" & computer == "r")
        {
            return "human";
        }
        else if (human == "r" & computer == "s")
        {
            return "human";
        }
        else{
            return "computer";
        }
    }
}

function score(check_score)
{
    let human_score = 0;
    let computer_score = 0;

    human_ = getHumanChoice()
    computer_ = getComputerChoice()

    if (check_score == "human")
    {
        human_score += 1;
    }
    else if (check_score == "computer")
    {
        computer_score +=1;
    }
}

let computer_choices = getComputerChoice();
console.log(computer_choices);

let human_choices = getHumanChoice();
console.log(human_choices);