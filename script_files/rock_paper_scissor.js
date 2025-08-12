function getComputerChoice(){
    let computer_choice = ["rock","paper","scissor"]
    let choice = computer_choice[Math.floor(Math.random()*computer_choice.length)];
    return choice
}


computer_choices = getComputerChoice()
console.log(computer_choices)