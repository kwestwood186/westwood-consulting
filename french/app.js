const STORAGE_KEY = "french-immersion-parent-bridge-v1";

const PHRASES = [
  { id: "p01", category: "Greetings", fr: "Bonjour.", en: "Hello.", note: "Use every morning." },
  { id: "p02", category: "Greetings", fr: "Comment ça va?", en: "How are you?", note: "A simple check-in." },
  { id: "p03", category: "Greetings", fr: "Ça va bien, merci.", en: "I am well, thank you.", note: "A complete beginner answer." },
  { id: "p04", category: "Greetings", fr: "On commence?", en: "Shall we start?", note: "Good for short practice." },
  { id: "p05", category: "Greetings", fr: "Bonne journée!", en: "Have a good day!", note: "School drop-off phrase." },
  { id: "p06", category: "Classroom", fr: "Écoute, s'il te plaît.", en: "Listen, please.", note: "Common instruction." },
  { id: "p07", category: "Classroom", fr: "Répète après moi.", en: "Repeat after me.", note: "Useful for practice." },
  { id: "p08", category: "Classroom", fr: "Lève la main.", en: "Raise your hand.", note: "School routine." },
  { id: "p09", category: "Classroom", fr: "Assieds-toi.", en: "Sit down.", note: "The final d is silent." },
  { id: "p10", category: "Classroom", fr: "Range ton sac.", en: "Put away your bag.", note: "Home and school." },
  { id: "p11", category: "Classroom", fr: "Fais la file.", en: "Line up.", note: "Often heard at school." },
  { id: "p12", category: "Classroom", fr: "Attends ton tour.", en: "Wait your turn.", note: "Play and classroom phrase." },
  { id: "p13", category: "Classroom", fr: "Je ne comprends pas encore.", en: "I do not understand yet.", note: "Adds a growth mindset." },
  { id: "p14", category: "Classroom", fr: "Peux-tu m'aider?", en: "Can you help me?", note: "High-value survival phrase." },
  { id: "p15", category: "Routines", fr: "Il est temps de se préparer.", en: "It is time to get ready.", note: "Morning routine." },
  { id: "p16", category: "Routines", fr: "Mets tes chaussures.", en: "Put on your shoes.", note: "Use before leaving." },
  { id: "p17", category: "Routines", fr: "As-tu ton sac?", en: "Do you have your bag?", note: "Backpack check." },
  { id: "p18", category: "Routines", fr: "On lit une page en français.", en: "We are reading one page in French.", note: "Keep it tiny." },
  { id: "p19", category: "Routines", fr: "Encore une fois.", en: "One more time.", note: "Practice phrase." },
  { id: "p20", category: "Routines", fr: "Très bon effort.", en: "Very good effort.", note: "Praise effort, not perfection." },
  { id: "p21", category: "Calendar", fr: "Aujourd'hui, c'est lundi.", en: "Today is Monday.", note: "Swap the weekday." },
  { id: "p22", category: "Calendar", fr: "Quel temps fait-il?", en: "What is the weather like?", note: "Daily calendar talk." },
  { id: "p23", category: "Calendar", fr: "Il fait froid.", en: "It is cold.", note: "Weather sentence." },
  { id: "p24", category: "Calendar", fr: "Il pleut.", en: "It is raining.", note: "Weather sentence." },
  { id: "p25", category: "Calendar", fr: "Demain, c'est mardi.", en: "Tomorrow is Tuesday.", note: "Add tomorrow slowly." },
  { id: "p26", category: "Lunch", fr: "J'ai faim.", en: "I am hungry.", note: "Need phrase." },
  { id: "p27", category: "Lunch", fr: "J'ai soif.", en: "I am thirsty.", note: "Need phrase." },
  { id: "p28", category: "Lunch", fr: "Veux-tu une pomme?", en: "Do you want an apple?", note: "Food offer pattern." },
  { id: "p29", category: "Lunch", fr: "C'est dans ta boîte à lunch.", en: "It is in your lunch box.", note: "Canadian school context." },
  { id: "p30", category: "Lunch", fr: "J'aime ça.", en: "I like that.", note: "Preference phrase." },
  { id: "p31", category: "Lunch", fr: "Je n'aime pas ça.", en: "I do not like that.", note: "Preference phrase." },
  { id: "p32", category: "Lunch", fr: "Est-ce que c'est épicé?", en: "Is it spicy?", note: "Food question." },
  { id: "p33", category: "Feelings", fr: "Je suis fatigué.", en: "I am tired.", note: "Use fatiguée for a girl or woman." },
  { id: "p34", category: "Feelings", fr: "Je suis content.", en: "I am happy.", note: "Use contente for a girl or woman." },
  { id: "p35", category: "Feelings", fr: "J'ai besoin d'aide.", en: "I need help.", note: "Important school phrase." },
  { id: "p36", category: "Feelings", fr: "Je dois aller aux toilettes.", en: "I need to go to the bathroom.", note: "Very practical." },
  { id: "p37", category: "Feelings", fr: "Ça fait mal.", en: "That hurts.", note: "Health and comfort." },
  { id: "p38", category: "Feelings", fr: "Respire doucement.", en: "Breathe gently.", note: "Calming phrase." },
  { id: "p39", category: "Reading", fr: "Regarde l'image.", en: "Look at the picture.", note: "Picture-walk phrase." },
  { id: "p40", category: "Reading", fr: "Montre-moi le mot.", en: "Show me the word.", note: "Reading support." },
  { id: "p41", category: "Reading", fr: "Qu'est-ce que tu vois?", en: "What do you see?", note: "Open question." },
  { id: "p42", category: "Reading", fr: "Tourne la page.", en: "Turn the page.", note: "Book routine." },
  { id: "p43", category: "Reading", fr: "Lis avec moi.", en: "Read with me.", note: "Shared reading." },
  { id: "p44", category: "Reading", fr: "C'est une histoire drôle.", en: "It is a funny story.", note: "Book reaction." },
  { id: "p45", category: "Math", fr: "Compte jusqu'à dix.", en: "Count to ten.", note: "Math warm-up." },
  { id: "p46", category: "Math", fr: "Un, deux, trois, quatre, cinq.", en: "One, two, three, four, five.", note: "Number rhythm." },
  { id: "p47", category: "Math", fr: "Où est ton crayon?", en: "Where is your pencil?", note: "School supply phrase." },
  { id: "p48", category: "Math", fr: "Dessine un cercle.", en: "Draw a circle.", note: "Shapes and commands." },
  { id: "p49", category: "Math", fr: "Colorie en rouge.", en: "Colour it red.", note: "Schoolwork phrase." },
  { id: "p50", category: "Math", fr: "Combien y en a-t-il?", en: "How many are there?", note: "Counting question." },
  { id: "p51", category: "Friends", fr: "C'est mon tour.", en: "It is my turn.", note: "Play phrase." },
  { id: "p52", category: "Friends", fr: "C'est ton tour.", en: "It is your turn.", note: "Play phrase." },
  { id: "p53", category: "Friends", fr: "On partage.", en: "We share.", note: "Social language." },
  { id: "p54", category: "Friends", fr: "Viens jouer.", en: "Come play.", note: "Invitation." },
  { id: "p55", category: "Friends", fr: "Je suis désolé.", en: "I am sorry.", note: "Use désolée for a girl or woman." },
  { id: "p56", category: "Friends", fr: "Ça va?", en: "Are you okay?", note: "Care phrase." },
  { id: "p57", category: "Teacher", fr: "Mon enfant commence l'immersion française.", en: "My child is starting French immersion.", note: "Parent-teacher phrase." },
  { id: "p58", category: "Teacher", fr: "Quels mots pratiquez-vous cette semaine?", en: "Which words are you practising this week?", note: "Useful question." },
  { id: "p59", category: "Teacher", fr: "Pouvez-vous envoyer une liste de vocabulaire?", en: "Can you send a vocabulary list?", note: "Support request." },
  { id: "p60", category: "Teacher", fr: "Merci pour votre aide.", en: "Thank you for your help.", note: "Polite close." },
  { id: "p61", category: "Teacher", fr: "Comment puis-je aider à la maison?", en: "How can I help at home?", note: "Parent support question." },
  { id: "p62", category: "Teacher", fr: "Pouvez-vous répéter, s'il vous plaît?", en: "Can you repeat, please?", note: "Adult conversation phrase." }
];

