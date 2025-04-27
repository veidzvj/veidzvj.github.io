import './MainCard.css'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Summary from './components/Summary/Summary'

function MainCard() {
  return (
    <div className="main-card-container">
      <Summary />
      <About />
      <Experience />
    </div>
  )
}

export default MainCard
