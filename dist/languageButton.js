let languages = ['EN', 'NL']; // Replace with your desired languages
let currentLanguageIndex = 0;
const dutchElements =  document.querySelectorAll('[language="nl"]');
const englishElements =  document.querySelectorAll('[language="en"]');
function toggleLanguage() {
  currentLanguageIndex = (currentLanguageIndex + 1) % languages.length;
  updateLanguage();
}

function updateLanguage() {
  let languageElement = document.getElementsByClassName('language-button')[0];
  languageElement.innerHTML = '' + languages[currentLanguageIndex];
  if (languages[currentLanguageIndex] === 'EN') {
    englishElements.forEach(element => {
      element.style.display = 'none';
    });
    dutchElements.forEach(element => {
      element.style.display = 'block';
    });
  } else {
    englishElements.forEach(element => {
      element.style.display = 'block';
    });
    dutchElements.forEach(element => {
      element.style.display = 'none';
    });
  }
  
  // Here, you can add logic to change the content of your slides based on the selected language.
  // You may need to assign unique IDs or classes to elements you want to change.
  // Example: document.getElementById('slide-content').innerHTML = 'Hello, ' + languages[currentLanguageIndex];
}

// Initialize the button text
updateLanguage();