const WEEK_PLAN = [
  {
    id: 1,
    title: "Sounds, greetings, and confidence",
    goal: "Build a daily French habit and get comfortable hearing yourself speak.",
    days: [
      day("Bonjour and ça va", "Use a tiny greeting routine without translating every word.", [1, 2, 3], "Trade one Bonjour and one ça va at breakfast.", "Repeat the three greetings from memory."),
      day("Listen before speaking", "Hear the rhythm of French and copy whole phrases.", [6, 7, 19], "Use Répète après moi with one silly word or name.", "Play each phrase twice, then say it once without audio."),
      day("Starting practice", "Begin a session warmly and briefly.", [4, 5, 20], "Say Bonne journée before school or another morning goodbye.", "Match each French phrase to its English meaning."),
      day("School politeness", "Practise s'il te plaît and merci inside useful sentences.", [6, 7, 62], "Ask each other to repeat one word politely.", "Listen for the soft final sounds."),
      day("Week 1 review", "Mix greetings, praise, and polite requests.", [1, 2, 5, 20], "Let your child be the teacher for one phrase.", "Review all Week 1 phrases aloud.")
    ]
  },
  {
    id: 2,
    title: "Classroom instructions",
    goal: "Understand simple Grade 1 instructions and reuse them at home.",
    days: [
      day("Listen and repeat", "Recognize core classroom verbs.", [6, 7, 8], "Play teacher for 60 seconds using Écoute and Répète.", "Sort phrases into listen, speak, and action."),
      day("Sitting and lining up", "Connect instructions to body movement.", [9, 11, 12], "Act out one phrase together before leaving home.", "Say the phrase, then do the action."),
      day("Backpack and materials", "Use school routines in French.", [10, 17, 47], "Ask As-tu ton sac? once during the morning routine.", "Cover the English and recall the French."),
      day("Asking for help", "Model that not understanding is normal.", [13, 14, 35], "Say Je ne comprends pas encore when something is tricky.", "Practise the help phrase slowly."),
      day("Week 2 review", "Combine instructions with polite requests.", [6, 8, 12, 14], "Choose one classroom phrase for the weekend.", "Review due flashcards before new words.")
    ]
  },
  {
    id: 3,
    title: "Home routines in French",
    goal: "Make French useful during the school morning and bedtime.",
    days: [
      day("Getting ready", "Use French for one predictable morning cue.", [15, 16, 17], "Use one French sentence during shoes or backpack time.", "Recall the morning phrases in order."),
      day("Tiny reading routine", "Make French books feel familiar even when you are a beginner.", [18, 39, 42], "Read one picture-book page and point to images.", "Say the book phrases with the audio."),
      day("Encouragement", "Praise effort and repetition.", [19, 20, 43], "Use Très bon effort after any attempt at French.", "Review praise phrases without looking."),
      day("Before and after school", "Connect routines to warm check-ins.", [2, 5, 15], "Ask Comment ça va? after school and accept any answer.", "Practise question intonation."),
      day("Week 3 review", "Keep home French brief and predictable.", [16, 17, 18, 20], "Pick one permanent household French phrase.", "Review all routines from memory.")
    ]
  },
  {
    id: 4,
    title: "Calendar, weather, and numbers",
    goal: "Follow common calendar talk used in early immersion classrooms.",
    days: [
      day("Today and tomorrow", "Say a simple date pattern.", [21, 25, 4], "Swap in the real weekday at breakfast.", "Recall lundi and mardi with the audio."),
      day("Weather talk", "Ask and answer about weather.", [22, 23, 24], "Look outside and choose one weather sentence.", "Listen for the l in pleut."),
      day("Counting rhythm", "Build number confidence through sound.", [45, 46, 50], "Count five toys or stairs in French.", "Say the numbers without looking."),
      day("Math at the table", "Use count and how many in simple play.", [45, 48, 50], "Draw three circles and count them.", "Match command phrases to actions."),
      day("Week 4 review", "Mix calendar, weather, and numbers.", [21, 22, 46, 50], "Make a one-minute weather report.", "Review due cards plus one number phrase.")
    ]
  },
  {
    id: 5,
    title: "Lunch, snacks, and preferences",
    goal: "Use school lunch vocabulary and preference phrases.",
    days: [
      day("Hungry and thirsty", "Recognize basic need phrases.", [26, 27, 35], "Ask whether everyone is hungry or thirsty at snack time.", "Recall J'ai faim and J'ai soif."),
      day("Lunch box language", "Use French for packing and finding food.", [28, 29, 47], "Name one lunch item in French if you know it.", "Listen for the nasal sound in dans."),
      day("Likes and dislikes", "Keep preferences simple and respectful.", [30, 31, 32], "Ask if a food is liked without correcting the answer.", "Cover English and recall both preference phrases."),
      day("Asking questions", "Use Veux-tu and Est-ce que patterns.", [28, 32, 62], "Offer one snack with Veux-tu...?", "Review question phrases aloud."),
      day("Week 5 review", "Combine needs, lunch, and preferences.", [26, 27, 29, 30, 31], "Pack lunch with one French sentence.", "Review food phrases with flashcards.")
    ]
  },
  {
    id: 6,
    title: "Backpack, clothes, and school supplies",
    goal: "Support school readiness with practical nouns and commands.",
    days: [
      day("Backpack check", "Use the same French prompt each morning.", [10, 17, 47], "Ask about the backpack and pencil.", "Recall sac and crayon."),
      day("Shoes and leaving", "Connect French commands to action.", [15, 16, 5], "Use Mets tes chaussures once before leaving.", "Say each command while doing it."),
      day("Drawing commands", "Use schoolwork verbs calmly.", [48, 49, 50], "Draw and colour one shape together.", "Match colour and shape commands."),
      day("Finding things", "Practise Où est...? with real objects.", [47, 17, 14], "Hide a pencil and ask Où est ton crayon?", "Review question rhythm."),
      day("Week 6 review", "Blend routines and school supplies.", [10, 16, 47, 48, 49], "Run a two-minute French backpack check.", "Review the supply phrases.")
    ]
  },
  {
    id: 7,
    title: "Feelings, needs, and comfort",
    goal: "Learn language that helps a child name needs and ask for help.",
    days: [
      day("Feelings check-in", "Use simple emotion sentences.", [33, 34, 56], "Ask Ça va? and offer two possible answers.", "Recall fatigué and content."),
      day("Help and bathroom", "Prioritize high-value school survival phrases.", [35, 36, 14], "Practise J'ai besoin d'aide once, no pressure.", "Say the bathroom phrase slowly."),
      day("Pain and care", "Recognize when something hurts.", [37, 56, 38], "Use Respire doucement during a small frustration.", "Review care phrases with audio."),
      day("Not yet", "Model persistence when French feels hard.", [13, 20, 35], "Say Je ne comprends pas encore about your own learning.", "Review the not-yet phrase from memory."),
      day("Week 7 review", "Combine needs, feelings, and reassurance.", [33, 35, 36, 37, 38], "Choose one comfort phrase to keep using.", "Review due cards before new phrases.")
    ]
  },
  {
    id: 8,
    title: "Reading together",
    goal: "Support early literacy with picture walks, not translation pressure.",
    days: [
      day("Picture walk", "Ask about images before reading.", [39, 41, 42], "Look at one French book page and say what you see.", "Listen for image and page."),
      day("Words and pointing", "Use show-me language.", [40, 41, 43], "Ask Montre-moi le mot for one visible word.", "Review reading questions."),
      day("Shared reading", "Read tiny chunks together.", [18, 43, 19], "Read one line or one page together.", "Say Encore une fois after one sentence."),
      day("Book reactions", "React to stories in simple French.", [44, 30, 31], "Say whether a page is funny or liked.", "Match reactions to meanings."),
      day("Week 8 review", "Make reading warm, short, and repeatable.", [39, 40, 41, 42, 43], "Do a two-minute picture walk.", "Review all reading phrases.")
    ]
  },
  {
    id: 9,
    title: "Play, friends, and sharing",
    goal: "Use French for turn-taking, invitations, and repair.",
    days: [
      day("Taking turns", "Practise mon tour and ton tour.", [51, 52, 12], "Use turn-taking phrases in a board game or toy game.", "Recall whose turn is whose."),
      day("Sharing", "Use a short social phrase.", [53, 20, 56], "Say On partage during a shared activity.", "Listen and repeat slowly."),
      day("Inviting play", "Use a friendly invitation.", [54, 52, 4], "Invite your child to play with Viens jouer.", "Review invite and turn phrases."),
      day("Repair language", "Practise sorry and checking in.", [55, 56, 38], "Model Je suis désolé after a tiny mistake.", "Say désolé carefully."),
      day("Week 9 review", "Combine turn-taking and care phrases.", [51, 52, 53, 55, 56], "Play one short game using French turns.", "Review social phrases.")
    ]
  },
  {
    id: 10,
    title: "Simple schoolwork support",
    goal: "Help with early tasks without needing to teach the curriculum.",
    days: [
      day("Count and compare", "Use counting to support math confidence.", [45, 46, 50], "Count five objects and ask how many.", "Review numbers by sound."),
      day("Shapes and colour", "Use basic command language.", [48, 49, 40], "Draw and colour one simple shape.", "Recall cercle and rouge."),
      day("Reading a worksheet", "Use look, show, and help phrases.", [39, 40, 35], "Ask your child to show one word or picture.", "Review help and reading phrases."),
      day("Effort over correctness", "Keep support emotionally steady.", [20, 13, 19], "Praise effort after one school task.", "Recall the encouragement phrases."),
      day("Week 10 review", "Blend math, reading, and encouragement.", [45, 48, 49, 50, 20], "Do one five-minute school-style activity.", "Review schoolwork phrases.")
    ]
  },
  {
    id: 11,
    title: "Parent-teacher communication",
    goal: "Prepare a few respectful phrases for school communication.",
    days: [
      day("Introducing the context", "Name French immersion clearly.", [57, 60, 61], "Write one sentence you could send to the teacher.", "Listen to the longer parent phrases."),
      day("Asking for weekly words", "Request vocabulary without overloading the teacher.", [58, 59, 60], "Save one phrase for a future email.", "Repeat the question phrase slowly."),
      day("Asking how to help", "Use a supportive, open question.", [61, 58, 35], "Choose one question you would actually use.", "Review parent communication phrases."),
      day("Clarifying politely", "Ask for repetition in adult conversation.", [62, 13, 60], "Practise Pouvez-vous répéter with the audio.", "Recall the polite repeat phrase."),
      day("Week 11 review", "Build a small parent-teacher phrase bank.", [57, 58, 59, 60, 61, 62], "Draft one short message in English with one French phrase.", "Review all teacher phrases.")
    ]
  },
  {
    id: 12,
    title: "Review and family routine",
    goal: "Choose the French routines that are worth keeping.",
    days: [
      day("Top ten phrases", "Select the most useful phrases for your family.", [1, 5, 14, 20, 35], "Pick three phrases for the fridge or a note.", "Review high-value survival phrases."),
      day("Morning routine review", "Keep a simple school-morning script.", [15, 16, 17, 5], "Run the morning script once.", "Recall the script without audio."),
      day("Reading routine review", "Keep books light and social.", [18, 39, 41, 43], "Read or picture-walk one page.", "Review reading phrases."),
      day("Child-led French", "Let your child teach and correct gently.", [7, 19, 20, 56], "Ask your child to teach one word from school.", "Review listen-repeat-praise phrases."),
      day("Program close", "Set your ongoing weekly rhythm.", [1, 14, 20, 35, 60], "Choose a 10-minute French slot for next week.", "Review the final due flashcards.")
    ]
  }
];

