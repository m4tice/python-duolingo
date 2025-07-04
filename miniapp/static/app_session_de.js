// Global constants
const btnCheck = document.getElementById('btn-check');

let lives;
let questions;

const englishToGermanNouns = {    
    // People & Family
    "grandfather": "der Großvater",
    "grandmother": "die Großmutter",
    "uncle": "der Onkel",
    "aunt": "die Tante",
    "cousin (m.)": "der Cousin",
    "cousin (f.)": "die Cousine",
    "neighbor": "der Nachbar",
    "wife": "die Ehefrau",
    "husband": "der Ehemann",
    "childhood": "die Kindheit",

    // Education & Work
    "university": "die Universität",
    "college": "das College",
    "student (university)": "der Student",
    "student (female)": "die Studentin",
    "lecture": "die Vorlesung",
    "subject": "das Fach",
    "homework": "die Hausaufgabe",
    "exam": "die Prüfung",
    "grade": "die Note",
    "career": "die Karriere",
    "office": "das Büro",
    "job": "der Job",
    "application": "die Bewerbung",
    "salary": "das Gehalt",
    "contract": "der Vertrag",

    // Places & Buildings
    "library": "die Bibliothek",
    "museum": "das Museum",
    "theater": "das Theater",
    "cinema": "das Kino",
    "swimming pool": "das Schwimmbad",
    "gym": "das Fitnessstudio",
    "park": "der Park",
    "playground": "der Spielplatz",
    "station": "der Bahnhof",
    "airport": "der Flughafen",
    "harbor": "der Hafen",
    "restaurant": "das Restaurant",
    "café": "das Café",
    "supermarket": "der Supermarkt",
    "market": "der Markt",
    "post office": "die Post",
    "bank": "die Bank",
    "pharmacy": "die Apotheke",
    "hospital": "das Krankenhaus",
    "clinic": "die Klinik",

    // Transportation
    "car": "das Auto",
    "truck": "der LKW",
    "bicycle": "das Fahrrad",
    "motorbike": "das Motorrad",
    "bus": "der Bus",
    "train": "der Zug",
    "ticket": "die Fahrkarte",
    "timetable": "der Fahrplan",
    "route": "die Route",
    "traffic": "der Verkehr",
    "traffic jam": "der Stau",
    "road": "die Straße",

    // Food & Drink
    "breakfast": "das Frühstück",
    "lunch": "das Mittagessen",
    "dinner": "das Abendessen",
    "snack": "der Snack",
    "dish": "das Gericht",
    "menu": "die Speisekarte",
    "bill": "die Rechnung",
    "tip": "das Trinkgeld",
    "kitchen": "die Küche",
    "oven": "der Ofen",
    "fridge": "der Kühlschrank",
    "spoon": "der Löffel",
    "fork": "die Gabel",
    "knife": "das Messer",
    "plate": "der Teller",
    "cup": "die Tasse",
    "glass": "das Glas",
    "bottle": "die Flasche",
    "juice": "der Saft",
    "tea": "der Tee",
    "coffee": "der Kaffee",
    "salt": "das Salz",
    "pepper": "der Pfeffer",
    "sugar": "der Zucker",
    "vegetable": "das Gemüse",
    "fruit": "das Obst",
    "meat": "das Fleisch",
    "fish": "der Fisch",
    "bread": "das Brot",
    "butter": "die Butter",
    "cheese": "der Käse",
    "cake": "der Kuchen",

    // Home & Household
    "apartment": "die Wohnung",
    "house": "das Haus",
    "yard": "der Garten",
    "garage": "die Garage",
    "roof": "das Dach",
    "wall": "die Wand",
    "floor": "der Boden",
    "ceiling": "die Decke",
    "key": "der Schlüssel",
    "lock": "das Schloss",
    "window": "das Fenster",
    "door": "die Tür",
    "curtain": "der Vorhang",
    "carpet": "der Teppich",
    "table": "der Tisch",
    "chair": "der Stuhl",
    "bed": "das Bett",
    "pillow": "das Kissen",
    "blanket": "die Decke",
    "lamp": "die Lampe",
    "mirror": "der Spiegel",

    // Body & Health
    "body": "der Körper",
    "face": "das Gesicht",
    "hair": "das Haar",
    "headache": "der Kopfschmerz",
    "pain": "der Schmerz",
    "medicine": "die Medizin",
    "doctor": "der Arzt",
    "nurse": "die Krankenschwester",
    "appointment": "der Termin",
    "hospital": "das Krankenhaus",
    "clinic": "die Klinik",
    "health": "die Gesundheit",
    "insurance": "die Versicherung",

    // Clothing & Fashion
    "shirt": "das Hemd",
    "T-shirt": "das T-Shirt",
    "blouse": "die Bluse",
    "pants": "die Hose",
    "jeans": "die Jeans",
    "skirt": "der Rock",
    "dress": "das Kleid",
    "jacket": "die Jacke",
    "coat": "der Mantel",
    "shoe": "der Schuh",
    "boot": "der Stiefel",
    "sock": "die Socke",
    "hat": "der Hut",
    "belt": "der Gürtel",
    "scarf": "der Schal",
    "glove": "der Handschuh",

    // Nature & Weather
    "sun": "die Sonne",
    "rain": "der Regen",
    "snow": "der Schnee",
    "wind": "der Wind",
    "cloud": "die Wolke",
    "storm": "der Sturm",
    "weather": "das Wetter",
    "temperature": "die Temperatur",
    "season": "die Jahreszeit",
    "spring": "der Frühling",
    "summer": "der Sommer",
    "autumn": "der Herbst",
    "winter": "der Winter",
    "tree": "der Baum",
    "flower": "die Blume",
    "leaf": "das Blatt",
    "forest": "der Wald",

    // Travel & Leisure
    "vacation": "der Urlaub",
    "trip": "die Reise",
    "ticket": "die Fahrkarte",
    "passport": "der Reisepass",
    "map": "die Karte",
    "guide": "der Reiseführer",
    "hotel": "das Hotel",
    "luggage": "das Gepäck",
    "beach": "der Strand",
    "mountain": "der Berg",
    "lake": "der See",
    "river": "der Fluss",
    "camp": "der Campingplatz",
    "ticket office": "die Kasse",
    "souvenir": "das Souvenir",

    // Emotions & Feelings
    "happiness": "die Freude",
    "fear": "die Angst",
    "anger": "der Ärger",
    "love": "die Liebe",
    "hate": "der Hass",
    "hope": "die Hoffnung",
    "patience": "die Geduld",

    // Daily Life
    "alarm clock": "der Wecker",
    "soap": "die Seife",
    "towel": "das Handtuch",
    "toothbrush": "die Zahnbürste",
    "toothpaste": "die Zahnpasta",
    "shampoo": "das Shampoo",
    "mirror": "der Spiegel",
    "comb": "der Kamm",

    // Technology & Media
    "screen": "der Bildschirm",
    "keyboard": "die Tastatur",
    "mouse": "die Maus",
    "printer": "der Drucker",
    "email": "die E-Mail",
    "website": "die Webseite",
    "internet": "das Internet",
    "headphones": "die Kopfhörer",
    "camera": "die Kamera",

    // Abstract Concepts
    "question": "die Frage",
    "answer": "die Antwort",
    "idea": "die Idee",
    "dream": "der Traum",
    "truth": "die Wahrheit",
    "lie": "die Lüge",
    "chance": "die Chance",
    "choice": "die Wahl",

    // Events & Time
    "birthday": "der Geburtstag",
    "party": "die Party",
    "holiday": "der Feiertag",
    "weekend": "das Wochenende",
    "beginning": "der Anfang",
    "end": "das Ende",
    "moment": "der Moment",
    "time (instance)": "die Zeit",

    // Communication
    "call": "der Anruf",
    "message": "die Nachricht",
    "conversation": "das Gespräch",
    "letter": "der Brief",
    "language": "die Sprache",
    "word": "das Wort",

    // Miscellaneous
    "toy": "das Spielzeug",
    "gift": "das Geschenk",
    "problem": "das Problem",
    "solution": "die Lösung",
    "sign": "das Schild"
};

