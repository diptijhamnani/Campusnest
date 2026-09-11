/* =================================
   CAMPUSNEST - SCRIPT.JS
   ================================= */

// ---------- SIDEBAR NAVIGATION ----------

const navLinks = document.querySelectorAll(".sidebar a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});


// ---------- AI ASSISTANT ----------

function askAI() {

    const question = document.getElementById("question");
    const answer = document.getElementById("aiAnswer");

    if (!question || !answer) return;

    const userQuestion = question.value.trim();

    if (userQuestion === "") {
        answer.innerText = "Please type your question first.";
        return;
    }

    answer.innerText =
        "🤖 CampusNest AI: I'll help you with information about — "
        + userQuestion;
}


// ---------- ENTER KEY FOR AI ----------

const aiQuestion = document.getElementById("question");

if (aiQuestion) {
    aiQuestion.addEventListener("keypress", function (event) {

        if (event.key === "Enter") {
            askAI();
        }

    });
}


// ---------- WELCOME MESSAGE ----------

console.log("🎓 CampusNest loaded successfully!");


// ---------- CURRENT DATE ----------

const today = new Date();

const dateElements = document.querySelectorAll(".current-date");

dateElements.forEach(element => {

    element.innerText = today.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

});


// ---------- BUTTON CLICK FEEDBACK ----------

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        this.style.transform = "scale(0.97)";

        setTimeout(() => {
            this.style.transform = "";
        }, 100);

    });

});