function day(title, focus, phraseIds, activity, review) {
  return { title, focus, phraseIds: phraseIds.map((id) => `p${String(id).padStart(2, "0")}`), activity, review };
}

let state = loadState();
let voices = [];

document.addEventListener("DOMContentLoaded", () => {
  bindEvents();
  loadVoices();
  renderAll();
});

function bindEvents() {
  document.addEventListener("click", (event) => {
    const speakButton = event.target.closest("[data-speak]");
    if (speakButton) {
      speak(speakButton.dataset.speak);
      return;
    }

    const categoryButton = event.target.closest("[data-category]");
    if (categoryButton) {
      state.phraseCategory = categoryButton.dataset.category;
      saveState();
      renderPhrasebook();
      return;
    }

    const targetTab = event.target.closest("[data-view-target]");
    if (targetTab) {
      switchView(targetTab.dataset.viewTarget);
      return;
    }

    const actionButton = event.target.closest("[data-action]");
    if (!actionButton) return;

    const action = actionButton.dataset.action;
    if (action === "start-today") switchView("today");
    if (action === "open-guide") openGuide();
    if (action === "close-guide") closeGuide();
    if (action === "guide-open") openGuideView(actionButton.dataset.guideView);
    if (action === "print-plan") window.print();
    if (action === "complete-day") completeCurrentDay();
    if (action === "reset-progress") showResetDialog();
    if (action === "start-day") startDay(actionButton.dataset.dayKey);
    if (action === "reveal-card") revealCard();
    if (action === "speak-card") speakCurrentCard();
    if (action === "again-card") rateCard(false);
    if (action === "know-card") rateCard(true);
  });

  document.addEventListener("change", (event) => {
    const checkbox = event.target.closest("[data-task]");
    if (!checkbox) return;

    const current = getCurrentDay();
    const key = dayKey(current.week.id, current.dayIndex);
    const tasks = state.completedTasks[key] || {};
    tasks[checkbox.dataset.task] = checkbox.checked;
    state.completedTasks[key] = tasks;
    if (isTaskSetComplete(tasks)) state.selectedDayKey = getNextIncompleteKey(key);
    saveState();
    renderAll();
  });

  document.getElementById("phrase-search").addEventListener("input", (event) => {
    state.phraseSearch = event.target.value;
    saveState();
    renderPhrasebook();
  });

  document.getElementById("flashcard").addEventListener("click", revealCard);
  document.getElementById("flashcard").addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      revealCard();
    }
  });

  const resetDialog = document.getElementById("reset-dialog");
  resetDialog.addEventListener("close", () => {
    if (resetDialog.returnValue !== "confirm") return;
    state = defaultState();
    saveState();
    renderAll();
  });
}

