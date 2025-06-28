// Global constants
const btnCheck = document.getElementById('btn-check');

const englishToGermanA1Nouns = {
    // People & Family
    "man": "der Mann",
    "woman": "die Frau",
    "child": "das Kind",
    "boy": "der Junge",
    "girl": "das Mädchen",
    "father": "der Vater",
    "mother": "die Mutter",
    "brother": "der Bruder",
    "sister": "die Schwester",
    "family": "die Familie",

    // Home & Furniture
    "house": "das Haus",
    "apartment": "die Wohnung",
    "room": "das Zimmer",
    "door": "die Tür",
    "window": "das Fenster",
    "table": "der Tisch",
    "chair": "der Stuhl",
    "bed": "das Bett",
    "cupboard": "der Schrank",
    "lamp": "die Lampe",

    // Time & Days
    "day": "der Tag",
    "week": "die Woche",
    "year": "das Jahr",
    "hour": "die Stunde",
    "minute": "die Minute",
    "Monday": "der Montag",
    "Tuesday": "der Dienstag",
    "Wednesday": "der Mittwoch",
    "Thursday": "der Donnerstag",
    "Friday": "der Freitag",

    // Travel & Places
    "city": "die Stadt",
    "village": "das Dorf",
    "street": "die Straße",
    "school": "die Schule",
    "university": "die Universität",
    "park": "der Park",
    "train station": "der Bahnhof",
    "airport": "der Flughafen",
    "hotel": "das Hotel",
    "shop": "das Geschäft",

    // Food & Drinks
    "bread": "das Brot",
    "butter": "die Butter",
    "cheese": "der Käse",
    "apple": "der Apfel",
    "banana": "die Banane",
    "milk": "die Milch",
    "water": "das Wasser",
    "juice": "der Saft",
    "coffee": "der Kaffee",
    "tea": "der Tee",

    // Everyday Activities
    "food": "das Essen",
    "breakfast": "das Frühstück",
    "lunch": "das Mittagessen",
    "dinner": "das Abendessen",
    "shopping": "der Einkauf",
    "sport": "der Sport",
    "game": "das Spiel",
    "film": "der Film",
    "song": "das Lied",
    "work": "die Arbeit",

    // Clothing
    "shirt": "das Hemd",
    "pants": "die Hose",
    "dress": "das Kleid",
    "skirt": "der Rock",
    "jacket": "die Jacke",
    "coat": "der Mantel",
    "shoe": "der Schuh",
    "sock": "die Socke",
    "hat": "der Hut",
    "blouse": "die Bluse",

    // Body & Health
    "head": "der Kopf",
    "eye": "das Auge",
    "ear": "das Ohr",
    "nose": "die Nase",
    "mouth": "der Mund",
    "arm": "der Arm",
    "leg": "das Bein",
    "foot": "der Fuß",
    "hand": "die Hand",
    "heart": "das Herz",

    // Technology & Media
    "cellphone": "das Handy",
    "computer": "der Computer",
    "TV": "der Fernseher",
    "radio": "das Radio",
    "camera": "die Kamera",
    "internet": "das Internet",
    "email": "die E-Mail",
    "message": "die Nachricht",
    "telephone": "das Telefon",
    "charger": "das Ladegerät",

    // Weather & Nature
    "sun": "die Sonne",
    "rain": "der Regen",
    "snow": "der Schnee",
    "wind": "der Wind",
    "cloud": "die Wolke",
    "sky": "der Himmel",
    "tree": "der Baum",
    "flower": "die Blume",
    "mountain": "der Berg"
};

document.addEventListener('DOMContentLoaded', function () {
    renderPage();
    validateAnswer();
});

function renderPage() {
    resetPage();
    const inputQuestionCont = document.getElementById('input-question');
    const randomQuestionKey = getRandomKeyFromMap(englishToGermanA1Nouns, 1);
    inputQuestionCont.textContent = `the ${randomQuestionKey}`;
}

function resetPage() {
    const inputAnswer = document.getElementById('input-answer');
    if (inputAnswer) {
        inputAnswer.value = '';
        inputAnswer.style.color = 'black'; // Reset color
        inputAnswer.focus(); // Focus on the input field
    }
}

function getRandomKeyFromMap(map, count) {
    const entries = Object.entries(map);
    const shuffled = entries.sort(() => 0.5 - Math.random());
    const pair = Object.fromEntries(shuffled.slice(0, count));
    return Object.keys(pair)[0];
}

function validateAnswer() {
    const inputAnswer = document.getElementById('input-answer');
    const notificationCont = document.getElementsByClassName('notification-text')[0];

    if (btnCheck) {
        btnCheck.addEventListener('click', function () {

            // Text retrieval
            const question = document.getElementById('input-question').textContent.split(' ')[1].trim();
            const answer = inputAnswer.value;

            console.log(`Question: ${question}, Answer: ${answer}`);

            if (answer.trim() === '') {
                alert('Please fill in the answer field.');
                return;
            }
            else {
                const translation = fetchTranslation(englishToGermanA1Nouns, question.toString().trim());
                const validation = validate(translation, answer);

                console.log(notificationCont);

                if (validation) {
                    notificationCont.textContent = 'Correct!';
                    notificationCont.style.color = '#58cc06';
                    // document.getElementById('input-answer').style.color = '#58cc06';
                    playCorrectSound();                 
                }
                else {
                    notificationCont.textContent = "Incorrect. It's: '" + translation + "'";
                    notificationCont.style.color = 'red';
                    // document.getElementById('input-answer').style.color = 'red';
                    playIncorrectSound();
                }

                renderPage(); // Render a new question after checking the answer
            }
        });

        inputAnswer.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                btnCheck.click();
            }
        });
    }
}

function fetchTranslation(map, word) {
    console.log(`Fetching translation for: ${word}`);
    return map[word] || "Translation not found";
}

function validate(answer, input) {
     // Remove spaces and convert to lowercase
    const processedAnswer = transformGermanWord(answer).replace(/\s+/g, '').toLowerCase();
    const processedInput = input.replace(/\s+/g, '').toLowerCase();
    console.log(`Validating: Answer - ${processedAnswer}, Input - ${processedInput}`);
    return processedAnswer === processedInput;
}

function transformGermanWord(word) {
    // replace 'äöüß' with 'aeoeue' and 'ß' with 'ss'
    const replacements = {
        'ä': 'ae',
        'ö': 'oe',
        'ü': 'ue',
        'ß': 'ss'
    }
    return word.split('').map(char => replacements[char] || char).join('');
}

function playCorrectSound() {
    // Create an audio context for playing sounds
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    // Create a pleasant success sound using Web Audio API
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Configure the sound - a pleasant ascending chime
    oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
    oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
    oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5

    oscillator.type = 'sine';

    // Configure volume envelope
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

    // Play the sound
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

function playIncorrectSound() {
    // Create an audio context for playing sounds
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    // Create a pleasant error sound using Web Audio API
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Configure the sound - a descending tone
    oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // A4
    oscillator.frequency.setValueAtTime(349.23, audioContext.currentTime + 0.1); // F4
    oscillator.frequency.setValueAtTime(261.63, audioContext.currentTime + 0.2); // C4

    oscillator.type = 'sine';

    // Configure volume envelope
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

    // Play the sound
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}