document.addEventListener('DOMContentLoaded', function () {
    session();
});

function session(){
    lives = 5;
    questions = 0;

    // Initial page render
    renderPage();
    
    // Set up event listener for the check button
    setupEventListeners();
}

function setupEventListeners() {
    const btnCheck = document.getElementById('btn-check');
    const inputAnswer = document.getElementById('input-answer');

    if (btnCheck) {
        btnCheck.addEventListener('click', function () {
            handleAnswerCheck();
        });
    }

    if (inputAnswer) {
        inputAnswer.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleAnswerCheck();
            }
        });
    }
}

function handleAnswerCheck() {
    const inputAnswer = document.getElementById('input-answer');
    const notificationCont = document.getElementsByClassName('notification-text')[0];

    // Text retrieval
    const question = document.getElementById('input-question').textContent.split(' ')[1].trim();
    const answer = inputAnswer.value;

    console.log(`Question: ${question}, Answer: ${answer}`);

    if (answer.trim() === '') {
        alert('Please fill in the answer field.');
        return;
    }

    const translation = fetchTranslation(englishToGermanNouns, question.toString().trim());
    const validation = validate(translation, answer);

    console.log(notificationCont);

    if (validation) {
        notificationCont.textContent = 'Correct!';
        notificationCont.style.color = '#58cc06';
        playCorrectSound();
    }
    else {
        const germanNotification = "Note: replace 'ä ö ü' with 'ae oe ue' and 'ß' with 'ss'.";
        notificationCont.innerHTML = `Incorrect. It's: '${translation}'.<br>Your answer: ${answer}.<br>${germanNotification}`;
        notificationCont.style.color = 'red';
        playIncorrectSound();
        lives--; // Decrease lives on incorrect answer
    }
    
    /*
    Q L D
    0 0 F
    0 1 T
    1 0 F
    1 1 T
    */

    // Increment question counter
    questions++;
    
    console.log(`[DEBUG] Lives: ${lives}, Questions: ${questions}/10`);

    if (lives > 0) {
        // Check if we've reached 10 questions
        if (questions >= 10) {
            // Redirect to end page after a short delay
            setTimeout(() => {
                window.location.href = 'app_end.html';
            }, 2000);
        } else {
            // Render a new question after a short delay
            setTimeout(() => {
                renderPage();
            }, 1500);
        }
    } else {
        // Redirect to end page if lives are exhausted
        setTimeout(() => {
            window.location.href = 'app_end.html';
        }, 2000);
    }
}

function renderPage() {
    resetPage();
    const inputQuestionCont = document.getElementById('input-question');
    const randomQuestionKey = getRandomKeyFromMap(englishToGermanNouns, 1);
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
    // This function is now handled by handleAnswerCheck()
    // Keeping for backward compatibility if called elsewhere
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