function loadVoices() {
  if (!("speechSynthesis" in window)) return;
  voices = window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
  };
}

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? { ...defaultState(), ...JSON.parse(stored) } : defaultState();
  } catch {
    return defaultState();
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Local progress is optional; the app still works without storage.
  }
}

function defaultState() {
  return {
    activeView: "today",
    selectedDayKey: null,
    completedTasks: {},
    flashcards: {},
    currentCardId: null,
    revealed: false,
    phraseCategory: "All",
    phraseSearch: ""
  };
}

function renderAll() {
  renderTabs();
  renderToday();
  renderProgram();
  renderPhrasebook();
  renderFlashcard();
}

function switchView(view) {
  state.activeView = view;
  saveState();
  renderTabs();
  document.querySelectorAll(".view").forEach((section) => {
    section.classList.toggle("active", section.dataset.view === view);
  });
  document.getElementById(`view-${view}`).scrollIntoView({ block: "start" });
}

function renderTabs() {
  document.querySelectorAll("[data-view-target]").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.viewTarget === state.activeView);
  });
  document.querySelectorAll(".view").forEach((section) => {
    section.classList.toggle("active", section.dataset.view === state.activeView);
  });
}

function renderToday() {
  const current = getCurrentDay();
  const { week, dayData, dayIndex } = current;
  const key = dayKey(week.id, dayIndex);
  const tasks = state.completedTasks[key] || {};

  document.getElementById("lesson-meta").textContent = `Week ${week.id} · Day ${dayIndex + 1}`;
  document.getElementById("lesson-title").textContent = dayData.title;
  document.getElementById("lesson-focus").textContent = dayData.focus;
  document.getElementById("child-moment").textContent = dayData.activity;
  document.getElementById("parent-note").textContent = `${week.title}: ${week.goal}`;

  const taskRows = [
    { key: "lesson", label: "Lesson", detail: dayData.focus },
    { key: "listen", label: "Listen", detail: "Repeat the key phrases aloud." },
    { key: "review", label: "Review", detail: dayData.review },
    { key: "child", label: "Child moment", detail: dayData.activity }
  ];

  document.getElementById("daily-checklist").innerHTML = taskRows.map((task) => `
    <label class="check-item">
      <input type="checkbox" data-task="${task.key}" ${tasks[task.key] ? "checked" : ""}>
      <span>
        <strong>${escapeHtml(task.label)}</strong>
        <span>${escapeHtml(task.detail)}</span>
      </span>
    </label>
  `).join("");

  document.getElementById("today-phrases").innerHTML = dayData.phraseIds
    .map((id) => renderPhraseItem(findPhrase(id), false))
    .join("");

  const completedDays = countCompletedDays();
  const totalDays = getAllDays().length;
  document.getElementById("completed-days").textContent = completedDays;
  document.getElementById("total-days").textContent = totalDays;
  document.getElementById("overall-progress").style.width = `${Math.round((completedDays / totalDays) * 100)}%`;
}

