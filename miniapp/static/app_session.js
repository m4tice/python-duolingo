document.addEventListener('DOMContentLoaded', function () {
    console.log('App session script loaded');
    validateAnswer();
});

function validateAnswer() {
    const btnCheck = document.getElementById('btn-check');

    if (btnCheck) {
        btnCheck.addEventListener('click', function () {

            const question = document.getElementById('input-question').textContent;
            const answer = document.getElementById('input-answer').value;

            if (answer.trim() === '') {
                alert('Please fill in the answer field.');
                return;
            }
            else {
                const translation = fetchTranslation(question.trim());

                if (translation.toLowerCase() === answer.trim().toLowerCase()) {
                    alert('Correct answer!');
                } else {
                    alert(`Incorrect answer! The correct translation is: "${translation}"`);
                }
            }
        });
    }
}

function fetchTranslation(word) {
    const germanA1Nouns = {
        // People & Family
        "der Mann": "man",
        "die Frau": "woman",
        "das Kind": "child",
        "der Junge": "boy",
        "das Mädchen": "girl",
        "der Vater": "father",
        "die Mutter": "mother",
        "der Bruder": "brother",
        "die Schwester": "sister",
        "die Familie": "family",

        // Home & Furniture
        "das Haus": "house",
        "die Wohnung": "apartment",
        "das Zimmer": "room",
        "die Tür": "door",
        "das Fenster": "window",
        "der Tisch": "table",
        "der Stuhl": "chair",
        "das Bett": "bed",
        "der Schrank": "cupboard",
        "die Lampe": "lamp",

        // Time & Days
        "der Tag": "day",
        "die Woche": "week",
        "das Jahr": "year",
        "die Stunde": "hour",
        "die Minute": "minute",
        "der Montag": "Monday",
        "der Dienstag": "Tuesday",
        "der Mittwoch": "Wednesday",
        "der Donnerstag": "Thursday",
        "der Freitag": "Friday",

        // Travel & Places
        "die Stadt": "city",
        "das Dorf": "village",
        "die Straße": "street",
        "die Schule": "school",
        "die Universität": "university",
        "der Park": "park",
        "der Bahnhof": "train station",
        "der Flughafen": "airport",
        "das Hotel": "hotel",
        "das Geschäft": "shop",

        // Food & Drinks
        "das Brot": "bread",
        "die Butter": "butter",
        "der Käse": "cheese",
        "der Apfel": "apple",
        "die Banane": "banana",
        "die Milch": "milk",
        "das Wasser": "water",
        "der Saft": "juice",
        "der Kaffee": "coffee",
        "der Tee": "tea",

        // Everyday Activities
        "das Essen": "food",
        "das Frühstück": "breakfast",
        "das Mittagessen": "lunch",
        "das Abendessen": "dinner",
        "der Einkauf": "shopping",
        "der Sport": "sport",
        "das Spiel": "game",
        "der Film": "film",
        "das Lied": "song",
        "die Arbeit": "work",

        // Clothing
        "das Hemd": "shirt",
        "die Hose": "pants",
        "das Kleid": "dress",
        "der Rock": "skirt",
        "die Jacke": "jacket",
        "der Mantel": "coat",
        "der Schuh": "shoe",
        "die Socke": "sock",
        "der Hut": "hat",
        "die Bluse": "blouse",

        // Body & Health
        "der Kopf": "head",
        "das Auge": "eye",
        "das Ohr": "ear",
        "die Nase": "nose",
        "der Mund": "mouth",
        "der Arm": "arm",
        "das Bein": "leg",
        "der Fuß": "foot",
        "die Hand": "hand",
        "das Herz": "heart",

        // Technology & Media
        "das Handy": "cellphone",
        "der Computer": "computer",
        "der Fernseher": "TV",
        "das Radio": "radio",
        "die Kamera": "camera",
        "das Internet": "internet",
        "die E-Mail": "email",
        "die Nachricht": "message",
        "das Telefon": "telephone",
        "das Ladegerät": "charger",

        // Weather & Nature
        "die Sonne": "sun",
        "der Regen": "rain",
        "der Schnee": "snow",
        "der Wind": "wind",
        "die Wolke": "cloud",
        "der Himmel": "sky",
        "der Baum": "tree",
        "die Blume": "flower",
        "das Wasser": "water",
        "der Berg": "mountain"
    };

    return germanA1Nouns[word] || "Translation not found";
}