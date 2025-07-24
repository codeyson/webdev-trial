import './style.css'

const message = document.getElementById('message');
const input = document.querySelector('input');
const send = document.getElementById('send');
const passed = document.getElementById('passed');


send.addEventListener('click', () => {
  message.content = input.value;
  input.value = '';
  passed.innerHTML = message.content;
})