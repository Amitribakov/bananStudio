// Space Mission — an educational hackathon project about space exploration,
// built as a student team project for a school hackathon.

const gameData = {
  mysteryPlanetImage: "images/mystery_planet.jpg",
  victoryStarImage: "images/victory_star.jpg",
  ui: {
    en: {
      headerLabel: "Educational Hackathon Project",
      headerTitle: "Space Mission",
      languageLabel: "Language",
      themeLabel: "Theme",
      dark: "Dark",
      light: "Light",
      startEyebrow: "Student Team · School Hackathon 2026",
      startTitle: "Space Mission",
      startCredit: "Created by Banana Studio",
      startText: "Welcome! This is an interactive learning game about space exploration, built by a student team for a school hackathon. Explore all 8 planets, answer questions, and see how far your mission can go!",
      briefTitle: "How to Play",
      briefText: "Visit all 8 planets in order. Answer each question correctly to move forward. A wrong answer restarts the mission from the beginning — so think carefully before you choose!",
      startButton: "Launch Mission",
      score: "Score",
      fuel: "Fuel",
      progress: "Progress",
      currentPlanet: "Current Planet",
      unknownPlanet: "Unknown Planet",
      missionMessage: "You reached the next checkpoint. Answer the question correctly to move on.",
      chooseAnswer: "Choose an answer to continue the mission.",
      next: "Next Planet",
      results: "See Results",
      retry: "Restart Mission",
      missionComplete: "Mission Complete",
      finalScore: "Final Score",
      fuelLeft: "Fuel Left",
      restart: "Restart Mission",
      footerMessage: "Space Mission by Banana Studio 🍌 · Built for a School Hackathon 2026",
      footerCredit: "Educational space mission project · Created by Banana Studio",
      successTitle: "Mission Success!",
      successMessage: "Amazing work! You completed all 8 planet checkpoints and finished the full space mission.",
      victoryTitle: "Mission Accomplished!",
      victorySubtitle: "You explored all 8 planets in the Solar System.",
      playAgain: "Play Again",
      feedbackButton: "Feedback",
      feedbackTitle: "Send Feedback",
      feedbackPlaceholder: "Tell us what you think about Space Mission...",
      feedbackSend: "Send",
      feedbackCancel: "Cancel",
      feedbackThanks: "Thanks for the feedback! 🍌",
    },
    he: {
      headerLabel: "פרויקט האקתון חינוכי",
      headerTitle: "משימת חלל",
      languageLabel: "שפה",
      themeLabel: "ערכת נושא",
      dark: "כהה",
      light: "בהיר",
      startEyebrow: "קבוצת תלמידים · האקתון בית ספרי 2026",
      startTitle: "משימת חלל",
      startCredit: "נוצר על ידי Banana Studio",
      startText: "ברוכים הבאים! זהו משחק לימודי אינטראקטיבי בנושא חקר החלל, שנבנה על ידי קבוצת תלמידים במסגרת האקתון בית ספרי. חקרו את כל 8 כוכבי הלכת, ענו על שאלות ובדקו עד כמה המשימה שלכם תצליח!",
      briefTitle: "איך משחקים",
      briefText: "עוברים את כל 8 כוכבי הלכת לפי הסדר. ענו נכון על כל שאלה כדי להמשיך קדימה. תשובה שגויה מחזירה את המשימה לתחילה — אז חשבו היטב לפני שבוחרים!",
      startButton: "הפעל משימה",
      score: "ניקוד",
      fuel: "דלק",
      progress: "התקדמות",
      currentPlanet: "כוכב נוכחי",
      unknownPlanet: "כוכב מסתורי",
      missionMessage: "הגעתם לנקודת הבדיקה הבאה. ענו נכון על השאלה כדי להמשיך.",
      chooseAnswer: "בחרו תשובה כדי להמשיך במשימה.",
      next: "לכוכב הבא",
      results: "למסך התוצאות",
      retry: "התחל משימה מחדש",
      missionComplete: "המשימה הושלמה",
      finalScore: "ניקוד סופי",
      fuelLeft: "דלק שנשאר",
      restart: "התחל מחדש",
      footerMessage: "משימת חלל מבית Banana Studio 🍌 · נבנה עבור האקתון בית ספרי 2026",
      footerCredit: "פרויקט חינוכי בנושא חקר החלל · נוצר על ידי Banana Studio",
      successTitle: "המשימה הצליחה!",
      successMessage: "כל הכבוד! השלמתם את כל 8 תחנות כוכבי הלכת וסיימתם את מלוא משימת החלל.",
      victoryTitle: "המשימה הושלמה!",
      victorySubtitle: "חקרתם את כל 8 כוכבי הלכת במערכת השמש.",
      playAgain: "שחקו שוב",
      feedbackButton: "משוב",
      feedbackTitle: "שלחו משוב",
      feedbackPlaceholder: "ספרו לנו מה אתם חושבים על משימת חלל...",
      feedbackSend: "שלח",
      feedbackCancel: "ביטול",
      feedbackThanks: "תודה על המשוב! 🍌",
    },
  },
  planets: [
    {
      image: "images/mercury.jpg",
      en: {
        name: "Mercury",
        question: "Which planet is closest to the Sun?",
        answers: ["Mercury", "Venus", "Earth", "Mars"],
        correctAnswer: "Mercury",
        correctText: "Correct! Mercury is the closest planet to the Sun.",
        wrongText: "Mission failed. The correct answer is Mercury. Press restart to try again from planet 1.",
      },
      he: {
        name: "כוכב חמה",
        question: "איזה כוכב לכת הוא הקרוב ביותר לשמש?",
        answers: ["כוכב חמה", "נוגה", "כדור הארץ", "מאדים"],
        correctAnswer: "כוכב חמה",
        correctText: "נכון! כוכב חמה הוא כוכב הלכת הקרוב ביותר לשמש.",
        wrongText: "המשימה נכשלה. התשובה הנכונה היא כוכב חמה. לחצו על הכפתור כדי להתחיל מכוכב 1.",
      },
    },
    {
      image: "images/venus.jpg",
      en: {
        name: "Venus",
        question: "Which planet is the hottest in our solar system?",
        answers: ["Venus", "Saturn", "Mars", "Uranus"],
        correctAnswer: "Venus",
        correctText: "Correct! Venus is the hottest planet in our solar system.",
        wrongText: "Mission failed. The correct answer is Venus. Press restart to try again from planet 1.",
      },
      he: {
        name: "נוגה",
        question: "איזה כוכב לכת הוא החם ביותר במערכת השמש?",
        answers: ["נוגה", "שבתאי", "מאדים", "אורנוס"],
        correctAnswer: "נוגה",
        correctText: "נכון! נוגה הוא כוכב הלכת החם ביותר במערכת השמש.",
        wrongText: "המשימה נכשלה. התשובה הנכונה היא נוגה. לחצו על הכפתור כדי להתחיל מכוכב 1.",
      },
    },
    {
      image: "images/earth.jpg",
      en: {
        name: "Earth",
        question: "Which planet is known as our home planet?",
        answers: ["Mars", "Earth", "Venus", "Neptune"],
        correctAnswer: "Earth",
        correctText: "Correct! Earth is our home planet.",
        wrongText: "Mission failed. The correct answer is Earth. Press restart to try again from planet 1.",
      },
      he: {
        name: "כדור הארץ",
        question: "איזה כוכב לכת הוא הבית שלנו?",
        answers: ["מאדים", "כדור הארץ", "נוגה", "נפטון"],
        correctAnswer: "כדור הארץ",
        correctText: "נכון! כדור הארץ הוא הבית שלנו.",
        wrongText: "המשימה נכשלה. התשובה הנכונה היא כדור הארץ. לחצו על הכפתור כדי להתחיל מכוכב 1.",
      },
    },
    {
      image: "images/mars.jpg",
      en: {
        name: "Mars",
        question: "Which planet is known as the Red Planet?",
        answers: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswer: "Mars",
        correctText: "Correct! Mars is known as the Red Planet.",
        wrongText: "Mission failed. The correct answer is Mars. Press restart to try again from planet 1.",
      },
      he: {
        name: "מאדים",
        question: "איזה כוכב לכת נקרא הכוכב האדום?",
        answers: ["מאדים", "נוגה", "צדק", "שבתאי"],
        correctAnswer: "מאדים",
        correctText: "נכון! מאדים נקרא הכוכב האדום.",
        wrongText: "המשימה נכשלה. התשובה הנכונה היא מאדים. לחצו על הכפתור כדי להתחיל מכוכב 1.",
      },
    },
    {
      image: "images/jupiter.jpg",
      en: {
        name: "Jupiter",
        question: "Which planet is the largest in our solar system?",
        answers: ["Earth", "Jupiter", "Mercury", "Mars"],
        correctAnswer: "Jupiter",
        correctText: "Great job! Jupiter is the largest planet in our solar system.",
        wrongText: "Mission failed. The correct answer is Jupiter. Press restart to try again from planet 1.",
      },
      he: {
        name: "צדק",
        question: "איזה כוכב לכת הוא הגדול ביותר במערכת השמש?",
        answers: ["כדור הארץ", "צדק", "כוכב חמה", "מאדים"],
        correctAnswer: "צדק",
        correctText: "מעולה! צדק הוא כוכב הלכת הגדול ביותר במערכת השמש.",
        wrongText: "המשימה נכשלה. התשובה הנכונה היא צדק. לחצו על הכפתור כדי להתחיל מכוכב 1.",
      },
    },
    {
      image: "images/saturn.jpg",
      en: {
        name: "Saturn",
        question: "Which planet is best known for its large rings?",
        answers: ["Venus", "Mars", "Saturn", "Neptune"],
        correctAnswer: "Saturn",
        correctText: "Excellent! Saturn is famous for its spectacular rings.",
        wrongText: "Mission failed. The correct answer is Saturn. Press restart to try again from planet 1.",
      },
      he: {
        name: "שבתאי",
        question: "איזה כוכב לכת ידוע בזכות הטבעות הגדולות שלו?",
        answers: ["נוגה", "מאדים", "שבתאי", "נפטון"],
        correctAnswer: "שבתאי",
        correctText: "מצוין! שבתאי ידוע בזכות הטבעות המרהיבות שלו.",
        wrongText: "המשימה נכשלה. התשובה הנכונה היא שבתאי. לחצו על הכפתור כדי להתחיל מכוכב 1.",
      },
    },
    {
      image: "images/uranus.jpg",
      en: {
        name: "Uranus",
        question: "Which planet spins on its side?",
        answers: ["Uranus", "Earth", "Mars", "Mercury"],
        correctAnswer: "Uranus",
        correctText: "Correct! Uranus is unique because it spins on its side.",
        wrongText: "Mission failed. The correct answer is Uranus. Press restart to try again from planet 1.",
      },
      he: {
        name: "אורנוס",
        question: "איזה כוכב לכת מסתובב על הצד?",
        answers: ["אורנוס", "כדור הארץ", "מאדים", "כוכב חמה"],
        correctAnswer: "אורנוס",
        correctText: "נכון! אורנוס מיוחד כי הוא מסתובב על הצד.",
        wrongText: "המשימה נכשלה. התשובה הנכונה היא אורנוס. לחצו על הכפתור כדי להתחיל מכוכב 1.",
      },
    },
    {
      image: "images/neptune.jpg",
      en: {
        name: "Neptune",
        question: "Which planet is farthest from the Sun?",
        answers: ["Saturn", "Jupiter", "Neptune", "Earth"],
        correctAnswer: "Neptune",
        correctText: "Correct! Neptune is the farthest planet from the Sun.",
        wrongText: "Mission failed. The correct answer is Neptune. Press restart to try again from planet 1.",
      },
      he: {
        name: "נפטון",
        question: "איזה כוכב לכת הוא הרחוק ביותר מהשמש?",
        answers: ["שבתאי", "צדק", "נפטון", "כדור הארץ"],
        correctAnswer: "נפטון",
        correctText: "נכון! נפטון הוא כוכב הלכת הרחוק ביותר מהשמש.",
        wrongText: "המשימה נכשלה. התשובה הנכונה היא נפטון. לחצו על הכפתור כדי להתחיל מכוכב 1.",
      },
    },
  ],
};

