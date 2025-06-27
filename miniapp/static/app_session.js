document.addEventListener('DOMContentLoaded', function () {
    console.log('App session script loaded');
    validateAnswer();
});

function validateAnswer() {
    const btnCheck = document.getElementById('btn-check');

    if (btnCheck) {
        btnCheck.addEventListener('click', function () {

            const question = document.getElementById('input-question').textContent.split(' ')[1].trim();
            const answer = document.getElementById('input-answer').value;

            if (answer.trim() === '') {
                alert('Please fill in the answer field.');
                return;
            }
            else {
                const translation = fetchTranslation(question.trim());
                const validation = validate(translation, answer);
                
                if (validation) {
                    // document.getElementById('input-answer').textContent = 'Correct!';
                    document.getElementById('input-answer').style.color = '#58cc06';
                    playCorrectSound();
                }
                else {
                    // document.getElementById('input-answer').textContent = `Incorrect! The correct answer is: ${translation}`;
                    document.getElementById('input-answer').style.color = 'red';
                    playIncorrectSound();
                }
            }
        });
    }
}

function fetchTranslation(word) {
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

    return englishToGermanA1Nouns[word] || "Translation not found";
}

function validate(answer, input) {
    return answer.toLowerCase() === input.toLowerCase();
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