function renderProgram() {
  document.getElementById("week-list").innerHTML = WEEK_PLAN.map((week) => {
    const completed = week.days.filter((_, index) => isDayComplete(dayKey(week.id, index))).length;
    const firstOpen = week.days.findIndex((_, index) => !isDayComplete(dayKey(week.id, index)));
    const startIndex = firstOpen === -1 ? 0 : firstOpen;
    const days = week.days.map((dayData, index) => {
      const key = dayKey(week.id, index);
      const complete = isDayComplete(key);
      return `<button class="day-pill ${complete ? "complete" : ""}" type="button" data-action="start-day" data-day-key="${key}">Day ${index + 1}</button>`;
    }).join("");

    return `
      <article class="week-card">
        <div>
          <h3>Week ${week.id}: ${escapeHtml(week.title)}</h3>
          <p>${escapeHtml(week.goal)}</p>
          <div class="day-strip">${days}</div>
        </div>
        <div class="week-actions">
          <div class="week-progress">${completed}/5 done</div>
          <button class="button secondary" type="button" data-action="start-day" data-day-key="${dayKey(week.id, startIndex)}">Open</button>
        </div>
      </article>
    `;
  }).join("");
}

function renderPhrasebook() {
  const categories = ["All", ...new Set(PHRASES.map((phrase) => phrase.category))];
  document.getElementById("phrase-categories").innerHTML = categories.map((category) => `
    <button class="category-button ${state.phraseCategory === category ? "active" : ""}" type="button" data-category="${escapeHtml(category)}">
      ${escapeHtml(category)}
    </button>
  `).join("");

  const searchInput = document.getElementById("phrase-search");
  if (searchInput.value !== state.phraseSearch) searchInput.value = state.phraseSearch;

  const query = state.phraseSearch.trim().toLowerCase();
  const results = PHRASES.filter((phrase) => {
    const inCategory = state.phraseCategory === "All" || phrase.category === state.phraseCategory;
    const haystack = `${phrase.fr} ${phrase.en} ${phrase.note} ${phrase.category}`.toLowerCase();
    return inCategory && (!query || haystack.includes(query));
  });

  document.getElementById("phrase-results").innerHTML = results.length
    ? results.map((phrase) => renderPhraseItem(phrase, true)).join("")
    : `<p class="plain-copy">No matching phrases.</p>`;
}