const body = document.body;
const html = document.documentElement;

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const endScreen = document.getElementById("end-screen");
const victoryOverlay = document.getElementById("victory-overlay");

const languageSelect = document.getElementById("language-select");
const themeSelect = document.getElementById("theme-select");

const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const retryButton = document.getElementById("retry-button");
const restartButton = document.getElementById("restart-button");
const victoryButton = document.getElementById("victory-button");

const headerLabel = document.getElementById("header-label");
const headerTitle = document.getElementById("header-title");
const languageLabel = document.getElementById("language-label");
const themeLabel = document.getElementById("theme-label");
const startEyebrow = document.getElementById("start-eyebrow");
const startTitle = document.getElementById("start-title");
const startCredit = document.getElementById("start-credit");
const startText = document.getElementById("start-text");
const briefTitle = document.getElementById("brief-title");
const briefText = document.getElementById("brief-text");
const scoreLabel = document.getElementById("score-label");
const fuelLabel = document.getElementById("fuel-label");
const progressLabel = document.getElementById("progress-label");
const planetLabel = document.getElementById("planet-label");
const scoreValue = document.getElementById("score-value");
const fuelValue = document.getElementById("fuel-value");
const progressValue = document.getElementById("progress-value");
const planetName = document.getElementById("planet-name");
const planetFact = document.getElementById("planet-fact");
const planetVisual = document.getElementById("planet-visual");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const feedbackText = document.getElementById("feedback-text");
const endEyebrow = document.getElementById("end-eyebrow");
const endTitle = document.getElementById("end-title");
const endMessage = document.getElementById("end-message");
const finalScoreLabel = document.getElementById("final-score-label");
const finalFuelLabel = document.getElementById("final-fuel-label");
const finalScore = document.getElementById("final-score");
const finalFuel = document.getElementById("final-fuel");
const victoryEyebrow = document.getElementById("victory-eyebrow");
const victoryStar = document.querySelector(".victory-star");
const victoryTitle = document.getElementById("victory-title");
const victorySubtitle = document.getElementById("victory-subtitle");
const victoryScoreLabel = document.getElementById("victory-score-label");
const victoryFuelLabel = document.getElementById("victory-fuel-label");
const victoryScore = document.getElementById("victory-score");
const victoryFuel = document.getElementById("victory-fuel");
const footerMessage = document.getElementById("footer-message");
const footerCredit = document.getElementById("footer-credit");
const feedbackButton = document.getElementById("feedback-button");
const feedbackOverlay = document.getElementById("feedback-overlay");
const feedbackHeading = document.getElementById("feedback-heading");
const feedbackTextarea = document.getElementById("feedback-textarea");
const feedbackCancel = document.getElementById("feedback-cancel");
const feedbackSend = document.getElementById("feedback-send");
const feedbackThanks = document.getElementById("feedback-thanks");

