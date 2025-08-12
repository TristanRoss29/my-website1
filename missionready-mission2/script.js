const changeColourBtn = document.getElementById('changeColourBtn');
let isLight = true;

function toggleBackground() {
  document.body.classList.toggle('darkmode');

  if (isLight) {
    changeColourBtn.textContent = 'Switch to Light Mode';
  } else {
    changeColourBtn.textContent = 'Switch to Dark Mode';
  }

  isLight = !isLight;
}

changeColourBtn.addEventListener('click', toggleBackground);

const skills = document.querySelectorAll('#skills-list li');
let totalSkills = 0;

for (let i = 0; i < skills.length; i++) {  // loop
  totalSkills += 1;                       
}

const skillCountElement = document.getElementById('skill-count');
skillCountElement.textContent = `Total Skills: ${totalSkills}`;
