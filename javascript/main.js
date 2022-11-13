// window.addEventListener('DOMContentLoaded', main);

// function main() {
//     addEventListeners();
//     // call other function in future....
//   }

let inputOption = document.getElementById('input-option');




// This is a object of the choices and paths in the story.
let choices = {
    'start': {
        'text': "This is the first day of your coming music career. You're in the music store and you can't decide if you want to start to play guitar or drums. Type <b>A</b> for guitar and <b>B</b> for drums.",
        'options': {
            'A': 'guitar',
            'B': 'drums'
        }
    },
    'guitar': {
        'text': "Some months have passed since you got your guitar. It's starting to get pretty hard and it demands further practicing for you to get any better. It would be easier and much more fun to play video games at this moment. Type <b>A</b> for guitar and <b>B</b> for drums.",
        'options': {
            'A': 'practice',
            'B': 'games'
        }
    },

}

