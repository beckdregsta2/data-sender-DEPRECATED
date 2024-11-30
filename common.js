function saveChoice(key, value) {
    const choices = JSON.parse(localStorage.getItem("userChoices")) || {};
    choices[key] = value;
    localStorage.setItem("userChoices", JSON.stringify(choices));
  }