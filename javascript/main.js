// window.addEventListener('DOMContentLoaded', main);


// function main() {
//     addEventListeners();
//   }

let currentPath = 'start';
let storyField = document.getElementById ('text-story');
storyField.innerHTML = paths[currentPath].text;
let inputChoice = document.getElementById('input-choice');

function commandExists(input) {
    if (input === 'A' || input === 'B' ) {
        return true;
    }
    return false;
}

function runCommand(input) {
    if (input === 'A') {
        
        currentPath =  paths[currentPath].options.A
        storyField.innerHTML = paths[currentPath].text;
    }
}


function commandAvailable() {
    
}



// 
function readCommand() {
    document.getElementById('btn-accept');
    let value = inputChoice.value.toUpperCase();
    if (commandExists(value)) {
        storyField.innerHTML = 'Running command ' + value;
        runCommand(value);
    } else {
        storyField.innerHTML = "Invalid command!";
    }
}







/**
 * This is a object of the choices and paths in the story.
 *  
 */


