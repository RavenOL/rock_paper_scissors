// use array and randomize return of array position to return 
// either "Rock", "Paper", or "Scissors"
function getComputerChoice() {
    const PlayOptions = ["Rock", "Paper", "Scissors"];
    const ChooseOption = Math.floor(Math.random() * PlayOptions.length);

    console.log(ChooseOption, PlayOptions[ChooseOption]); 
}



