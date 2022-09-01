document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('#new-task-description')
    console.log(input.value)
    addToDo(input.value)
  })
});

const addToDo = (todo) => {
  let p = document.createElement('p');
  let btn = document.createElement('button');

  p.textContent = `${todo} `;
  btn.textContent = " x "

  document.querySelector('#tasks').appendChild(p);
  p.appendChild(btn);

  btn.addEventListener('click', (event) => deleteToDo(event))
}

const deleteToDo = (event) => {
  event.target.parentNode.remove();
}