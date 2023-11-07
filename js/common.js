const searchEl = document.querySelector('.search');
const searchinputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
    searchinputEl.focus();
});

searchinputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused');
    searchinputEl.setAttribute('placeholder','통합검색');
});

searchinputEl.addEventListener('blur',function(){ // 포커스 빠졌을 때
    searchEl.classList.remove('focused');
    searchinputEl.setAttribute('placeholder','');
});

const thisYearEl = document.querySelector('.this-year');
const now = new Date();
thisYearEl.textContent = now.getFullYear();
