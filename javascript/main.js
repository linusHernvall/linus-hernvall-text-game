// window.addEventListener('DOMContentLoaded', main);


// function main() {
//     addEventListeners();
//   }

let currentPath = 'start';

let storyField = document.getElementById('text-story');
storyField.innerHTML = paths[currentPath].text;

let invalidCommand = document.getElementById('invalid-command');

let inputChoice = document.getElementById('input-choice');
inputChoice.addEventListener('keyup', (event) => {
    invalidCommand.innerHTML = '';
})

function commandExists(input) {
    if (input === 'A' || input === 'B') {
        return true;
    }
    return false;
}

function runCommand(input) {
    currentPath = paths[currentPath].options[input];
    storyField.innerHTML = paths[currentPath].text;
}

function readCommand() {
    document.getElementById('btn-accept');
    let value = inputChoice.value.toUpperCase();
    if (commandExists(value)) {
        storyField.innerHTML = 'Running command ' + value;
        runCommand(value);
    } else {
        invalidCommand.innerHTML = "Invalid command!";
        inputChoice.focus();
    }
}

// Rensar sökfältet när det klickas på.
document.getElementById("input-choice").addEventListener("click", function() {
    this.value = "";
});