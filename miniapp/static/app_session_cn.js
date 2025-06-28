// Global constants
const btnCheck = document.getElementById('btn-check');

// English to Chinese HSK 1 nouns
const hsk1EnglishToPinyinNouns = {
    "I": "wǒ",
    "you": "nǐ",
    "he": "tā",
    "she": "tā",
    "we": "wǒmen",
    "they": "tāmen",
    "this": "zhè",
    "that": "nà",
    "here": "zhèr",
    "there": "nàr",

    "person": "rén",
    "mother": "māma",
    "father": "bàba",
    "older brother": "gēge",
    "younger brother": "dìdi",
    "older sister": "jiějie",
    "younger sister": "mèimei",
    "friend": "péngyou",
    "teacher": "lǎoshī",
    "student": "xuéshēng",

    "name": "míngzi",
    "word": "cí",
    "sentence": "jùzi",
    "question": "wèntí",
    "answer": "dá'àn",
    "book": "shū",
    "pen": "bǐ",
    "paper": "zhǐ",
    "school": "xuéxiào",
    "classroom": "jiàoshì",

    "word (vocabulary)": "cíhuì",
    "lesson": "kè",
    "class": "kè",
    "home": "jiā",
    "family": "jiātíng",
    "child": "háizi",
    "people": "rénmen",
    "time": "shíjiān",
    "day": "rì",
    "today": "jīntiān",

    "yesterday": "zuótiān",
    "tomorrow": "míngtiān",
    "morning": "zǎoshang",
    "noon": "zhōngwǔ",
    "afternoon": "xiàwǔ",
    "evening": "wǎnshang",
    "year": "nián",
    "month": "yuè",
    "week": "xīngqī",
    "day (informally)": "tiān",

    "water": "shuǐ",
    "tea": "chá",
    "coffee": "kāfēi",
    "milk": "niúnǎi",
    "rice": "mǐfàn",
    "noodles": "miàntiáo",
    "bread": "miànbāo",
    "egg": "jīdàn",
    "apple": "píngguǒ",
    "banana": "xiāngjiāo",

    "orange": "chéngzi",
    "grape": "pútao",
    "pear": "lí",
    "watermelon": "xīguā",
    "meat": "ròu",
    "chicken": "jīròu",
    "fish": "yúròu",
    "vegetable": "shūcài",
    "soup": "tāng",
    "fruit": "shuǐguǒ",

    "milk (archaic)": "niúyóu",
    "juice": "guǒzhī",
    "kitchen": "chúfáng",
    "restaurant": "cānguǎn",
    "shop": "shāngdiàn",
    "store": "shāngdiàn",
    "market": "shìchǎng",
    "hotel": "fàndiàn",
    "bus": "gōnggòng qìchē",
    "train": "huǒchē",

    "airplane": "fēijī",
    "car": "qìchē",
    "bike": "zìxíngchē",
    "taxi": "chūzūchē",
    "ticket": "piào",
    "computer": "diànnǎo",
    "telephone": "diànhuà",
    "cellphone": "shǒujī",
    "internet": "hùliánwǎng",
    "TV": "diànshì",

    "radio": "guǎngbō",
    "camera": "xiàngjī",
    "picture": "zhàopiàn",
    "movie": "diànyǐng",
    "music": "yīnyuè",
    "song": "gē",
    "news": "xīnwén",
    "letter": "xìn",
    "email": "diànzǐ yóujiàn",
    "newspaper": "bàozhǐ",

    "street": "jiē",
    "road": "lù",
    "bridge": "qiáo",
    "park": "gōngyuán",
    "hospital": "yīyuàn",
    "bank": "yínháng",
    "post office": "yóujú",
    "library": "túshūguǎn",
    "movie theater": "diànyǐngyuàn",
    "gym": "tǐyùguǎn",

    "supermarket": "chāoshì",
    "pharmacy": "yàodiàn",
    "clinic": "yīshēng fáng",
    "doctor": "yīshēng",
    "nurse": "hùshi",
    "medicine": "yàowù",
    "money": "qián",
    "wallet": "qiánbāo",
    "watch": "shǒubiǎo",
    "glasses": "yǎnjìng",

    "clothes": "yīfú",
    "shoes": "xié",
    "hat": "mào",
    "coat": "wàitào",
    "shirt": "chènshān",
    "pants": "kùzi",
    "skirt": "qúnzi",
    "dress": "liányīqún",
    "sock": "wàzi",
    "belt": "dài",

    "weather": "tiānqì",
    "sun": "tài yáng",
    "rain": "yǔ",
    "snow": "xuě",
    "wind": "fēng",
    "cloud": "yún",
    "sky": "tiānkōng",
    "season": "jìjié",
    "spring": "chūntiān",
    "summer": "xiàtiān",

    "autumn": "qiūtiān",
    "winter": "dōngtiān",
    "mountain": "shān",
    "river": "hé",
    "sea": "hǎi",
    "lake": "hú",
    "forest": "sēnlín",
    "tree": "shù",
    "flower": "huā",
    "grass": "cǎo",

    "animal": "dòngwù",
    "dog": "gǒu",
    "cat": "māo",
    "bird": "niǎo",
    "fish (creature)": "yú",
    "mouse": "lǎoshǔ",
    "cow": "niú",
    "horse": "mǎ",
    "pig": "zhū",
    "sheep": "yáng",

    "name card": "míngpiàn",
    "passport": "hùzhào",
    "key": "yàoshi",
    "umbrella": "sǎn",
    "bag": "dài",
    "box": "hézi",
    "door": "mén",
    "window": "chuāng",
    "bed": "chuáng",
    "table": "zhuōzi",

    "chair": "yǐzi",
    "couch": "shāfā",
    "lamp": "dēng",
    "mirror": "jìngzi",
    "floor": "dìbǎn",
    "wall": "qiáng",
    "ceiling": "tiānhuābǎn",
    "roof": "wūdǐng",
    "garden": "huāyuán",
    "yard": "huāyuán"
};




document.addEventListener('DOMContentLoaded', function () {
    renderPage();
    validateAnswer();
});

function renderPage() {
    resetPage();
    const inputQuestionCont = document.getElementById('input-question');
    const randomQuestionKey = getRandomKeyFromMap(hsk1EnglishToPinyinNouns, 1);
    inputQuestionCont.textContent = `${randomQuestionKey}`;
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
            const question = document.getElementById('input-question').textContent.trim();
            const answer = inputAnswer.value;

            console.log(`Question: ${question}, Answer: ${answer}`);

            if (answer.trim() === '') {
                alert('Please fill in the answer field.');
                return;
            }
            else {
                const translation = fetchTranslation(hsk1EnglishToPinyinNouns, question.toString().trim());
                const validation = validate(translation, answer);

                console.log(notificationCont);

                if (validation) {
                    notificationCont.textContent = 'Correct!';
                    notificationCont.style.color = '#58cc06';
                    // document.getElementById('input-answer').style.color = '#58cc06';
                    playCorrectSound();
                }
                else {
                    notificationCont.innerHTML = `Incorrect. It's: '${translation}'.<br>Your answer: ${answer}.`;
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