let currentLanguage = "en";
let currentTheme = "dark";
let currentPlanet = 0;
let score = 0;
let fuel = 100;
let currentScreen = "start";
let answerLocked = false;
let lastAnswerCorrect = false;

languageSelect.addEventListener("change", function () {
  currentLanguage = languageSelect.value;
  applyLanguage();
});

themeSelect.addEventListener("change", function () {
  currentTheme = themeSelect.value;
  applyTheme();
});

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", goToNextPlanet);
retryButton.addEventListener("click", startGame);
restartButton.addEventListener("click", startGame);
victoryButton.addEventListener("click", startGame);
feedbackButton.addEventListener("click", openFeedback);
feedbackCancel.addEventListener("click", closeFeedback);
feedbackSend.addEventListener("click", submitFeedback);
feedbackOverlay.addEventListener("click", function (e) {
  if (e.target === feedbackOverlay || e.target.classList.contains("feedback-backdrop")) {
    closeFeedback();
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") { closeFeedback(); }
});

applyLanguage();
applyTheme();
body.classList.add("screen-" + currentScreen);

function getText() {
  return gameData.ui[currentLanguage];
}

function getPlanet() {
  return gameData.planets[currentPlanet][currentLanguage];
}

function applyLanguage() {
  const text = getText();

  html.lang = currentLanguage === "he" ? "he" : "en";
  html.dir = currentLanguage === "he" ? "rtl" : "ltr";

  headerLabel.textContent = text.headerLabel;
  headerTitle.textContent = text.headerTitle;
  languageLabel.textContent = text.languageLabel;
  themeLabel.textContent = text.themeLabel;
  themeSelect.options[0].textContent = text.dark;
  themeSelect.options[1].textContent = text.light;

  startEyebrow.textContent = text.startEyebrow;
  startTitle.textContent = text.startTitle;
  startCredit.textContent = text.startCredit;
  startText.textContent = text.startText;
  briefTitle.textContent = text.briefTitle;
  briefText.textContent = text.briefText;
  startButton.textContent = text.startButton;

  scoreLabel.textContent = text.score;
  fuelLabel.textContent = text.fuel;
  progressLabel.textContent = text.progress;
  planetLabel.textContent = text.currentPlanet;
  retryButton.textContent = text.retry;

  endEyebrow.textContent = text.missionComplete;
  finalScoreLabel.textContent = text.finalScore;
  finalFuelLabel.textContent = text.fuelLeft;
  restartButton.textContent = text.restart;
  victoryEyebrow.textContent = text.missionComplete;
  victoryTitle.textContent = text.victoryTitle;
  victorySubtitle.textContent = text.victorySubtitle;
  victoryScoreLabel.textContent = text.finalScore;
  victoryFuelLabel.textContent = text.fuelLeft;
  victoryButton.textContent = text.playAgain;
  footerMessage.textContent = text.footerMessage;
  footerCredit.textContent = text.footerCredit;
  feedbackButton.textContent = text.feedbackButton;
  feedbackHeading.textContent = text.feedbackTitle;
  feedbackTextarea.placeholder = text.feedbackPlaceholder;
  feedbackSend.textContent = text.feedbackSend;
  feedbackCancel.textContent = text.feedbackCancel;
  feedbackThanks.textContent = text.feedbackThanks;

  if (!victoryOverlay.classList.contains("hidden")) {
    updateVictoryOverlay();
  }

  if (currentScreen === "game") {
    loadPlanet();
  } else if (currentScreen === "end") {
    showEndScreen();
  } else {
    feedbackText.textContent = text.chooseAnswer;
  }
}

function applyTheme() {
  body.setAttribute("data-theme", currentTheme);
}

function setMissionEffectsActive(isActive) {
  body.classList.toggle("mission-live", isActive);
}

function showScreen(screenName) {
  currentScreen = screenName;

  body.classList.remove("screen-start", "screen-game", "screen-end");
  body.classList.add("screen-" + screenName);
  setMissionEffectsActive(screenName === "game");

  startScreen.classList.remove("active");
  gameScreen.classList.remove("active");
  endScreen.classList.remove("active");

  if (screenName === "start") startScreen.classList.add("active");
  if (screenName === "game") gameScreen.classList.add("active");
  if (screenName === "end") endScreen.classList.add("active");
}

function startGame() {
  currentPlanet = 0;
  score = 0;
  fuel = 100;
  answerLocked = false;
  lastAnswerCorrect = false;
  hideVictoryOverlay();
  sfx.launch();
  music.start();

  showScreen("game");
  updateStats();
  loadPlanet();
}

function updateStats() {
  scoreValue.textContent = score;
  fuelValue.textContent = fuel;
  progressValue.textContent = `${currentPlanet + 1} / ${gameData.planets.length}`;
}

function loadPlanet() {
  const text = getText();
  const planet = getPlanet();

  answerLocked = false;
  lastAnswerCorrect = false;

  // Mystery mode: hide the real planet name and show the mystery planet image
  planetName.textContent = text.unknownPlanet;
  planetFact.textContent = text.missionMessage;

  planetVisual.classList.remove("revealed");
  planetVisual.classList.add("mystery");
  setPlanetVisualImage(gameData.mysteryPlanetImage);

  questionText.textContent = planet.question;
  feedbackText.textContent = text.chooseAnswer;
  feedbackText.classList.remove("success-text", "error-text");

  nextButton.textContent = currentPlanet === gameData.planets.length - 1 ? text.results : text.next;
  nextButton.classList.add("hidden");
  retryButton.classList.add("hidden");
  answerButtons.innerHTML = "";

  for (let i = 0; i < planet.answers.length; i++) {
    const answer = planet.answers[i];
    const button = document.createElement("button");

    button.className = "answer-button";
    button.textContent = answer;
    button.addEventListener("click", function () {
      checkAnswer(button, answer);
    });

    answerButtons.appendChild(button);
  }

  updateStats();
  updateTrackShip(currentPlanet / gameData.planets.length);
}

function checkAnswer(selectedButton, selectedAnswer) {
  if (answerLocked) {
    return;
  }

  const planet = getPlanet();
  const buttons = document.querySelectorAll(".answer-button");
  const isCorrect = selectedAnswer === planet.correctAnswer;

  answerLocked = true;
  lastAnswerCorrect = isCorrect;

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }

  if (isCorrect) {
    sfx.correct();
    score += 10;
    selectedButton.classList.add("correct");

    // Reveal the real planet name and image for the current planet
    planetName.textContent = planet.name;
    planetVisual.classList.remove("mystery");
    planetVisual.classList.add("revealed");
    setPlanetVisualImage(gameData.planets[currentPlanet].image);

    feedbackText.classList.add("success-text");
    feedbackText.textContent = planet.correctText;
    nextButton.classList.remove("hidden");
    updateTrackShip((currentPlanet + 1) / gameData.planets.length);
  } else {
    sfx.wrong();
    fuel = 0;
    selectedButton.classList.add("wrong");

    // Highlight the correct answer button in green
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].textContent === planet.correctAnswer) {
        buttons[i].classList.add("correct");
      }
    }

    feedbackText.classList.add("error-text");
    feedbackText.textContent = planet.wrongText;
    retryButton.classList.remove("hidden");
  }

  updateStats();
}

