import './style.css'

async function generateQuotes() {
  const input = document.querySelector('#input')
  const button = document.querySelector('#button')
  const output = document.querySelector('#output')

  const count = 2;
  
  if (!input) {
    alert('Please enter a number');
    return;
  }

const url = `https://api.quotable.io/random`; // use different API 



  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
      
  } catch (error) {
    console.error(error);
  }

}

generateQuotes();