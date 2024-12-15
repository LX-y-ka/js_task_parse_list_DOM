'use strict';

// write code here

let list = document.querySelectorAll('li');

function sort(ls) {
  list = [...ls].sort((a, b) => {
    const fS = parseFloat(a.getAttribute('data-salary').replace(/[$,]/g, ''));
    const sS = parseFloat(b.getAttribute('data-salary').replace(/[$,]/g, ''));

    return sS - fS;
  });
}

function getEmployees(ls) {
  const container = document.createDocumentFragment();

  for (let i = 0; i < ls.length; i++) {
    const li = document.createElement('li');

    li.setAttribute('data-position', ls[i].getAttribute('data-position'));
    li.setAttribute('data-salary', ls[i].getAttribute('data-salary'));
    li.setAttribute('data-age', ls[i].getAttribute('data-age'));
    li.innerText = ls[i].innerText.trim();
    container.appendChild(li);
  }

  return container;
}

sort(list);
document.querySelector('ul').innerHTML = '';
document.querySelector('ul').appendChild(getEmployees(list));