function goToNextPlanet() {
  if (!lastAnswerCorrect) {
    return;
  }

  const isLastPlanet = currentPlanet === gameData.planets.length - 1;

  if (isLastPlanet) {
    showVictoryOverlay();
    return;
  }

  sfx.whoosh();
  currentPlanet++;
  loadPlanet();
}

function showEndScreen() {
  const text = getText();

  showScreen("end");
  music.stop();
  finalScore.textContent = score;
  finalFuel.textContent = fuel;
  endTitle.textContent = text.successTitle;
  endMessage.textContent = text.successMessage;
}

function showVictoryOverlay() {
  updateVictoryOverlay();
  victoryOverlay.classList.remove("hidden");
  victoryOverlay.setAttribute("aria-hidden", "false");
  sfx.victory();
  music.setIntensity("high");

  var victoryShip = document.querySelector(".banana-ship--victory");
  if (victoryShip) {
    victoryShip.classList.remove("is-flying");
    void victoryShip.offsetWidth;
    victoryShip.classList.add("is-flying");
  }
}

function hideVictoryOverlay() {
  victoryOverlay.classList.add("hidden");
  victoryOverlay.setAttribute("aria-hidden", "true");
  music.setIntensity(currentScreen === "game" ? "medium" : "low");

  var victoryShip = document.querySelector(".banana-ship--victory");
  if (victoryShip) {
    victoryShip.classList.remove("is-flying");
  }
}