function renderFlashcard() {
  const due = getDueCards();
  document.getElementById("due-count").textContent = due.length;

  if (!due.length) {
    state.currentCardId = null;
    state.revealed = false;
    document.getElementById("card-category").textContent = "Review";
    document.getElementById("card-front").textContent = "All caught up";
    document.getElementById("card-back").textContent = "Come back tomorrow or use the phrasebook.";
    document.getElementById("card-back").classList.remove("hidden");
    setFlashcardButtonsDisabled(true);
    return;
  }

  if (!state.currentCardId || !due.some((phrase) => phrase.id === state.currentCardId)) {
    state.currentCardId = due[0].id;
    state.revealed = false;
    saveState();
  }

  const card = findPhrase(state.currentCardId);
  const record = getCardRecord(card.id);
  document.getElementById("card-category").textContent = `${card.category} · Box ${record.box}`;
  document.getElementById("card-front").textContent = card.fr;
  document.getElementById("card-back").textContent = `${card.en} ${card.note ? `- ${card.note}` : ""}`;
  document.getElementById("card-back").classList.toggle("hidden", !state.revealed);
  document.getElementById("flashcard").setAttribute("aria-pressed", String(state.revealed));
  setFlashcardButtonsDisabled(false);
}

function renderPhraseItem(phrase, showCategory) {
  if (!phrase) return "";
  return `
    <article class="phrase-item">
      <div class="phrase-text">
        <p class="phrase-fr">${escapeHtml(phrase.fr)}</p>
        <p class="phrase-en">${escapeHtml(phrase.en)}</p>
        ${showCategory ? `<p class="phrase-note">${escapeHtml(phrase.category)} · ${escapeHtml(phrase.note)}</p>` : `<p class="phrase-note">${escapeHtml(phrase.note)}</p>`}
      </div>
      <button class="button secondary" type="button" data-speak="${escapeHtml(phrase.fr)}">
        <span aria-hidden="true">&#9835;</span>
        Listen
      </button>
    </article>
  `;
}

