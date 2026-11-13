const menuToggle = document.querySelector('#menuToggle');
const navLinks = document.querySelector('#navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const quizOptions = document.querySelectorAll('.quiz-option');
const quizFeedback = document.querySelector('#quizFeedback');

quizOptions.forEach(option => {
  option.addEventListener('click', () => {
    quizOptions.forEach(item => item.classList.remove('correct', 'wrong'));
    if (option.dataset.answer === 'a') {
      option.classList.add('correct');
      quizFeedback.textContent = '答對了！從眾效應是指個人的想法或行為受到群體影響，而傾向跟隨多數人的選擇。';
    } else {
      option.classList.add('wrong');
      quizFeedback.textContent = '再想想看！提示：題目描述的是受到身邊多數人的選擇影響。';
    }
  });
});
