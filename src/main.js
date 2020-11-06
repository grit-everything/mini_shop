function loadItems() {
  return fetch('data/data.json')
    .then((res) => res.json())
    .then((data) => data.items);
}

function displayItems(items) {
  const container = document.querySelector('.items');
  container.innerHTML = items.map((item) => createHTMLString(item)).join('');
}

function createHTMLString(item) {
  return `
  <li class="item">
  <img src=${item.image} alt=${item.type} class="item__thumbnail"/>
  <span>${item.gender}, ${item.size} size </span>
  </li>

  `;
}

function onButttonClick(e, items) {
  const dataset = e.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if (key == null || value == null) {
    return;
  }
  displayItems(items.filter((item) => item[key] === value));
}

function setEventListeners(items) {
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.buttons');
  logo.addEventListener('click', () => displayItems(items));
  buttons.addEventListener('click', (e) => onButttonClick(e, items));
}

//main

loadItems().then((items) => {
  displayItems(items);
  setEventListeners(items);
});