function completeCurrentDay() {
  const current = getCurrentDay();
  const key = dayKey(current.week.id, current.dayIndex);
  state.completedTasks[key] = {
    lesson: true,
    listen: true,
    review: true,
    child: true
  };
  state.selectedDayKey = getNextIncompleteKey(key);
  saveState();
  renderAll();
}

function startDay(key) {
  state.selectedDayKey = key;
  saveState();
  switchView("today");
  renderToday();
}

function showResetDialog() {
  const dialog = document.getElementById("reset-dialog");
  if (typeof dialog.showModal === "function") dialog.showModal();
  else if (confirm("Reset progress?")) {
    state = defaultState();
    saveState();
    renderAll();
  }
}

function openGuide() {
  const dialog = document.getElementById("guide-dialog");
  if (typeof dialog.showModal === "function" && !dialog.open) dialog.showModal();
  else dialog.setAttribute("open", "");
}

function closeGuide() {
  const dialog = document.getElementById("guide-dialog");
  if (typeof dialog.close === "function") dialog.close();
  else dialog.removeAttribute("open");
}

function openGuideView(view) {
  closeGuide();
  switchView(view);
}

function revealCard() {
  if (!state.currentCardId) return;
  state.revealed = true;
  saveState();
  renderFlashcard();
}

