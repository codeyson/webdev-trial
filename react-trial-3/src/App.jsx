import Form from './components/Form.jsx'
import Button from './components/Button.jsx' 
import Gallery from './components/Gallery.jsx'

import './App.css'



export default function App() {
  const handleButtonClick = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div>
      <Button handleClick={handleButtonClick} />
      <Form />
      <Gallery />
    </div>
  );

}

