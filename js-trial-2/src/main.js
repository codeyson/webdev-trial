import './style.css'





function setMessage() {

const message = document.getElementById('message');
const input = document.querySelector('input');
const send = document.getElementById('send');
const passed = document.getElementById('passed');

send.addEventListener('click', () => {
  message.content = input.value;
  input.value = '';
  passed.innerHTML = message.content;
  passed.style.padding = "5px  4px";
  passed.style.borderRadius = "5px"; 
  passed.style.backgroundColor = 'red';

})
}

setMessage();