function updateVictoryOverlay() {
  const text = getText();

  victoryEyebrow.textContent = text.missionComplete;
  victoryTitle.textContent = text.victoryTitle;
  victorySubtitle.textContent = text.victorySubtitle;
  victoryScoreLabel.textContent = text.finalScore;
  victoryFuelLabel.textContent = text.fuelLeft;
  victoryButton.textContent = text.playAgain;
  victoryScore.textContent = score;
  victoryFuel.textContent = fuel;
  victoryStar.style.backgroundImage = `url("${gameData.victoryStarImage}")`;
}

function setPlanetVisualImage(imagePath) {
  planetVisual.style.backgroundImage = `url("${imagePath}")`;
}

function updateTrackShip(progress) {
  var ship = document.querySelector(".mission-track-ship");
  if (ship) {
    ship.style.setProperty("--track-pos", Math.min(1, Math.max(0, progress)));
  }
}

function openFeedback() {
  sfx.click();
  feedbackTextarea.value = "";
  feedbackThanks.classList.add("hidden");
  feedbackOverlay.classList.remove("hidden");
  feedbackOverlay.setAttribute("aria-hidden", "false");
  feedbackTextarea.focus();
}

function closeFeedback() {
  if (feedbackOverlay.classList.contains("hidden")) { return; }
  feedbackOverlay.classList.add("hidden");
  feedbackOverlay.setAttribute("aria-hidden", "true");
}

