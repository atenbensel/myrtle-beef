const messages = [
  "Make the children wear gloves during snack time!",
  "Mix equal parts water and vinegar to get rid of that coochie stank.",
  "Use a squeegee to remove nacho cheese from your carpet.",
  "To clean a microwave, microwave a bowl of water with a slice of lemon for 3 minutes, then forget about it.",
  "For hard-to-reach areas, use an old toothbrush use as a mic to tell a girl about two girls, one cup at a coffee shop.",
  "To remove stubborn stains from fabric, mix, ketchup, mustard, soy sauce and sriracha together and spread on effected area. No one will know you have another stain underneath."
];

function generateMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

const adviceBtn = document.getElementById("adviceBtn");
const adviceText = document.getElementById("adviceText");

adviceBtn.addEventListener("click", () => {
  adviceText.textContent = generateMessage();
});
