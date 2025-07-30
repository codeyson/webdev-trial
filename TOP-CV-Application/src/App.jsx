import './styles/App.css'
import Personal from './components/Personal'
import Education from './components/Education'
import Experience from './components/Experience'

function App() {

  return (
    <>
    <div className='main-container'>
      <Personal />
      <Education />
      <Experience />
    </div>

    </>
  )
}

export default App
