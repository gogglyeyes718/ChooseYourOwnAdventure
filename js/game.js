// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You come across a 4 man Squad. What do you do?",
            choices: [
                {
                    text: "Attack",
                    nextLevel: "Thebattle",
                },

                {
                    text: "Hide",
                    nextLevel: "HideWhere",
                },
            ]
        },

        Thebattle: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You see a 4 man Squad, choose your weapon.",
            choices: [
                {
                    text: "AR",
                    nextLevel: "fight",
                },
                {
                    text: "Shotgun",
                    nextLevel: "fight",
                },
                {
                    text: "SMG",
                    nextLevel: "fight",
                },
            ]
        },

        fight: {
            message: "You managed to knock two of the four enemy but the other remaining two knocked you and then finished you.",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        
        HideWhere: {
            message: "You see two things that can hide you. What do you choose?",
            choices: [
                {
                    text: "Bush",
                    nextLevel: "Bush",
                },
                 {
                    text: "Tree",
                    nextLevel: "intree",
                },
            ]
        },
        Bush: {
            message: "One of the enemies player tripped on you and they all shot at you, knocked you, and danced on you till you bled out.",
            choices: [
                {
                    text: "Congrats, You played Yourself!",
                    nextLevel: "start",
                },
            ]
        },    
            intree: {
            message: "They left, now what will you do?",
            choices: [
                {
                    text: "Suprise attack",
                    nextLevel: "Suprise",
                },
                {
                    text: "Tell team",
                    nextLevel: "Run",
                },
            ]
        },
        Suprise: {
            message: "You managed to knock two of the four enemy but the other remaining two knocked you and then finished you.",
            choices: [
                {
                    text: "Congrats, You played Yourself!",
                    nextLevel: "start",
                },
            ]
        },
        Run: {
            message: "You managed to tell your team and one of your player said that your squad will fight'em.",
            choices: [
                {
                    text: "let's do this",
                    nextLevel: "fourvfour",
                },
            ]
        },
        fourvfour: {
            message: "You had a great battle but the enemy killed you and two of your comrades. The last player on your team was the one who recomended the fight but left you guys right from the beggining of the fight, meaning you did a 3v4.",
            choices: [
                {
                    text: "Congrats, You played Yourself! Shows you for playing with Jayden.",
                    nextLevel: "start",
                },
            ]
        },
    }
};
