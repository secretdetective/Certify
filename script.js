function writeText(text){
  let index = 0;
  function writeNextLetter(){
    if(index < text.length){
      document.getElementById('title').innerHTML += text.charAt(index);
      index++;
    } else{
      clearInterval(interval);
    }
  }
  let interval = setInterval(writeNextLetter, 100);
}
writeText('© 2024 Certify - All Rights Reserved');

function toggleDarkMode() {
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('nav').classList.toggle('dark-mode');
    document.querySelectorAll('.product').forEach(product => {
        product.classList.toggle('dark-mode');
    });
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelector('h3').classList.toggle('dark-mode');
    
    document.querySelector('form').classList.toggle('dark-mode');
    
const body = document.body;    
const nav = document.querySelector('nav');
if (nav) {
nav.classList.toggle('dark-mode');
}


const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
link.classList.toggle('dark-mode');
});
if (body.classList.contains('dark-mode')) {
darkModeToggle.textContent = 'Light Mode'; 
} else {
darkModeToggle.textContent = 'Dark Mode'; 
}
}





document.addEventListener('DOMContentLoaded', () => {
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

if (hamburger && menu) {
hamburger.addEventListener('click', () => {
hamburger.classList.toggle('active');
menu.classList.toggle('active');
});

document.addEventListener('click', (event) => {
if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
hamburger.classList.remove('active');
menu.classList.remove('active');
}
});
} else {
console.error("Error");
}
});


let highlightedElements = [];

function highlightSearch() {
const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
if (!searchTerm) return;

const searchTerms = searchTerm.split(/\s+/);

const paragraphs = document.querySelectorAll('#content p');

removeHighlights(paragraphs);

highlightedElements = [];
paragraphs.forEach(p => {
let innerHTML = p.innerHTML;
searchTerms.forEach(term => {
const regex = new RegExp(`(${term})`, 'gi');
innerHTML = innerHTML.replace(regex, '<mark class="highlight">$1</mark>');
});
if (innerHTML !== p.innerHTML) {
highlightedElements.push(p);
}
p.innerHTML = innerHTML;
});

if (highlightedElements.length > 0) {
highlightedElements[0].scrollIntoView({ behavior: 'smooth' });
}
}

function removeHighlights(paragraphs) {
paragraphs.forEach(p => {
p.innerHTML = p.innerHTML.replace(/<mark class="highlight">|<\/mark>/g, '');
});
}
window.title = "Certify";