function submitFeedback() {
  if (!feedbackTextarea.value.trim()) {
    feedbackTextarea.focus();
    return;
  }
  sfx.correct();
  feedbackTextarea.disabled = true;
  feedbackSend.disabled = true;
  feedbackThanks.classList.remove("hidden");
  setTimeout(function () {
    closeFeedback();
    feedbackTextarea.disabled = false;
    feedbackSend.disabled = false;
  }, 2000);
}

// ── Sound effects (Web Audio API — no audio files needed) ──
const music = (function () {
  var ctx = null;
  var master = null;
  var droneGain = null;
  var pulseGain = null;
  var shimmerGain = null;
  var droneOscA = null;
  var droneOscB = null;
  var pulseTimer = null;
  var shimmerTimer = null;
  var isRunning = false;
  var intensity = "low";

  function getCtx() {
    if (!ctx) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (ctx.state === "suspended") {
      ctx.resume();
    }
    return ctx;
  }

  function ensureGraph() {
    var c = getCtx();
    if (master) {
      return c;
    }

    master = c.createGain();
    droneGain = c.createGain();
    pulseGain = c.createGain();
    shimmerGain = c.createGain();

    master.gain.value = 0;
    droneGain.gain.value = 0;
    pulseGain.gain.value = 0;
    shimmerGain.gain.value = 0;

    var droneFilter = c.createBiquadFilter();
    droneFilter.type = "lowpass";
    droneFilter.frequency.value = 520;
    droneFilter.Q.value = 0.8;

    var pulseFilter = c.createBiquadFilter();
    pulseFilter.type = "bandpass";
    pulseFilter.frequency.value = 900;
    pulseFilter.Q.value = 1.1;

    var shimmerFilter = c.createBiquadFilter();
    shimmerFilter.type = "highpass";
    shimmerFilter.frequency.value = 1100;
    shimmerFilter.Q.value = 0.7;

    droneOscA = c.createOscillator();
    droneOscA.type = "sine";
    droneOscA.frequency.value = 146.83;

    droneOscB = c.createOscillator();
    droneOscB.type = "triangle";
    droneOscB.frequency.value = 220;

    droneOscA.connect(droneFilter);
    droneOscB.connect(droneFilter);
    droneFilter.connect(droneGain);
    droneGain.connect(master);

    pulseGain.connect(pulseFilter);
    pulseFilter.connect(master);

    shimmerGain.connect(shimmerFilter);
    shimmerFilter.connect(master);

    master.connect(c.destination);

    droneOscA.start();
    droneOscB.start();

    return c;
  }

  function ramp(gainNode, value, time) {
    gainNode.gain.cancelScheduledValues(time);
    gainNode.gain.setValueAtTime(gainNode.gain.value, time);
    gainNode.gain.linearRampToValueAtTime(value, time + 1.2);
  }

  function playPulse(now, frequency, duration, volume) {
    var c = ensureGraph();
    var osc = c.createOscillator();
    var env = c.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(frequency, now);
    osc.frequency.exponentialRampToValueAtTime(frequency * 1.5, now + duration);
    env.gain.setValueAtTime(0.0001, now);
    env.gain.exponentialRampToValueAtTime(volume, now + 0.18);
    env.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(env);
    env.connect(pulseGain);
    osc.start(now);
    osc.stop(now + duration + 0.05);
  }

  function playShimmer(now, frequency, duration, volume) {
    var c = ensureGraph();
    var osc = c.createOscillator();
    var env = c.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(frequency, now);
    env.gain.setValueAtTime(0.0001, now);
    env.gain.exponentialRampToValueAtTime(volume, now + 0.05);
    env.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(env);
    env.connect(shimmerGain);
    osc.start(now);
    osc.stop(now + duration + 0.04);
  }

  function schedulePulseLoop() {
    clearInterval(pulseTimer);
    pulseTimer = setInterval(function () {
      if (!isRunning) {
        return;
      }
      var c = ensureGraph();
      var now = c.currentTime + 0.02;
      var notes = intensity === "high" ? [220, 261.63, 329.63] : [174.61, 220, 261.63];
      for (var i = 0; i < notes.length; i++) {
        playPulse(now + i * 0.38, notes[i], 1.8, intensity === "high" ? 0.04 : 0.028);
      }
    }, intensity === "high" ? 1800 : 2400);
  }

  function scheduleShimmerLoop() {
    clearInterval(shimmerTimer);
    shimmerTimer = setInterval(function () {
      if (!isRunning) {
        return;
      }
      var c = ensureGraph();
      var now = c.currentTime + 0.02;
      var notes = intensity === "high" ? [659.25, 783.99, 987.77] : [523.25, 659.25];
      for (var i = 0; i < notes.length; i++) {
        playShimmer(now + i * 0.6, notes[i], 1.6, intensity === "high" ? 0.015 : 0.01);
      }
    }, intensity === "high" ? 2600 : 3600);
  }

  function applyIntensity(level) {
    intensity = level;
    if (!master) {
      return;
    }
    var c = ensureGraph();
    var now = c.currentTime;
    var settings = {
      low: { master: 0.028, drone: 0.018, pulse: 0.026, shimmer: 0.01 },
      medium: { master: 0.04, drone: 0.024, pulse: 0.034, shimmer: 0.013 },
      high: { master: 0.052, drone: 0.03, pulse: 0.045, shimmer: 0.018 },
    }[level];

    ramp(master, settings.master, now);
    ramp(droneGain, settings.drone, now);
    ramp(pulseGain, settings.pulse, now);
    ramp(shimmerGain, settings.shimmer, now);

    schedulePulseLoop();
    scheduleShimmerLoop();
  }

  return {
    start: function () {
      ensureGraph();
      isRunning = true;
      applyIntensity("medium");
    },

    stop: function () {
      if (!master) {
        return;
      }
      isRunning = false;
      clearInterval(pulseTimer);
      clearInterval(shimmerTimer);
      var c = ensureGraph();
      var now = c.currentTime;
      ramp(master, 0, now);
      ramp(droneGain, 0, now);
      ramp(pulseGain, 0, now);
      ramp(shimmerGain, 0, now);
    },

    setIntensity: function (level) {
      if (!isRunning) {
        intensity = level;
        return;
      }
      applyIntensity(level);
    },
  };
}());

