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
                    document.getElementById('input-answer').style.color = 'green';
                }
                else {
                    // document.getElementById('input-answer').textContent = `Incorrect! The correct answer is: ${translation}`;
                    document.getElementById('input-answer').style.color = 'red';
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