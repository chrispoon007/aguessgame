var correctNumber = Math.floor(Math.random() * 100);

function playOne(correctNumber, maxAttempts) {
    for (let attempts = 0; attempts < maxAttempts; attempts++) {
        userGuess = prompt(`Attempt ${attempts + 1}/${maxAttempts}: Gimme your guess between 1-100:`);

        if (isNaN(userGuess)) {
            alert("Please Enter a Valid Number!");
        } else if (userGuess === "") {
            alert("Please Enter Something");
        } else if (userGuess !== "") {
            userGuess = parseInt(userGuess);
        }

        if (userGuess == correctNumber) {
            alert(`Correct U Smrt! You guessed the number in ${attempts + 1} attempts.`);
            return true;
        } else if (userGuess < correctNumber && userGuess !== "") {
            alert('Too Low!');
        } else if (userGuess > correctNumber) {
            alert('Too High!');
        }
    }

    alert(`Sorry, you're not that smart. The correct number was ${correctNumber}.`);
    return false;
}

function play() {
    do {
        playOne(correctNumber, 10);
        correctNumber = Math.floor(Math.random() * 100);
    } while (confirm("Do you want to play another round?"));
}

play();