const sfx = (function () {
  var ctx = null;

  function getCtx() {
    if (!ctx) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (ctx.state === "suspended") {
      ctx.resume();
    }
    return ctx;
  }

  function note(freq, type, start, dur, vol) {
    var c = getCtx();
    var osc = c.createOscillator();
    var env = c.createGain();
    osc.connect(env);
    env.connect(c.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(freq, start);
    env.gain.setValueAtTime(0, start);
    env.gain.linearRampToValueAtTime(vol, start + 0.008);
    env.gain.exponentialRampToValueAtTime(0.001, start + dur);
    osc.start(start);
    osc.stop(start + dur + 0.01);
  }

  function sweep(freqStart, freqEnd, type, start, dur, vol) {
    var c = getCtx();
    var osc = c.createOscillator();
    var env = c.createGain();
    osc.connect(env);
    env.connect(c.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(freqStart, start);
    osc.frequency.exponentialRampToValueAtTime(freqEnd, start + dur);
    env.gain.setValueAtTime(0, start);
    env.gain.linearRampToValueAtTime(vol, start + 0.01);
    env.gain.exponentialRampToValueAtTime(0.001, start + dur);
    osc.start(start);
    osc.stop(start + dur + 0.01);
  }

  return {
    // Three ascending chime tones — C5, E5, G5
    correct: function () {
      var c = getCtx(); var t = c.currentTime;
      note(523.25, "sine", t,        0.18, 0.30);
      note(659.25, "sine", t + 0.10, 0.18, 0.30);
      note(783.99, "sine", t + 0.20, 0.32, 0.32);
    },

    // Two descending sawtooth growls
    wrong: function () {
      var c = getCtx(); var t = c.currentTime;
      sweep(300, 120, "sawtooth", t,        0.18, 0.22);
      sweep(260, 100, "sawtooth", t + 0.15, 0.22, 0.18);
    },

    // Rising engine ignition sweep (sine + triangle layered)
    launch: function () {
      var c = getCtx(); var t = c.currentTime;
      sweep(90,  700, "sine",     t,        0.55, 0.28);
      sweep(90,  700, "triangle", t + 0.05, 0.50, 0.13);
    },

    // Quick upward frequency sweep — warp to next planet
    whoosh: function () {
      var c = getCtx(); var t = c.currentTime;
      sweep(280, 1400, "sine", t, 0.26, 0.20);
    },

    // C5-E5-G5 run, then C6 major chord held
    victory: function () {
      var c = getCtx(); var t = c.currentTime;
      note(523.25, "sine", t,        0.20, 0.28);
      note(659.25, "sine", t + 0.12, 0.20, 0.28);
      note(783.99, "sine", t + 0.24, 0.20, 0.28);
      note(1046.50, "sine", t + 0.36, 0.60, 0.32);
      note(783.99,  "sine", t + 0.36, 0.60, 0.16);
      note(659.25,  "sine", t + 0.36, 0.60, 0.12);
    },

    // Soft UI tick for buttons
    click: function () {
      var c = getCtx(); var t = c.currentTime;
      note(880, "sine", t, 0.06, 0.12);
    },
  };
}());
