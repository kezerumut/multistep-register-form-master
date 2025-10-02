let currentStep = 1;
let userName = "";
let userEmail = "";
let userTopic = "";

function showStep(step) {
  for (let i = 1; i <= 3; i++) {
    document.getElementById(`step-${i}`).style.display = "none";
  }
  document.getElementById(`step-${step}`).style.display = "block";
}

function updateStepIndicator(currentStep) {
  document.getElementById("stepText").textContent = `Step ${currentStep} of 3`;
  for (let i = 1; i <= 3; i++) {
    document
      .getElementById(`dot${i}`)
      .classList.toggle("active", i === currentStep);
  }
}

function nextStep() {
  if (currentStep < 3) {
    currentStep++;
    showStep(currentStep);
    updateStepIndicator(currentStep);
    // Step 3'e geçerken özet bilgileri doldur
    if (currentStep === 3) {
      document.getElementById("summaryName").textContent = userName;
      document.getElementById("summaryEmail").textContent = userEmail;
      document.getElementById("summaryTopics").textContent = userTopic;
    }
  }
}

showStep(currentStep);
updateStepIndicator(currentStep);

// 1. adım formu
const step1Form = document.querySelector("#step-1 form");
if (step1Form) {
  step1Form.addEventListener("submit", function (e) {
    e.preventDefault();
    userName = document.querySelector('#step-1 input[type="text"]').value;
    userEmail = document.querySelector('#step-1 input[type="email"]').value;
    nextStep();
  });
}

// 2. adım topic seçimi
const topicButtons = document.querySelectorAll(
  "#step-2 .buttons-interest button"
);
topicButtons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    userTopic = this.textContent;
    topicButtons.forEach((b) => b.classList.remove("selected"));
    this.classList.add("selected");
  });
});

const step2Form = document.querySelector("#step-2 form");
if (step2Form) {
  step2Form.addEventListener("submit", function (e) {
    e.preventDefault();
    nextStep();
  });
}