function speakCurrentCard() {
  if (!state.currentCardId) return;
  speak(findPhrase(state.currentCardId).fr);
}

function rateCard(known) {
  if (!state.currentCardId) return;

  const id = state.currentCardId;
  const record = getCardRecord(id);
  const nextBox = known ? Math.min(record.box + 1, 5) : 1;
  const intervals = { 1: 0, 2: 1, 3: 3, 4: 7, 5: 14 };

  state.flashcards[id] = {
    box: nextBox,
    due: addDays(todayKey(), intervals[nextBox]),
    seen: record.seen + 1,
    correct: record.correct + (known ? 1 : 0)
  };

  const next = getDueCards().find((phrase) => phrase.id !== id) || getDueCards()[0];
  state.currentCardId = next ? next.id : null;
  state.revealed = false;
  saveState();
  renderFlashcard();
}

function setFlashcardButtonsDisabled(disabled) {
  ["speak-card", "reveal-card", "again-card", "know-card"].forEach((action) => {
    const button = document.querySelector(`[data-action="${action}"]`);
    if (button) button.disabled = disabled;
  });
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  const utterance = new SpeechSynthesisUtterance(text);
  const canadianVoice = voices.find((voice) => voice.lang.toLowerCase().startsWith("fr-ca"));
  const frenchVoice = voices.find((voice) => voice.lang.toLowerCase().startsWith("fr"));
  utterance.voice = canadianVoice || frenchVoice || null;
  utterance.lang = utterance.voice ? utterance.voice.lang : "fr-CA";
  utterance.rate = 0.86;
  utterance.pitch = 1;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function getCurrentDay() {
  if (state.selectedDayKey) {
    const selected = findDayByKey(state.selectedDayKey);
    if (selected) return selected;
  }

  return getAllDays().find((item) => !isDayComplete(dayKey(item.week.id, item.dayIndex))) || getAllDays()[getAllDays().length - 1];
}

function getAllDays() {
  return WEEK_PLAN.flatMap((week) => week.days.map((dayData, dayIndex) => ({ week, dayData, dayIndex })));
}

function findDayByKey(key) {
  return getAllDays().find((item) => dayKey(item.week.id, item.dayIndex) === key);
}

function getNextIncompleteKey(currentKey) {
  const allDays = getAllDays();
  const currentIndex = allDays.findIndex((item) => dayKey(item.week.id, item.dayIndex) === currentKey);
  const ordered = [...allDays.slice(currentIndex + 1), ...allDays.slice(0, currentIndex + 1)];
  const next = ordered.find((item) => !isDayComplete(dayKey(item.week.id, item.dayIndex)));
  return next ? dayKey(next.week.id, next.dayIndex) : currentKey;
}

function dayKey(weekId, dayIndex) {
  return `w${weekId}d${dayIndex + 1}`;
}

function isDayComplete(key) {
  return isTaskSetComplete(state.completedTasks[key] || {});
}

function isTaskSetComplete(tasks) {
  return ["lesson", "listen", "review", "child"].every((task) => tasks[task]);
}

function countCompletedDays() {
  return getAllDays().filter((item) => isDayComplete(dayKey(item.week.id, item.dayIndex))).length;
}

function findPhrase(id) {
  return PHRASES.find((phrase) => phrase.id === id);
}

function getDueCards() {
  const today = todayKey();
  return PHRASES
    .filter((phrase) => getCardRecord(phrase.id).due <= today)
    .sort((a, b) => {
      const recordA = getCardRecord(a.id);
      const recordB = getCardRecord(b.id);
      if (recordA.due !== recordB.due) return recordA.due.localeCompare(recordB.due);
      return recordA.box - recordB.box || a.id.localeCompare(b.id);
    });
}

function getCardRecord(id) {
  return state.flashcards[id] || {
    box: 1,
    due: todayKey(),
    seen: 0,
    correct: 0
  };
}

function todayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const dayNumber = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${dayNumber}`;
}

function addDays(dateKey, days) {
  const [year, month, dayNumber] = dateKey.split("-").map(Number);
  const date = new Date(year, month - 1, dayNumber);
  date.setDate(date.getDate() + days);
  const nextYear = date.getFullYear();
  const nextMonth = String(date.getMonth() + 1).padStart(2, "0");
  const nextDay = String(date.getDate()).padStart(2, "0");
  return `${nextYear}-${nextMonth}-${nextDay}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
