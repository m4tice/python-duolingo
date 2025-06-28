// Global constants
const btnCheck = document.getElementById('btn-check');

// English to Chinese HSK 1 nouns
const hsk1EnglishToChineseNouns = {
    "person": "人",
    "I": "我",
    "you": "你",
    "he": "他",
    "she": "她",
    "we": "我们",
    "you (pl.)": "你们",
    "they": "他们",
    "this": "这",
    "that": "那",
    "mother": "妈妈",
    "father": "爸爸",
    "older brother": "哥哥",
    "younger brother": "弟弟",
    "older sister": "姐姐",
    "younger sister": "妹妹",
    "family": "家",
    "friend": "朋友",
    "teacher": "老师",
    "student": "学生",
    "classroom": "教室",
    "school": "学校",
    "university": "大学",
    "book": "书",
    "pen": "笔",
    "paper": "纸",
    "desk": "桌子",
    "chair": "椅子",
    "phone": "电话",
    "cell phone": "手机",
    "computer": "电脑",
    "name": "名字",
    "word": "词",
    "sentence": "句子",
    "question": "问题",
    "answer": "答案",
    "number": "数字",
    "time": "时间",
    "day": "天",
    "week": "星期",
    "month": "月",
    "year": "年",
    "today": "今天",
    "yesterday": "昨天",
    "tomorrow": "明天",
    "morning": "早上",
    "noon": "中午",
    "afternoon": "下午",
    "evening": "晚上",
    "now": "现在",
    "weekend": "周末",
    "month (calendar)": "月份",
    "water": "水",
    "tea": "茶",
    "coffee": "咖啡",
    "juice": "果汁",
    "milk": "牛奶",
    "rice": "米饭",
    "noodle": "面条",
    "bread": "面包",
    "egg": "蛋",
    "apple": "苹果",
    "banana": "香蕉",
    "orange": "橙子",
    "grape": "葡萄",
    "pear": "梨",
    "watermelon": "西瓜",
    "fish": "鱼",
    "meat": "肉",
    "chicken": "鸡肉",
    "vegetable": "蔬菜",
    "soup": "汤",
    "tea (meal)": "茶",
    "coffee shop": "咖啡馆",
    "restaurant": "饭店",
    "market": "商场",
    "store": "商店",
    "supermarket": "超市",
    "hotel": "酒店",
    "room": "房间",
    "door": "门",
    "window": "窗户",
    "bed": "床",
    "lamp": "灯",
    "toilet": "厕所",
    "bathroom": "浴室",
    "kitchen": "厨房",
    "living room": "客厅",
    "car": "汽车",
    "bus": "公共汽车",
    "train": "火车",
    "plane": "飞机",
    "bike": "自行车",
    "ticket": "票",
    "hotel room": "房间",
    "passport": "护照",
    "money": "钱",
    "bookstore": "书店",
    "library": "图书馆",
    "hospital": "医院",
    "medicine": "药",
    "doctor": "医生",
    "teacher (uni)": "教授",
    "student (uni)": "学生",
    "class": "课",
    "lesson": "课",
    "home": "家",
    "city": "城市",
    "country": "国家",
    "China": "中国",
    "Beijing": "北京",
    "Shanghai": "上海",
    "English": "英语",
    "Chinese": "汉语",
    "English language": "英语",
    "Chinese language": "中文",
    "question word": "什么",
    "who": "谁",
    "where": "哪里",
    "why": "为什么",
    "how": "怎么",
    "how much": "多少钱",
    "yes": "是",
    "no": "不是",
    "also": "也",
    "very": "很",
    "too": "太",
    "bit": "点儿",
    "can": "可以",
    "come": "来",
    "go": "去",
    "eat": "吃",
    "drink": "喝",
    "see": "看",
    "listen": "听",
    "read": "读",
    "write": "写",
    "sleep": "睡觉",
    "get up": "起床",
    "like": "喜欢",
    "love": "爱",
    "want": "要",
    "need": "需要",
    "see you": "再见",
    "hello": "你好",
    "thank you": "谢谢",
    "sorry": "对不起",
    "excuse me": "请",
    "please": "请",
    "good": "好",
    "bad": "坏",
    "big": "大",
    "small": "小",
    "hot": "热",
    "cold": "冷",
    "happy": "高兴",
    "tired": "累",
    "hungry": "饿",
    "thirsty": "渴",
    "bus station": "汽车站",
    "train station": "火车站",
    "airport": "机场",
    "park": "公园",
    "school (campus)": "校园",
    "playground": "操场",
    "book bag": "书包",
    "computer room": "电脑室",
    "dining room": "餐厅",
    "cafeteria": "食堂",
    "wallet": "钱包",
    "watch (wrist)": "手表",
    "glasses": "眼镜",
    "clothes": "衣服",
    "shoes": "鞋子",
    "hat": "帽子",
    "weather": "天气",
    "sun": "太阳",
    "rain": "雨",
    "snow": "雪",
    "cloud": "云",
    "sky": "天",
    "wind": "风",
    "cold weather": "天气冷",
    "hot weather": "天气热"
};



document.addEventListener('DOMContentLoaded', function () {
    renderPage();
    validateAnswer();
});

function renderPage() {
    resetPage();
    const inputQuestionCont = document.getElementById('input-question');
    const randomQuestionKey = getRandomKeyFromMap(hsk1EnglishToChineseNouns, 1);
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
                const translation = fetchTranslation(hsk1EnglishToChineseNouns, question.toString().trim());
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